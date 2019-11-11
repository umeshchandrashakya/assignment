import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
font-weight: bold; 
caret-color: getColor('blue'); 
display: block;
text-align: left;
margin-right: 23%;
margin-top : 5px;
    margin-bottom : 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
`;

interface Props {
  value: string;
}

const Label = (props: Props) => (
    <StyledLabel >{props.value}
    <br></br></StyledLabel>
);

export default Label;
