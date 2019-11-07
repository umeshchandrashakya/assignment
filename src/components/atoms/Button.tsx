import React from "react";
import styled from "styled-components";

const Styledbutton = styled.button`
  background: green;
    color: #fff;
    padding: 10px;
    margin-top:10px;
  
    width: 100px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
`;

interface Props{
  buttonText:string;
}
   const Button = (props:Props) => (
    <Styledbutton>{props.buttonText}</Styledbutton>
);
export default Button;
