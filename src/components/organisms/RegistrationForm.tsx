import React from "react";
import styled from "styled-components";
import Head from "../atoms/Head";
import Field from "../molecules/Field";
import Button from "../atoms/Button";

const FormContainer = styled.div`
  /* border: 1px ; */
  margin: 0 auto;
  width: 35%;
  min-width: 250px;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-color: rgba(225, 225, 225, 0.6);
  padding: 20px;
`;

interface Props {
  title: string;
  isLoading?: boolean;
  validName?: boolean;
  validEmail?: boolean;
  validPhone?: boolean;
  validPassword?: boolean;
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
  <FormContainer className={"form novalidate"}>
    <Head value={props.title}></Head>

    <Field
      valid={props.validName}
      onChange={props.onNameChange}
      labelValue={"UserName"}
      inputPlaceholder={"UserName"}
    ></Field>
    <Field
      valid={props.validEmail}
      onChange={props.onEmailChange}
      labelValue={"Email"}
      inputPlaceholder={"Email"}
    ></Field>
    <Field
      valid={props.validPassword}
      onChange={props.onPasswordChange}
      labelValue={"Password"}
      inputPlaceholder={"Password"}
      type={"password"}
    ></Field>
    <Field
      valid={props.validPhone}
      onChange={props.onContactNoChange}
      labelValue={"Contact No"}
      inputPlaceholder={"Contact No"}
    ></Field>
    <Button
      loading={props.isLoading}
      onClick={props.onRegisterClick}
      buttonText={"REGISTER"}
    />
    <Button
      btnStyle={"link"}
      onClick={props.onLoginClick}
      buttonText={"Already have an account? Login HERE."}
    />
  </FormContainer>
);
export default RegistrationForm;
