import React from 'react';
import Login from '../components/pages/Login';
import * as enzyme from 'enzyme';
//jest.unmock('axios');
import { DefaultTypelessProvider } from 'typeless';

describe('<Login />', () => {

    let wrapper: enzyme.ShallowWrapper;

    beforeEach(() => {
        wrapper = enzyme.shallow(
            <DefaultTypelessProvider>
                <Login />
            </DefaultTypelessProvider>
        );
    });

    it('should render Login component correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    })

    

    // it('should show login success', () => {
    //     //const wrapper = enzyme.shallow(<Login />);

    //     //expect(wrapper.find('Test')).toMatchSnapshot();

    //     //jest.spyOn(user, '')

    //     const usernameInput = wrapper.find('.input1');
    //     usernameInput.simulate('change', { target: { value: 'brij@hcl.com' } });

    //     const passwordInput = wrapper.find('.input2');
    //     passwordInput.simulate('change', { target: { value: '123456' } });

    //     const data = {
    //         email: 'brij@hcl.com',
    //         password: '123456'
    //     }
    //     const responseData = { data: { message: 'success', data: {} } };
    //     //mock.onPost('https://reqres.in/api/login').reply(200,responseData);
    //     mockedAxios.post.mockImplementationOnce(() => Promise.resolve(responseData))

    //     const button = wrapper.find('button');
    //     button.simulate('click');

    //     expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    //     expect(mockedAxios.post).toHaveBeenCalledWith('https://simple-login-signup-rest.herokuapp.com/api/user/login', data);

    // })
})

