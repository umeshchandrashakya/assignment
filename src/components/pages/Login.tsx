import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
import Label from "../atoms/Label";
import InputText from "../atoms/InputText";
import Button from "../atoms/Button";
import LoginForm from "../template/LoginForm";
const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 350px;
  height: 350px;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;
  

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  `;

//   button {
//     background: green;
//     color: #fff;
//     padding: 10px;
//     margin: 5px;
//     width: 150px;
//     border: none;
//     border-radius: 10px;
//     box-sizing: border-box;
//   }
// `;
// const StyledLabel = styled.label`
// font-weight: bold; 
// caret-color: getColor('blue'); 
// display: block;
// text-align: left;
// margin-right: 23%;

// `;


// const StyledInput = styled.input`
//   border: 1px solid #000;
//   border-radius: 10px;
//   padding: 10px;
//   margin: 5px;
//   width: 150px;
//   box-sizing: border-box;
// `;


const Login = () => {
  return (
    <LoginForm title='Login Form' />
  )
}



// <StyledLogin>
//   <h2>Login</h2>

{/*        <StyledLabel  >Username</StyledLabel>
       <StyledInput type="text" placeholder="email" />
       <StyledLabel >Password</StyledLabel>
      <StyledInput type="password" placeholder="password" /> */}
{/* <Label/> */ }
{/* <InputText/> */ }
//          <button>Login</button>

{/* <StyledInput type="text" placeholder="email" />
    <StyledInput type="password" placeholder="password" />
    <button>Login</button> */}
// </StyledLogin>

;
export default Login;
=======
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
>>>>>>> 8bf5e14b48a57b673863ca505d557475edf71322
