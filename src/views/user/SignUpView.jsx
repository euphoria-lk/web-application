import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import SignUp from '../../components/user/SignUp';
import NavBarLandingPage from '../../components/common/NavBarLandingPage';
import {Row,Col} from 'react-bootstrap';


class SignUpView extends Component {
    render() {
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
                        <SignUp/>

                </Col>
            </Row>
            </Grid>
            
        </React.Fragment>
        )
    }
    
}



export default SignUpView;