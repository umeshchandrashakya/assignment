import React from "react";
import styled from "styled-components";
import Label from "../atoms/Label";
import InputText from "../atoms/InputText";
import Button from "../atoms/Button";
import StyledLogin from "../template/LoginForm";

// const StyledLogin = styled.div`
//   display: flex;
//   align-items: center;
//   flex-flow: column;
//   width: 350px;
//   height: 350px;
//   margin: 0 auto;
//   border: 2px solid #000;
//   border-radius: 20px;
//   background: #eee;
  

//   h2 {
//     font-family: Arial, Helvetica, sans-serif;
//     font-size: 14px;
//   }
//   `;

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
    <StyledLogin title={"Login Form"}></StyledLogin>
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