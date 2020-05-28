import React, { Component } from "react";
import "./otpcomponent.css";
import Pidilite from "./Pidilite-logo.png";
class OtpComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={Pidilite} className="imgPidi"></img>
        </div>
        <div className="parent-div">
          <label htmlFor="formGroupExampleInput">Enter OTP</label>
          <input type="tel" className="form-control" />
          <div className="button-div">
            <button
              className="btn btn-primary mr-5"
              onClick={() => this.props.history.push("dashboard")}
            >
              Submit
            </button>
            <button
              className="btn btn-primary mr-5"
              onClick={() => this.props.history.push("dashboard")}
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default OtpComponent;
