import React from "react";
import styled from "styled-components";
const StyledLabel = styled.label`


margin-top : 20px;
    margin-bottom : 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
`;

interface Props {
    value: string;
}


const Label = (props: Props) => (
    <StyledLabel >{props.value}</StyledLabel>
);
export default Label;