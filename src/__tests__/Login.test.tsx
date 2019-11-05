import React from 'react';
import Login from '../components/pages/Login';
import * as enzyme from 'enzyme';
//jest.unmock('axios');
import axios from 'axios';
import { DefaultTypelessProvider } from 'typeless';
//import MockAdapter from 'axios-mock-adapter';
//import { userLogin, getUsers } from '../apis';

// wrap the module in jest.mock() 
jest.mock('axios');
// This sets the mock adapter on the default instance
//var mock = new MockAdapter(axios);
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<Login />', () => {

    let wrapper: enzyme.ShallowWrapper;

    beforeEach(() => {
        wrapper = enzyme.shallow(
            <DefaultTypelessProvider>
                <Login />
            </DefaultTypelessProvider>
        );
    });

    it('should call a userLogin function', async () => {
        const data = {
            email: 'brij@hcl.com',
            password: '123456'
        }
        const responseData = { data: { token: '' } };
        //mock.onPost('https://reqres.in/api/login').reply(200,responseData);
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(responseData))
        //mockedAxios.get.mockImplementationOnce(()={})
        //mockedAxios.post.mockResolvedValue(responseData);
        //const consoleLogSpy = jest.spyOn(console, 'log');
        const stateCallback = jest.fn();
        const response = await axios.get('https://simple-login-signup-rest.herokuapp.com/api/user');
        //const response = await getUsers();
        expect(response).toEqual(responseData);
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith('https://simple-login-signup-rest.herokuapp.com/api/user');
        //expect(wrapper.find('success')).not.toBeNull();
        //done();
    });

    it('should show login success', () => {
        //const wrapper = enzyme.shallow(<Login />);

        //expect(wrapper.find('Test')).toMatchSnapshot();

        //jest.spyOn(user, '')

        const usernameInput = wrapper.find('.input1');
        usernameInput.simulate('change', { target: { value: 'brij@hcl.com' } });

        const passwordInput = wrapper.find('.input2');
        passwordInput.simulate('change', { target: { value: '123456' } });

        const data = {
            email: 'brij@hcl.com',
            password: '123456'
        }
        const responseData = { data: { message: 'success', data: {} } };
        //mock.onPost('https://reqres.in/api/login').reply(200,responseData);
        mockedAxios.post.mockImplementationOnce(() => Promise.resolve(responseData))

        const button = wrapper.find('button');
        button.simulate('click');

        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
        expect(mockedAxios.post).toHaveBeenCalledWith('https://simple-login-signup-rest.herokuapp.com/api/user/login', data);

    })

    afterEach(() => {
        jest.clearAllMocks();
    });
})

