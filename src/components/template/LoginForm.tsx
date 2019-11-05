import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Field from "../molecules/Field";
import Form from "../organisms/Form";

const StyledLogin = styled.div`
display: flex;
align-items: center;
flex-flow: column;
width: 350px;
height: 350px;
margin: 0 auto;
border: 2px solid #000;
border-radius: 20px;
background: #eee;


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