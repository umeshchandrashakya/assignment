
import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Head  from "../atoms/Head";
import Field from "../molecules/Field";
import image1 from "../../assests/image1.jpg";
import Button from "../atoms/Button"


const FormContainer = styled.form`

  display: flex;
  text-align:center;
  align-items: center;
  flex-flow: column;
  
  margin:  auto;
  border: 1px ;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-image: url(${image1});
  height:70vh;
  width: 40vw;


  background-size: cover;
  background-position: center center;
  box-sizing: border-box;

  `;
interface Props {
    title: string;
}

const RegistrationForm = (props: Props) => (
    


    <FormContainer >
      
 <Head value={props.title}></Head>
      
        <Field labelValue="UserName" inputPlaceholder="UserName"></Field>
        <Field labelValue="Email" inputPlaceholder="Email"></Field>
        <Field labelValue="Password" inputPlaceholder="Password"></Field>
        <Field labelValue="Contact No" inputPlaceholder=""></Field>
        <Button  buttonText="submit"></Button>
        
      </FormContainer>
      
);
export default RegistrationForm;