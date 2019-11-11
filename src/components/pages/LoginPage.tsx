import React from "react";
import styled from "styled-components";
import Label from "../atoms/Label";
import InputText from "../atoms/InputText";
import Button from "../atoms/Button";
import Login from "../template/Login";
import { useActions } from "typeless";
import { LoginActions, getLoginState } from '../typeless/interface/login';



const LoginPage = () => {

  const { usernameChange, passwordChange, signIn } = useActions(LoginActions);
  const { username, password } = getLoginState.useState();

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    usernameChange(e.target.value)
  }
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordChange(e.target.value)
  }
  const onLoginClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    signIn(username, password);
    e.preventDefault();
  }
  return (
    <Login
      onUsernameChange={onUsernameChange}
      onPasswordChange={onPasswordChange}
      onClick={onLoginClick}
      title={"Login Form"} />
  )
}


export default LoginPage;

