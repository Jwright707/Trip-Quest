import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-Header">Trip Quest</h1>
        <hr className="LineBreak" />
        <p id="CopyRight"> &copy; 2018 Website.com All Rights Reserved </p>
      </div>
    );
  }
}

export default Header;
