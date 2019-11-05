
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Login  from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";

const App:React.FC = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route target exact path="/registration" component={Registration} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
