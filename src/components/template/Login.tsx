import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Field from "../molecules/Field";
import Form from "../organisms/LoginForm";
import img3 from "../../assets/img3.jpg";
import { StyledSpinner } from "../atoms/StyledSpinner";

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  /* width: 350px;
  height: 350px; */
  margin: 0 auto;
  background-repeat: no-repeat;
  background-image: url(${img3});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center center;
  box-sizing: border-box;
  min-height: 30em;
  min-width: max-content;
  position: relative;
  /* min-width: 25em; */
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  .spinner-container {
    width: 100vw;
    height: 100vh;
    z-index: 1;
    position: absolute;
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;

interface Props {
  title: string;
  isLoading: boolean;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  userNameEmpty: boolean;
  passwordEmpty: boolean;
  onSignupClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const LoginForm = (props: Props) => (
  <StyledLogin className="container-fluid">
    <div
      className="spinner-container"
      style={{ visibility: props.isLoading ? "visible" : "hidden" }}
    >
      <StyledSpinner></StyledSpinner>
    </div>
    <Form {...props} />
  </StyledLogin>
);

export default LoginForm;
