import React from "react";
import { LoginActions, LoginState, loginHandle } from "../interface/login";
import { RegActions, RegState, regHandle } from "../interface/reg";
import api from "../../../apis";
import history from '../../../history';
import App from '../../App';
import { Epic } from 'typeless';
import { isUndefined } from 'util';

// Create Epic for side effects
loginHandle
  .epic()
  // Listen for `count` and dispatch `countDone` with 500ms delay
  .on(LoginActions.signIn, ({ email, password }) => {
    //Rx.of(CounterActions.countDone(1)).pipe(Rx.delay(1000))
    return signIn(email, password);
  });

const initialStateLogin: LoginState = {
  isLoading: false,
  isSignedIn: false,
  result: { message: "", data: [] },
  error: {},
  username: "",
  password: "",
  formSubmitStatus: "",
  activeItem: "home"
};

// Create a reducer
// It's compatible with a standard reducer `(state, action) => state`
// Under the hood it uses `immer` and state mutations are allowed
loginHandle
  .reducer(initialStateLogin)
  .on(LoginActions.signIn, state => {
    state.isLoading = true;
  })
  .on(LoginActions.signInSuccess, (state, { result }) => {
    state.isLoading = false;
    state.isSignedIn = true;
    state.result = result;
    state.formSubmitStatus = "success";
    history.push("/welcome");
    state.username = "";
    state.password = "";
    console.log("Login Suceess");
  })
  .on(LoginActions.signInError, (state, { error }) => {
    state.isLoading = false;
    state.formSubmitStatus = "error";
    state.error = error;
    console.log("Login Error");
  })
  .on(LoginActions.usernameChange, (state, { username }) => {
    state.username = username;
  })
  .on(LoginActions.passwordChange, (state, { password }) => {
    state.password = password;
  })
  .on(LoginActions.activeItemChange, (state, { activeItem }) => {
    state.activeItem = activeItem;
  })
  .on(LoginActions.isUserNameValid, (state, { isField }) => {
    state.validUserName = isField;
  })
  .on(LoginActions.isPasswordValid, (state, { isField }) => {
    state.validPassword = isField;
  });

export const signIn = async (email: string, password: string) => {
  try {
    const response = await api.post("/api/user/login", {
      email: email,
      password: password
    });

    return LoginActions.signInSuccess(response.data);
  } catch (error) {
    return LoginActions.signInError(error);
  }
};

// Create Epic for side effects
regHandle
  .epic()
  // Listen for `count` and dispatch `countDone` with 500ms delay
  .on(RegActions.register, ({ name, email, phone, password }) => {
    //Rx.of(CounterActions.countDone(1)).pipe(Rx.delay(1000))
    return register(name, email, phone, password);
  });

const initialStateReg: RegState = {
    isLoading: false,
    isSuccess: false,
    result: { message: "", data: [] },
    error: {},
    name: '',
    email: '',
    phone: '',
    password: '',
    formSubmitStatus: '',
    activeItem: 'home',
};

// Create a reducer
// It's compatible with a standard reducer `(state, action) => state`
// Under the hood it uses `immer` and state mutations are allowed
regHandle
    .reducer(initialStateReg)
    .on(RegActions.register, state => {
        state.isLoading = true;
    })
    .on(RegActions.regSuccess, (state, { result }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.result = result;
        state.formSubmitStatus = 'success';
        history.push('/welcome');
    })
    .on(RegActions.regError, (state, { error }) => {
        state.isLoading = false;
        state.formSubmitStatus = 'error';
        state.error = error;
    })
    .on(RegActions.nameChange, (state, { name }) => {
        state.validName = name !== '';
        state.name = name;
    })
    .on(RegActions.emailChange, (state, { email }) => {
        state.validEmail = validateEmail(email);
        state.email = email;
    })
    .on(RegActions.phoneChange, (state, { phone }) => {
        state.validPhone = validatePhoneNumber(phone);
        state.phone = phone;
    })
    .on(RegActions.passwordChange, (state, { password }) => {
        state.validPassword = password !== '';
        state.password = password;
    })
    .on(RegActions.activeItemChange, (state, { activeItem }) => {
        state.activeItem = activeItem;
    }).on(RegActions.validate, (state, { }) => {
        if (isUndefined(state.validName))
            state.validName = false;
        if (isUndefined(state.validEmail))
            state.validEmail = false;
        if (isUndefined(state.validPhone))
            state.validPhone = false;
        if (isUndefined(state.validPassword))
            state.validPassword = false;
    });

export const register = async (
  name: string,
  email: string,
  phone: string,
  password: string
) => {
  try {
    const response = await api.post("/api/user", {
      name: name,
      email: email,
      phone: phone,
      password: password
    });
    return RegActions.regSuccess(response.data);
  } catch (error) {
    return RegActions.regError(error);
  }
};

function validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phone: string) {
    var regEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regEx.test(phone);
}

// Entry point component for this module
const BaseModule: React.FC = () => {
  // load epic and reducer
  loginHandle();
  regHandle();

  return <App />;
};

export default BaseModule;
