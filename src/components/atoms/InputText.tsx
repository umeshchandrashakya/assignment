import React from "react";
import styled from "styled-components";
import { isUndefined } from "util";

const StyledInput = styled.input`
  /* border: 1px hidden #fff; */
  /* border-style:unset */
  /* border-radius: 4px;
  padding: 7px; */
  font-family: 'Courier New', Courier, monospace;
  /* margin: 5px; */
  width: 100%;
  /* box-sizing: border-box; */
`;


interface Props {
  placeholder: string;
  valid?: boolean;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = (props: Props) => {
  return (
    <div className='input-group'>
      <StyledInput
        id={props.placeholder}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        className={`form-control ${isUndefined(props.valid) ? '' : (props.valid ? 'is-valid' : 'is-invalid')}`} />
      <div className="invalid-feedback">
        {`Invalid ${props.placeholder}`}
      </div>
    </div>
  )
}
export default InputText;
