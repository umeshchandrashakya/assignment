import React from "react";
import styled from "styled-components";
import Label from "../atoms/Label";
import InputText from "../atoms/InputText";
import Button from "../atoms/Button";
import Login from "../template/Login";
import { useActions } from "typeless";
import { LoginActions, getLoginState } from "../typeless/interface/login";
import { is } from "@babel/types";
import history from "../../history";
const LoginPage = () => {
  const {
    usernameChange,
    passwordChange,
    signIn,
    isPasswordEmpty,
    isUserNameEmpty
  } = useActions(LoginActions);
  const {
    username,
    password,
    userNameEmpty,
    passwordEmpty,
    isLoading
  } = getLoginState.useState();

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    usernameChange(e.target.value);
    isUserNameEmpty(false);
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordChange(e.target.value);
    isPasswordEmpty(false);
  };

  const onSignupClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    history.push("/registration");
  };

  const onLoginClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (username == "") {
      isUserNameEmpty(true);
    } else if (password == "") {
      isPasswordEmpty(true);
    } else {
      signIn(username, password);
      e.preventDefault();
    }
  };

  return (
    <Login
      onUsernameChange={onUsernameChange}
      onPasswordChange={onPasswordChange}
      onClick={onLoginClick}
      title={"Login Form"}
      userNameEmpty={userNameEmpty}
      passwordEmpty={passwordEmpty}
      onSignupClick={onSignupClick}
      isLoading={isLoading}
    />
  );
};

export default LoginPage;
