import React, { Component } from "react";
import "./dashboardComponent.css";
class DashboardComponent extends Component {
  render() {
    return (
      <div className="parent-div">
        <label>Welcome to Dashboard</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          />
          <label className="form-check-label" for="exampleRadios1">
            English
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label className="form-check-label" for="exampleRadios2">
            Spanish
          </label>
        </div>
        <div className="form-check disabled">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="option3"
          />
          <label className="form-check-label" for="exampleRadios3">
            French
          </label>
        </div>
      </div>
    );
  }
}
export default DashboardComponent;
