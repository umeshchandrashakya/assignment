import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Field from "../molecules/Field";
import Form from "../organisms/Form";

  
interface Props {
    title: string;
}

const LoginForm = (props: Props) => (
    <Form title={props.title} />

);
export default LoginForm;