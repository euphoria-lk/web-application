import React, {Component} from 'react'

import {Route, Switch,Redirect} from 'react-router-dom';
import SignUpPage from '../views/user/SignUpView';
import SignInPage from '../views/user/SignInView';
import CounselorSignIn from '../views/counselor/CounselorSignIn';
import CounselorSignUp from '../views/counselor/CounselorSignUp';
import CouneselorsView from '../views/counselor/CounselorsView';
import NewAppointmentView from '../views/user/NewAppointmentView';
import CounselorHomeView from '../views/counselor/CounselorHomeView';
import UserHomeView from '../views/user/UserHomeView';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route exact path="/user/login" component={SignInPage}/>
              <Route exact path="/user/signup" component={SignUpPage}/>
              <Route exact path="/counselor/login" component={CounselorSignIn}/>
              <Route exact path="/counselor/signup" component={CounselorSignUp}/>
              <Route exact path="/user/counselors" component={CouneselorsView}/>
              <Route exact path="/user/appointments/:name" component={NewAppointmentView}/>
              <Route exact path="/counselor/home" component={CounselorHomeView}/>
              <Route exact path="/user/home" component={UserHomeView}/>
               <Redirect to="/user/login"/>
            </Switch>
        )
    }
}
