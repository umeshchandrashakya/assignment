// features/counter/module.ts
import { RegActions, RegState, regHandle } from '../interface/reg';
import api from "../../../apis";
import history from '../../../history';

// Create Epic for side effects
regHandle
    .epic()
    // Listen for `count` and dispatch `countDone` with 500ms delay
    .on(RegActions.register, ({ name, email, phone, password }) => {
        //Rx.of(CounterActions.countDone(1)).pipe(Rx.delay(1000))
        return signIn(name, email, phone, password);
    }
    );

const initialState: RegState = {
    isLoading: false,
    isSuccess: false,
    result: { message: "", data: [] },
    error: {},
    name: '',
    email: '',
    phone: '',
    password:'',
    formSubmitStatus: '',
    activeItem: 'home'
};

// Create a reducer
// It's compatible with a standard reducer `(state, action) => state`
// Under the hood it uses `immer` and state mutations are allowed
regHandle
    .reducer(initialState)
    .on(RegActions.register, state => {
        state.isLoading = true;
    })
    .on(RegActions.regSuccess, (state, { result }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.result = result;
        state.formSubmitStatus = 'success';
        history.push('/');
    })
    .on(RegActions.regError, (state, { error }) => {
        state.isLoading = false;
        state.formSubmitStatus = 'error';
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

export const signIn = async (name: string, email: string, phone: string, password: string) => {
    try {
        const response = await api.post('/api/user', { "name": name, "email": email, "phone": phone, "password": password });
        return RegActions.regSuccess(response.data)
    } catch (error) {
        return RegActions.regError(error);
    }
}