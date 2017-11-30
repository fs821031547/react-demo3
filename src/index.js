// var React = require('react');
// var App = require('./components/App');
import React from 'react'
import ReactDOM from 'react-dom'
import ToApp from './components/toapp'
import  DatePicker  from 'antd/lib/date-picker';

import 'antd/lib/date-picker/style/css'; 

ReactDOM.render(
  <DatePicker />,
  document.body.appendChild(document.createElement('div'))
);