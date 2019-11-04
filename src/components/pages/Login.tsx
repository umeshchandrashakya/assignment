import React from "react";
import { useActions } from "typeless";
import { LoginActions, getLoginState } from "../typeless/interface/login";

const Login: React.FC = () => {
  // wrap actions with `dispatch`
  const { usernameChange, passwordChange, signIn } = useActions(LoginActions);
  // get state from store
  const { username, password, isLoading, error, isSignedIn, formSubmitStatus } = getLoginState.useState();

  const onLoginClicked = () => {
    signIn(username, password);
  }

  const getStatus = () => {
     if (formSubmitStatus) {
       return isLoading ? 'Loading, please wait...' : (isSignedIn ? 'Successfully logged in' : `Error: ${error}`)
     }
     return '';
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input className='input1' value={username} placeholder='Username' onChange={e => usernameChange(e.target.value)} />
        <input className='input2' value={password} placeholder='Password' onChange={e => passwordChange(e.target.value)} />
        <button type='button' onClick={onLoginClicked}>Login</button>
      </form>
      <h3>{getStatus()}</h3>
    </div>
  );
};

export default Login;
