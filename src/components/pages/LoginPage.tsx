import React from "react";
import Login from "../template/Login";
import { useActions } from "typeless";
import { LoginActions, getLoginState } from "../typeless/interface/login";
import history from "../../history";
const LoginPage = () => {
  const {
    usernameChange,
    passwordChange,
    signIn,
    isPasswordValid,
    isUserNameValid
  } = useActions(LoginActions);
  const {
    username,
    password,
    validUserName,
    validPassword,
    isLoading,
    isSignedIn
  } = getLoginState.useState();

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    usernameChange(e.target.value);
    isUserNameValid(e.target.value !== "");
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordChange(e.target.value);
    isPasswordValid(e.target.value !== "");
  };

  const onSignupClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    history.replace("/registration");
  };

  const onLoginClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (username === "") {
      isUserNameValid(false);
    } else if (password === "") {
      isPasswordValid(false);
    } else {
      signIn(username, password);
      e.preventDefault();
    }
  };

  return (
    <Login
    isSignedIn={isSignedIn}
      onUsernameChange={onUsernameChange}
      onPasswordChange={onPasswordChange}
      onClick={onLoginClick}
      title={"LOGIN"}
      userNameEmpty={validUserName}
      passwordEmpty={validPassword}
      onSignupClick={onSignupClick}
      isLoading={isLoading}
    />
  );
};

export default LoginPage;
