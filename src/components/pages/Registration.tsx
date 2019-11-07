import React from "react";
import Field from "../molecules/Field";
import Label from "../atoms/Label";
import styled from "styled-components";
import Button from "../atoms/Button";
import image from "../../assests/image.jpg";
import image1 from "../../assests/image1.jpg";
import { useActions } from "typeless";
import { RegActions, getRegState } from "../typeless/interface/reg";
import { url } from "inspector";
import RegForm from "../template/RegForm";

const StyledRegistration = styled.div`
  display: flex;
  
  flex-flow: column;
  width: 300px;
  height: 400px;
  margin: 0 auto;
  border: 1px ;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-image: url(${image});
  height: 100vh;
  width: 100vw;

  background-size: cover;
  background-position: center center;
  box-sizing: border-box;
  
 
`;



const Registration: React.FC = () => {

 return (
   
  <StyledRegistration>

    <RegForm title="REGISTRATION"></RegForm>
    </StyledRegistration>
    
  );
};

 export default Registration;
