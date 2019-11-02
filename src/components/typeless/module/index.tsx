import React from 'react';
import { loginHandle } from "../interface/login";
import { regHandle } from "../interface/reg";
import App from "../../App";

// Entry point component for this module
const BaseModule: React.FC = () => {
    // load epic and reducer
    loginHandle();
    regHandle();

    return <App />;
}

export default BaseModule;