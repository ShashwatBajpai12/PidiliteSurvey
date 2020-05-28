import React, { Component } from "react";
import Pidilite from "./Pidilite-logo.png";
import "./loginComponent.css";
class LoginComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={Pidilite} className="imgPidi"></img>
        </div>
        <div className="parent-div">
          <label htmlFor="formGroupExampleInput">Enter Mobile Number</label>
          <input type="tel" className="form-control" />
          <div className="button-div">
            <button
              className="btn btn-primary"
              onClick={() => this.props.history.push("otp")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginComponent;
