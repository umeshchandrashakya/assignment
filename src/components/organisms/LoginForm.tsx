import React from "react";
import styled from "styled-components";
import Head from "../atoms/Head";
import Field from "../molecules/Field";
import Button from "../atoms/Button";

const FormContainer = styled.div`
/* border: 1px ; */
margin: 0 auto; 
width:35%;
min-width:250px;
border-radius: 4px;
background-repeat: no-repeat;
background-color: rgba(225,225,225, 0.6);
padding:20px;  `;

interface Props {
  title: string;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  userNameEmpty?: boolean;
  passwordEmpty?: boolean;
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
      valid={props.userNameEmpty}
      type="text"
    />

    <Field
      onChange={props.onPasswordChange}
      inputPlaceholder="password"
      labelValue="Password"
      valid={props.passwordEmpty}
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
