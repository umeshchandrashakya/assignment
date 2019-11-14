import React from "react";
import { LoginActions, LoginState, loginHandle } from "../interface/login";
import { RegActions, RegState, regHandle } from "../interface/reg";
import api from "../../../apis";
import history from "../../../history";
import App from "../../App";

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
  activeItem: "home",
  userNameEmpty: false,
  passwordEmpty: false
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
    history.push("/");
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
  .on(LoginActions.isUserNameEmpty, (state, { isField }) => {
    state.userNameEmpty = isField;
  })
  .on(LoginActions.isPasswordEmpty, (state, { isField }) => {
    state.passwordEmpty = isField;
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
  name: "",
  email: "",
  phone: "",
  password: "",
  formSubmitStatus: "",
  activeItem: "home"
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
    state.formSubmitStatus = "success";
    history.push("/");
  })
  .on(RegActions.regError, (state, { error }) => {
    state.isLoading = false;
    state.formSubmitStatus = "error";
    state.error = error;
  })
  .on(RegActions.nameChange, (state, { name }) => {
    state.name = name;
  })
  .on(RegActions.emailChange, (state, { email }) => {
    state.email = email;
  })
  .on(RegActions.phoneChange, (state, { phone }) => {
    state.phone = phone;
  })
  .on(RegActions.passwordChange, (state, { password }) => {
    state.password = password;
  })
  .on(RegActions.activeItemChange, (state, { activeItem }) => {
    state.activeItem = activeItem;
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

// Entry point component for this module
const BaseModule: React.FC = () => {
  // load epic and reducer
  loginHandle();
  regHandle();

  return <App />;
};

export default BaseModule;
