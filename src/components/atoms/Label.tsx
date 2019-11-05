import React from "react";
import styled from "styled-components";
const StyledLabel = styled.label`
font-weight: bold; 
caret-color: getColor('blue'); 
display: block;
text-align: left;
margin-right: 23%;

`;

interface Props {
    value: string;
}


const Label = (props: Props) => (
    <StyledLabel >{props.value}</StyledLabel>
);
export default Label;