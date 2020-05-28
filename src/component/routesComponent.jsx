import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";
import LoginComponent from "./loginComponent";
import OtpComponent from "./otpcomponent";
import DashboardComponent from "./dashboardComponent";
import history from "./../history";

export default class RoutesComponent extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LoginComponent} />
          <Route path="/otp" component={OtpComponent} />
          <Route path="/dashboard" component={DashboardComponent} />
        </Switch>
      </Router>
    );
  }
}
