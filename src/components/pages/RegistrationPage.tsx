import React from "react";
import Registration from "../template/Registration";
import { useActions } from "typeless";
import { RegActions, getRegState } from '../typeless/interface/reg';



const RegistrationPage = () => {
  const { nameChange, emailChange, passwordChange, phoneChange, register } = useActions(RegActions);
  const { name, email, password, phone } = getRegState.useState();

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameChange(e.target.value)
  }
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    emailChange(e.target.value)
  }
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordChange(e.target.value)
  }
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    phoneChange(e.target.value)
  }
  const onRegisterClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    register(name, email, phone, password);
    e.preventDefault();
  }
  return (
    
    <Registration title="REGISTRATION"
      onNameChange={onNameChange}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onContactNoChange={onPhoneChange}
      onClick={onRegisterClick} />
  );
};

export default RegistrationPage;
