import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Field from "../molecules/Field";
import Form from "../organisms/Form";
import RegistrationForm from "../organisms/RegistrationForm";

  
interface Props {
    title: string;
}

const RegForm = (props: Props) => (
    <RegistrationForm title={props.title} />

);
export default RegForm;