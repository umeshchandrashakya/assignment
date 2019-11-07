import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('<API />', () => {

    beforeEach(() => {

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

    afterEach(() => {
        jest.clearAllMocks();
    });
})