import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 7px;
  margin: 5px;
  width: 90%;
  box-sizing: border-box;
`;

interface Props {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = (props: Props) => {
  return (<div>
    <StyledInput onChange={props.onChange} type="text" placeholder={props.placeholder} /><br></br>
  </div>

  )
}
export default InputText;