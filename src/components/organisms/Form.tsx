import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Field from "../molecules/Field";

const FormContainer = styled.div`
  background-color: #c1c1c1;
  box-sizing: border-box;
  width: 300px;

  height: 500px;
  position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: 2px dotted #b38b0d;
`;

interface Props {
  title: string;
}

const Form = (props: Props) => (
  <FormContainer>
    <Label value={props.title} />
    <Field inputPlaceholder="username" labelValue="Username" />
    <Field inputPlaceholder="password" labelValue="Password" />
  </FormContainer>
);
export default Form;
