// var React = require('react');
// var App = require('./components/App');
import React from "react"
import ReactDOM from "react-dom"
// import ToApp from "./components/toapp";
// import DatePicker from "antd/lib/date-picker";
import { Provider } from "react-redux"
import dataReducer from "./reduce/store.js"
import { Router } from "react-router"
import { createStore, applyMiddleware } from "redux"

import App from "./pages/app"
import "./style/common.less"
// import "weui";
// import "react-weui/build/packages/react-weui.css";

// import "antd/lib/date-picker/style/css";

const store = createStore(dataReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement("div"))
)
