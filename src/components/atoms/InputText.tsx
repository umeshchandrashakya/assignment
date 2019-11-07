import React from "react";
import styled from "styled-components";
import { useState } from "react";
const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 150px;
  box-sizing: border-box;
`;

interface Props {
  placeholder: string;
}

const InputText = (props: Props) => {
  const [userName, setUserName] = useState("");

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <StyledInput
      type="text"
      onChange={onHandleChange}
      placeholder={props.placeholder}
      value={userName}
    />
  );
};
export default InputText;
