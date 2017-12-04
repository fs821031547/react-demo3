// var React = require('react');
// var App = require('./components/App');
import React from "react";
import ReactDOM from "react-dom";
import ToApp from "./components/toapp";
import DatePicker from "antd/lib/date-picker";
import { Provider } from "react-redux";
import { Router } from "react-router";

import route from "./route/route";
import "weui";
import "react-weui/build/packages/react-weui.css";

import "antd/lib/date-picker/style/css";

ReactDOM.render(
  <Provider>{route}</Provider>,
  document.body.appendChild(document.createElement("div"))
);
