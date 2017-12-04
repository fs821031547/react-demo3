import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import padBox from '../components/padBox'; 
import demo from '../components/demo'; 

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


const ticket = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/ticket').default)
    },'ticket')
}


const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={ticket} />//首页
            <Route path="index" component={index} />
            <Route path="demo" getComponent={demo} />//帮助中心
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;