import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Home from "./pages/Home";
import img from "../img/sample.jpg";
import styled from "styled-components";
const StyledLogin = styled.div`
  background-repeat: no-repeat;
  background-image: url(${img});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center center;
  box-sizing: border-box;
`;

const App: React.FC = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route target exact path="/registration" component={RegistrationPage} />
          </Switch>
        </div>
      </Router>
  );
};

export default App;
