import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Field from "../molecules/Field";
import Form from "../organisms/LoginForm";
import img3 from "../../assets/img3.jpg";

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
min-height:30em;
min-width:max-content;

/* min-width: 25em; */
h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;  
}
`;

interface Props {
  title: string;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LoginForm = (props: Props) => (
  <StyledLogin className="container-fluid">
    <Form {...props} />
  </StyledLogin>
);

export default LoginForm;
