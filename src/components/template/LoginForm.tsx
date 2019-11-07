import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Field from "../molecules/Field";
import Form from "../organisms/Form";
import bg from "../../assets/bg.jpg";

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 350px;
  height: 350px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-image: url(${bg});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center center;
  box-sizing: border-box;

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;  
}
`;

interface Props {
    title: string;
}

const LoginForm = (props: Props) => (
    <StyledLogin>
    <Form title={props.title} />
    </StyledLogin>
);

export default LoginForm;