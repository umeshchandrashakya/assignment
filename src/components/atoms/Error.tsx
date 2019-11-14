import styled from "styled-components";
import React from "react";

const StyledLabel = styled.label`
  font-weight: normal;
  color: red;
  display: block;
  text-align: left;
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
`;

interface Props {
  value: string;
  isEmpty?: boolean;
  onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}

const Error = (props: Props) => {
  if (props.isEmpty) {
    return <StyledLabel>{props.value}</StyledLabel>;
  } else {
    return <div></div>;
  }
};

export default Error;
