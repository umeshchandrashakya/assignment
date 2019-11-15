import React from "react";
import Registration from "../template/Registration";
import { useActions } from "typeless";
import { RegActions, getRegState } from "../typeless/interface/reg";
import history from "../../history";

const RegistrationPage = () => {
  const {
    nameChange,
    emailChange,
    passwordChange,
    phoneChange,
    register,
    validate
  } = useActions(RegActions);
  const {
    name,
    email,
    password,
    phone,
    isLoading,
    validName,
    validEmail,
    validPhone,
    validPassword,
    isSuccess
  } = getRegState.useState();

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameChange(e.target.value);
  };
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    emailChange(e.target.value);
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordChange(e.target.value);
  };
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    phoneChange(e.target.value);
  };
  const onRegisterClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (validName && validEmail && validPhone && validPassword)
      register(name, email, phone, password);
    else validate();
    e.preventDefault();
  };
  const onLoginClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    history.replace('/login');
  }



  return (
    <Registration
      isSuccess={isSuccess}
      title="REGISTRATION"
      isLoading={isLoading}
      validName={validName}
      validEmail={validEmail}
      validPhone={validPhone}
      validPassword={validPassword}
      onNameChange={onNameChange}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onContactNoChange={onPhoneChange}
      onRegisterClick={onRegisterClick}
      onLoginClick={onLoginClick}
    />
  );
};

export default RegistrationPage;
