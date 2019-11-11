import React from "react";
import styled from "styled-components";
const StyledHead = styled.h4`
font-weight : bold;
caret-color : getColor('blue');
display : block;
text-align : center;
padding:10px;
margin-top:50px;
margin-bottom:30px;
`;


interface Props {
    value: string;
}

const Head = (props: Props) => (
    
    <StyledHead >{props.value}
    </StyledHead>
);
export default Head; 
