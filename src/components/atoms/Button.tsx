import React from "react";
import styled from "styled-components";

const Styledbutton = styled.button`
  background: green;
  border-radius: 10px;
  padding: 10px;
  margin-top:10px;
  width: 100px;
  border: none;
  box-sizing:border-box;
`;

interface Props{
    buttonText:string;
   }
     const Button = (props:Props) => (
      <Styledbutton>{props.buttonText}</Styledbutton>
  ); 
  
export default Button;
