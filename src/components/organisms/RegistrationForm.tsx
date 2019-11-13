
import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Head from "../atoms/Head";
import Field from "../molecules/Field";
import image1 from "../../assests/image1.jpg";
import Button from "../atoms/Button"
import Label from "../atoms/Label";


const FormContainer = styled.div`


display: flex;
text-align:center;
align-items: center;
flex-flow: column;
margin:  auto;
border: 1px ;
width:50vw;
border-radius: 20px;
background-repeat: no-repeat;
background-image: url(${image1});
background-size: 100% 100%;
background-position: center center;
box-sizing: border-box;

  `;



interface Props {
  title: string;
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onContactNoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const RegistrationForm = (props: Props) => (

  
  <FormContainer  >

 <Head value={props.title}></Head>

    <Field onChange={props.onNameChange} labelValue="UserName" inputPlaceholder="UserName"></Field>
    <Field onChange={props.onEmailChange} labelValue="Email" inputPlaceholder="Email"></Field>
    <Field onChange={props.onPasswordChange} labelValue="Password" inputPlaceholder="Password"></Field>
    <Field onChange={props.onContactNoChange} labelValue="Contact No" inputPlaceholder=""></Field>
    <Button onClick={props.onClick} buttonText="submit"></Button>
    
  </FormContainer>
  
);
export default RegistrationForm;




