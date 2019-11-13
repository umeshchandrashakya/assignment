import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px hidden #fff;
  /* border-style:unset */
  border-radius: 4px;
  padding: 7px;
  font-family: 'Courier New', Courier, monospace;
  /* margin: 5px; */
  width: 100%;
  /* box-sizing: border-box; */
`;

interface Props {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = (props: Props) => {
  return (
    <StyledInput onChange={props.onChange} type="text" placeholder={props.placeholder} />
  )
}
export default InputText;