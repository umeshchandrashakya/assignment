import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import Head from "../atoms/Head";

import formbg from "../../assets/formbg.jpg";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 300px;
  height: 300px;
  margin-left: 0 auto;
  border-radius:15px;
  background-repeat: no-repeat;
  background-image: url(${formbg});
  height: 50vh;
  width: 40vw;
  background-position: center center;
  box-sizing: border-box;
  position:absolute;
  margin:auto;
  left:0;
  right:0;
  bottom:0;
  top:0;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
     font-size: 14px;
   }
   `;

interface Props {
    title: string;
}

const Form = (props: Props) => (
    <FormContainer>
        <Head value={props.title} />
        <Field inputPlaceholder='username' labelValue='Username' />
        <Field inputPlaceholder='password' labelValue='Password' />
        <Button buttonText="Login"></Button> 
    </FormContainer>
  );

export default Form;