import React from "react";
import styled from "styled-components";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import Field from "../molecules/Field";

interface Props {
    title: string;
}

const Form = (props: Props) => (
    <div>
        <Label value={props.title} />
        <Field inputPlaceholder='username' labelValue='Username' />
        <Field inputPlaceholder='password' labelValue='Password' />
    </div>

);
export default Form;