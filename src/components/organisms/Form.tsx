import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
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
  height: 50vh;
  width: 50vw;
  background-position: center center;
  box-sizing: border-box;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

interface Props {
  title: string;
}

const Form = (props: Props) => (
  <FormContainer className="form-container">
    <Head value={props.title} />
    <Field inputPlaceholder="username" labelValue="Username" />
    <Field inputPlaceholder="password" labelValue="Password" />
    <Button buttonText="Login"></Button>
  </FormContainer>
);

export default Form;
