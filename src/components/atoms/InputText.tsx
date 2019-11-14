import React from "react";
import styled from "styled-components";

interface Props {
  type?: string;
}

const StyledInput = styled.input<Props>`
  border: 1px hidden #fff;
  /* border-style:unset */
  border-radius: 4px;
  padding: 7px;
  font-family: "Courier New", Courier, monospace;
  /* margin: 5px; */
  width: 100%;
  /* box-sizing: border-box; */
`;

interface Props {
  placeholder: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = (props: Props) => {
  return (
    <StyledInput
      onChange={props.onChange}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};
export default InputText;
