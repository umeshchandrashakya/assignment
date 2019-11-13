import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Head from "../atoms/Head";


interface Props {
  labelValue: string;
  inputPlaceholder: string;
 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field = (props: Props) => (
  <div>
   <Label value={props.labelValue} />
    <InputText onChange={props.onChange} placeholder={props.inputPlaceholder} />
  </div>
);

export default Field;
