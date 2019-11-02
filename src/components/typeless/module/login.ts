// features/counter/module.ts
import { LoginActions, LoginState, loginHandle } from '../interface/login';
import api from "../../../apis";
import history from '../../../history';

// Create Epic for side effects
loginHandle
    .epic()
    // Listen for `count` and dispatch `countDone` with 500ms delay
    .on(LoginActions.signIn, ({ email, password }) => {
        //Rx.of(CounterActions.countDone(1)).pipe(Rx.delay(1000))
        return signIn(email, password);
    }
    );

const initialState: LoginState = {
    isLoading: false,
    isSignedIn: false,
    result: { message: "", data: [] },
    error: {},
    username: '',
    password: '',
    formSubmitStatus: '',
    activeItem: 'home'
};

// Create a reducer
// It's compatible with a standard reducer `(state, action) => state`
// Under the hood it uses `immer` and state mutations are allowed
loginHandle
    .reducer(initialState)
    .on(LoginActions.signIn, state => {
        state.isLoading = true;
    })
    .on(LoginActions.signInSuccess, (state, { result }) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.result = result;
        state.formSubmitStatus = 'success';
        history.push('/');
    })
    .on(LoginActions.signInError, (state, { error }) => {
        state.isLoading = false;
        state.formSubmitStatus = 'error';
        state.error = error;
    })
    .on(LoginActions.usernameChange, (state, { username }) => {
        state.username = username;
    })
    .on(LoginActions.passwordChange, (state, { password }) => {
        state.password = password;
    })
    .on(LoginActions.activeItemChange, (state, { activeItem }) => {
        state.activeItem = activeItem;
    });

export const signIn = async (email: string, password: string) => {
    try {
        const response = await api.post('/api/user/login', { "email": email, "password": password });
        return LoginActions.signInSuccess(response.data)
    } catch (error) {
        return LoginActions.signInError(error);
    }
}