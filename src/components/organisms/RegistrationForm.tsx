import React from "react";
import styled from "styled-components";
import Head from "../atoms/Head";
import Field from "../molecules/Field";
import Button from "../atoms/Button";

const FormContainer = styled.div`
  /* border: 1px ; */
  margin: 0 auto;
  text-align: center;
  width: 30%;
  min-width: fit-content;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-color: rgba(225, 225, 225, 0.6);
  padding: 20px;
`;

interface Props {
  title: string;
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onContactNoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRegisterClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onLoginClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const RegistrationForm = (props: Props) => (
  <FormContainer className="form">
    <Head value={props.title}></Head>

    {/* <Field onChange={props.onNameChange} labelValue="UserName" inputPlaceholder="UserName"></Field>
    <Field onChange={props.onEmailChange} labelValue="Email" inputPlaceholder="Email"></Field>
    <Field onChange={props.onPasswordChange} labelValue="Password" inputPlaceholder="Password"></Field>
    <Field onChange={props.onContactNoChange} labelValue="Contact No" inputPlaceholder="Contact No"></Field>
    <Button onClick={props.onRegisterClick} buttonText="REGISTER" /> */}
    <Button
      style="link"
      onClick={props.onLoginClick}
      buttonText="Already have an account? Login HERE."
    />
  </FormContainer>
);
export default RegistrationForm;
