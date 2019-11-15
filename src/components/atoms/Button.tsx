import React from "react";
import styled from "styled-components";

const Styledbutton = styled.button`
  font-family: "Courier New", Courier, monospace;
  display: block;
  margin: 8px auto;
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
  btnStyle?: string;
  loading?: boolean;
}

const Button = (props: Props) => (
  <Styledbutton
    type={"submit"}
    className={`btn btn-${props.btnStyle || "primary"}`}
    onClick={props.onClick}
    disabled={props.loading}
  >
    <span
      className={"spinner-border spinner-border-sm"}
      role={"status"}
      hidden={!props.loading}
      aria-hidden={"true"}
    ></span>
    {props.buttonText}
  </Styledbutton>
);
export default Button;
