import * as React from "react";

import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link id='login' to="/login">Login </Link>
          <br></br>
          <Link id='reg' to="/registration">Registration</Link>
          <br></br>
          <br></br>
        </nav>
      </div>
    );
  }
}

export default Home;
