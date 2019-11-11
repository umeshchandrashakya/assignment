import React from "react";
import Field from "../molecules/Field";
import Label from "../atoms/Label";
import styled from "styled-components";
import Button from "../atoms/Button";
import image from "../../assests/image.jpg";
import image1 from "../../assests/image1.jpg";
import { url } from "inspector";
import Registration from "../template/Registration";
import { useActions } from "typeless";
import { RegActions, getRegState } from '../typeless/interface/reg';

const StyledRegistration = styled.div`
 
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  border: 1px ;
  background-repeat: no-repeat;
  background-image: url(${image});
  height: 140vh;
  width: 100vw;
  background-size: cover;
  background-position: center center;
  box-sizing: border-box;
`;

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
