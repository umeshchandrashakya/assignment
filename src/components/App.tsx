import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import img from "../img/sample.jpg";
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
    <StyledLogin>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route target exact path="/registration" component={Registration} />
          </Switch>
        </div>
      </Router>
    </StyledLogin>
  );
};

export default App;
