import React from "react";
import styled from "styled-components";

const StyledHead = styled.h4`
font-weight : bold;
margin-left:20px;
caret-color : getColor('blue');
display : block;
text-align : center;
padding:10px;
width:100%;
`;


interface Props {
    value: string;
}

const Head = (props: Props) => (

    <StyledHead >{props.value}
    </StyledHead>
);
export default Head; 
