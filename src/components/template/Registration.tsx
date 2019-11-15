import React from "react";
import styled from "styled-components";
import RegistrationForm from "../organisms/RegistrationForm";
import image from "../../assets/bg1.jpg";
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const StyledRegistration = styled.div`
background-repeat: no-repeat;
background-image: url(${image});
background-size: cover;
background-attachment:fixed;
height:100vh;
overflow-y:scroll;
`;
interface Props {
    title: string;
    isSuccess?: boolean;
    isLoading?:boolean;
    validName?:boolean;
    validEmail?:boolean;
    validPhone?:boolean;
    validPassword?:boolean;
    onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onContactNoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onRegisterClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onLoginClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const RegForm = (props: Props) => (
    <StyledRegistration className='row align-items-center justify-content-center'>
        <div className='col-sm'>
            <Header />
            <RegistrationForm {...props} />
            <Footer />
        </div>
    </StyledRegistration>
);
export default RegForm;


