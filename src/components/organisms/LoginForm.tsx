import React from "react";
import styled from "styled-components";
import Head from "../atoms/Head";
import Field from "../molecules/Field";
import Button from "../atoms/Button";

import formbg from "../../assets/formbg.jpg";
import { type } from "os";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  /* width: 300px;
  height: 300px; */
  margin-left: 0 auto;
  border-radius: 15px;
  background-repeat: no-repeat;
  /* background-image: url(${formbg}); */
  background-color: rgba(255,255,255, 0.6);
  /* height: 60vh; */
  /* width: 30vw; */
  width:30%;
  min-width:fit-content;
  
  background-position: center center;
  
  box-sizing: border-box;
  /* position: absolute; */
  background-size:100% 100%;
  background-attachment:fixed;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

interface Props {
  title: string;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  userNameEmpty: boolean;
  passwordEmpty: boolean;
  onSignupClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const Form = (props: Props) => (
  <FormContainer className="form-container">
    <Head value={props.title} />
    <Field
      onChange={props.onUsernameChange}
      inputPlaceholder="username"
      labelValue="Username"
      isFieldEmpty={props.userNameEmpty}
      type="text"
    />

    <Field
      onChange={props.onPasswordChange}
      inputPlaceholder="password"
      labelValue="Password"
      isFieldEmpty={props.passwordEmpty}
      type="password"
    />
    <Button onClick={props.onClick} buttonText="Login"></Button>

    <Button
      style="link"
      onClick={props.onSignupClick}
      buttonText="Don't have an account? SIGNUP HERE!"
    />
  </FormContainer>
);

export default Form;
