import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
const StyledLabel = styled.label`
  font-weight: bold;
  caret-color: getColor("blue");
  display: block;
  text-align: left;
  margin-right: 23%;
`;

interface Props {
  labelValue: string;
  inputPlaceholder: string;
}

const Field = (props: Props) => (
  <div>
    <Label value={props.labelValue} />
    <InputText placeholder={props.inputPlaceholder} />
  </div>
);
export default Field;
