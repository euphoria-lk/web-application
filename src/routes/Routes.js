import React, {Component} from 'react'

import {Route, Switch} from 'react-router-dom';
import SignUpPage from '../views/user/SignUpView';
import SignInPage from '../views/user/SignInView';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route exact path="/user/login" component={SignInPage}/>
              <Route exact path="/user/signup" component={SignUpPage}/>

            </Switch>
        )
    }
}
