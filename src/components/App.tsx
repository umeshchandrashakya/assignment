<<<<<<< HEAD
import * as React from "react";

import "../App.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./pages/Login";
import { Registration } from "./pages/Registration";
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Login  from "./pages/Login";
import Registration from "./pages/Registration";
>>>>>>> 8bf5e14b48a57b673863ca505d557475edf71322
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
