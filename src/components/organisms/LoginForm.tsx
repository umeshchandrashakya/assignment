import React from "react";
import styled from "styled-components";
import Head from "../atoms/Head";
import Field from "../molecules/Field";
import Button from "../atoms/Button";

import formbg from "../../assets/formbg.jpg";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  /* width: 300px;
  height: 300px; */
  margin-left: 0 auto;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-image: url(${formbg});
  /* height: 60vh; */
  width: 30vw;
  background-position: center center;
  box-sizing: border-box;
  /* position: absolute; */
  background-size:100% 100%;
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
}

const Form = (props: Props) => (
  <FormContainer className="form-container">
    <Head value={props.title} />
    <Field onChange={props.onUsernameChange} inputPlaceholder="username" labelValue="Username" />
    <Field onChange={props.onPasswordChange} inputPlaceholder="password" labelValue="Password" />
    <Button onClick={props.onClick} buttonText="Login"></Button>
  </FormContainer>
);

export default Form;
