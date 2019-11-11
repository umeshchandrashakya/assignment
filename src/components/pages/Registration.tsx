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




const Registration = () => {

 return (
   
    <RegForm title="REGISTRATION"></RegForm>
    
    
  
  );
};

 export default Registration;
