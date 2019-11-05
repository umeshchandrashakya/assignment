// features/counter/interface.ts

import { createModule } from 'typeless';
import { RegistrationSymbol } from '../symbol';

// initialize the module
export const [regHandle, RegActions, getRegState] = createModule(RegistrationSymbol)
    // Create Actions Creators
    .withActions({
        register: (name: string, email: string, phone: string, password: string) => ({ payload: { name, email, phone, password } }),
        regSuccess: (result: Result) => ({ payload: { result } }),
        regError: (error: Error) => ({ payload: { error } }),
        nameChange: (name: string) => ({ payload: { name } }),
        emailChange: (email: string) => ({ payload: { email } }),
        phoneChange: (phone: string) => ({ payload: { phone } }),
        passwordChange: (password: string) => ({ payload: { password } }),
        activeItemChange: (activeItem: string) => ({ payload: { activeItem } }),
    })
    //
    .withState<RegState>();

export interface RegState {
    isLoading: boolean;
    isSuccess: boolean;
    result: Result;
    error: Error;
    name: string;
    email: string;
    phone: string;
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