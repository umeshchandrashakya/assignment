import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";


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
