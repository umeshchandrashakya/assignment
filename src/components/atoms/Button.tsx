import React from "react";
import styled from "styled-components";


const Styledbutton = styled.button`
font-family: 'Courier New', Courier, monospace;
display:block;
margin:8px auto;
  /* background: green;
    color: #fff;
    padding: 10px;
    margin-top:10px;
    width: 100px;
    border: none;
    border-radius: 4px;
    box-sizing: border-box; */
`;

interface Props {
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: string;
}

const Button = (props: Props) => (
  <Styledbutton className={`btn btn-${props.style || 'primary'}`} onClick={props.onClick}>{props.buttonText}</Styledbutton>
);
export default Button;
