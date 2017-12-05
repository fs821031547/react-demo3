import React, { Component, PropTypes } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  hashHistory
} from "react-router-dom";

import padBox from "../components/padBox";
// import demo from "../pages/demo";
// import ticket from "../pages/ticket";
import plan from "../pages/plan";
import { connect } from "react-redux";

class Roots extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

// const history =
//   process.env.NODE_ENV !== "production" ? browserHistory : hashHistory;

const demo = (location, cb) => {
  require.ensure(
    [],
    require => {
      cb(null, require("../pages/demo").default);
    },
    "demo"
  );
};
const ticket = (location, cb) => {
  require.ensure(
    [],
    require => {
      cb(null, require("../pages/ticket").default);
    },
    "ticket"
  );
};

const RouteConfig = () => (
  <Router>
    <Route path="/plan" component={plan} />
  </Router>
);

export default connect()(RouteConfig);
