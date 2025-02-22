import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
font-weight: bold; 
caret-color: getColor('blue'); 
display: block;
text-align: left;
font-family: 'Courier New', Courier, monospace;
font-size: 14px;
`;

interface Props {
  value: string;
  onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}

const Label = (props: Props) => (
  <StyledLabel onClick={props.onClick}>{props.value}</StyledLabel>
);

export default Label;
