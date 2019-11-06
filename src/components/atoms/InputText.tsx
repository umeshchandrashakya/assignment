import React from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
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

const handleInputChange = event => {
  console.log(event);
};

const InputText = (props: Props) => {
  return (
    <div>
      <StyledInput
        type="text"
        placeholder={props.placeholder}
        onChange={handleInputChange}
      />
      <br></br>
    </div>
  );
};
export default InputText;
