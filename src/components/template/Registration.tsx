import React from "react";
import styled from "styled-components";
import RegistrationForm from "../organisms/RegistrationForm";
import image from "../../assets/bg1.jpg";
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const StyledRegistration = styled.div`
 display: flex;
flex-flow: column;
margin: auto;
/* border: 1px ; */
background-repeat: no-repeat;
background-image: url(${image}) ;
/* height: 100vh;
width: 100vw;
background-size: cover;
background-position: center center ;
background-attachment:fixed; */
/* height: 100vh; */

/* width: 100%; */
background-size: cover;
background-position: center  ;
background-attachment:fixed;
min-height:50em;
height:100%;
min-width:max-content;


`;
interface Props {
    title: string;
    onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onContactNoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const RegForm = (props: Props) => (
    <StyledRegistration>
        <Header />
        <RegistrationForm {...props} />
        <Footer />
    </StyledRegistration>
);
export default RegForm;


