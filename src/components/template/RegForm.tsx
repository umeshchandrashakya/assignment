import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Field from "../molecules/Field";
import Form from "../organisms/Form";
import RegistrationForm from "../organisms/RegistrationForm";
import image from "../../assests/image.jpg";
const StyledRegistration = styled.div`
 
 

 display: flex;
flex-flow: column;
margin: 0 auto;
/* border: 1px ;
background-repeat: no-repeat;
background-image: url(${image});
height: 100vh;
width: 100vw;
background-size: cover;
background-position: center center;
box-sizing: border-box; */

background-image: url(${image});
background-size: cover;
background-position: center center ;
position:absolute;
top:0;
bottom:0;
height:100vh;
z-index:-10;
`;
interface Props {
    title: string;
}

const RegForm = (props: Props) => (
    <StyledRegistration className="container-fluid">
    <RegistrationForm title={props.title} />
    </StyledRegistration>
);
export default RegForm;