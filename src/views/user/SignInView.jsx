import React, { Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import NavBarLandingPage from '../../components/common/NavBarLandingPage';
import SignIn from '../../components/user/SignIn';
import Grid from '@material-ui/core/Grid';
import "./UserSignIn.scss";


export default class SignInView extends Component {
  
    
   
   
    render() {
         const history=this.props;
        return (
        <React.Fragment>
        <Grid   >
            <Row >
                <Col xs={12}>
                    {/* <NavBarLandingPage></NavBarLandingPage> */}
                </Col>
            </Row>
            <Row  id="rootGrid">
                <Col xs={12}>
                        <SignIn history={history}></SignIn>

                </Col>
            </Row>
            </Grid>
            
        </React.Fragment>
        )
    }
}
