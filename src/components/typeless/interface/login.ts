// features/counter/interface.ts

import { createModule } from 'typeless';
import { LoginSymbol } from '../symbol';

// initialize the module
export const [loginHandle, LoginActions, getLoginState] = createModule(LoginSymbol)
    // Create Actions Creators
    .withActions({
        signIn: (email: string, password: string) => ({ payload: { email, password } }),
        signInSuccess: (result: Result) => ({ payload: { result } }),
        signInError: (error: Error) => ({ payload: { error } }),
        usernameChange: (username: string) => ({ payload: { username } }),
        passwordChange: (password: string) => ({ payload: { password } }),
        activeItemChange: (activeItem: string) => ({ payload: { activeItem } }),
    })
    //
    .withState<LoginState>();

export interface LoginState {
    isLoading: boolean;
    isSignedIn: boolean;
    result: Result;
    error: Error;
    username: string;
    password: string;
    formSubmitStatus: string;
    activeItem: string;
}

export interface Result {
    message: string;
    data: Data[];
}

interface Data {
    _id: string,
    email: string,
    password: string
}

export interface Error {

}