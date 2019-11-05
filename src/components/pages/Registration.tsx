import React from "react";
import { useActions } from "typeless";
import { RegActions, getRegState } from "../typeless/interface/reg";

const Registration: React.FC = () => {
  // wrap actions with `dispatch`
  const {
    nameChange,
    emailChange,
    passwordChange,
    phoneChange,
    register
  } = useActions(RegActions);
  // get state from store
  const {
    name,
    email,
    password,
    phone,
    isSuccess,
    isLoading,
    error,
    formSubmitStatus
  } = getRegState.useState();

  const onLoginClicked = () => {
    register(name, email, phone, password);
  };

  const getStatus = () => {
    if (formSubmitStatus) {
      return isLoading
        ? "Loading, please wait..."
        : isSuccess
        ? "Successfully registered"
        : `Error: ${error}`;
    }
    return "";
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          value={name}
          placeholder="Name"
          onChange={e => nameChange(e.target.value)}
        />
        <input
          value={email}
          placeholder="Email"
          onChange={e => emailChange(e.target.value)}
        />
        <input
          value={phone}
          placeholder="Phone"
          onChange={e => phoneChange(e.target.value)}
        />
        <input
          value={password}
          placeholder="Password"
          onChange={e => passwordChange(e.target.value)}
        />
        <button type="button" onClick={onLoginClicked}>
          Register
        </button>
      </form>
      <h3>{getStatus()}</h3>
    </div>
  );
};

export default Registration;
