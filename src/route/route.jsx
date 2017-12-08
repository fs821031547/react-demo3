import React, { Component, PropTypes } from "react"
import {
  HashRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom"

import test from "../pages/test/test"
import test1 from "../pages/test/test1"
import test2 from "../pages/test/test2"
import test3 from "../pages/test/test3"
import { connect } from "react-redux"

// const history =
//   process.env.NODE_ENV !== "production" ? browserHistory : hashHistory;

const RouteConfig = () => (
  <Router>
    <div>
      <Link to="/">test</Link>
      <Link to="/test1">test1</Link>
      <Link to="/test2">test2</Link>
      <Link to="/test3">test3</Link>
      <Route exact path="/" component={test} />
      <Route path="/test1" component={test1} />
      <Route path="/test2" component={test2} />
      <Route path="/test3" component={test3} />
    </div>
  </Router>
)


export default connect()(RouteConfig)
