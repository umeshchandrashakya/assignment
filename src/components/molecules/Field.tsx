import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Head from "../atoms/Head";
import Error from "../atoms/Error";

const StyledField = styled.div`
  margin: 10px;
`;

interface Props {
  labelValue: string;
  inputPlaceholder: string;
  isFieldEmpty: boolean;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field = (props: Props) => (
  <StyledField>
    <Label value={props.labelValue} />
    <InputText
      onChange={props.onChange}
      placeholder={props.inputPlaceholder}
      type={props.type}
    />
    <Error
      value={"Field should not be empty"}
      isEmpty={props.isFieldEmpty}
    ></Error>
  </StyledField>
);

export default Field;
