import React from "react";
import styled from "styled-components";
import Head from "../atoms/Head";
import Field from "../molecules/Field";
import formbg from "../../assets/formbg.jpg";
import Button from "../atoms/Button"


const FormContainer = styled.div`


display: flex;
text-align:center;
align-items: center;
flex-flow: column;
margin:  auto;
/* border: 1px ; */
width:30%;
min-width:fit-content;
border-radius: 4px;
background-repeat: no-repeat;
/* background-image: url(${formbg}); */
background-color: rgba(255,255,255, 0.6);
background-size: cover;
background-position: center center;
box-sizing: border-box;
background-attachment:fixed;
padding:20px;  `;



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
    <Field onChange={props.onContactNoChange} labelValue="Contact No" inputPlaceholder="Contact No"></Field>
    <Button onClick={props.onClick} buttonText="SUBMIT"></Button>

  </FormContainer>

);
export default RegistrationForm;




