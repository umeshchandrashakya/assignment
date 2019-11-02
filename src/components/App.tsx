import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Login  from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route targe exact path="/registration" component={Registration} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
