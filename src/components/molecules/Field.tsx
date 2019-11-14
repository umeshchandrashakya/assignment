import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Head from "../atoms/Head";

const StyledField = styled.div`
margin:10px;
`;

interface Props {
  labelValue: string;
  inputPlaceholder: string;
  valid?:boolean;

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field = (props: Props) => (
  <StyledField className='form-row'>
    <Label value={props.labelValue} />
    <InputText onChange={props.onChange} placeholder={props.inputPlaceholder} valid = {props.valid}/>
  </StyledField>
);

export default Field;
