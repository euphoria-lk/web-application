import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Container,Tab,Nav} from 'react-bootstrap';
import QuickRegistration from './QuickRegistration';
import FormalRegistration from './FormalRegistration';
import axios from 'axios';
import {TitleComponent} from '../common/Title'


class SignUpFormUser extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    userSignUpRequest=(state)=>{
        return axios.post('',JSON.stringify(state),{headers: {
        'Content-Type': 'application/json',
        }})
        .then((response)=>console.log(response))
    }
    
    render() {
        return (
            
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" style={{height:'600px',width:'1000px'}}>
                <TitleComponent title="Register | User" />
                    <Grid>
                        <Grid container  direction="row" justify="center" alignItems="center" >
                            <div style={{marginBottom:'50px'}}>
                                <Typography  variant="h4" gutterBottom>
                                        Register | User
                                </Typography>

                            </div>
                        </Grid>
                        <div style={{marginTop:'20px',marginBottom:'20px'}}>
                                <Grid container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                >

                                        <Nav variant="pills" className="flex-column">
                                            <Grid container>
                                            <Grid item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="first">Formal Registration</Nav.Link>
                                                    </Nav.Item>
                                            </Grid>
                                            <Grid item>
                                                    <Nav.Item>
                                                    <Nav.Link eventKey="second">Quick Registration</Nav.Link>
                                                </Nav.Item>
                                            </Grid>
                                            </Grid>
                                        </Nav>
                            </Grid>
                        </div>


                    <Grid container 
                        direction="row"
                        justify="center"
                        alignItems="center">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Container>
                                        <div style={{shapeOutside:'border-box'}}>
                                            <FormalRegistration userSignUpRequest={this.userSignUpRequest}></FormalRegistration>              
                                        </div>
                                    </Container>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Container>
                                        <div>
                                            <QuickRegistration userSignUpRequest={this.userSignUpRequest}></QuickRegistration>

                                        </div>
                                    </Container>
                                </Tab.Pane>
                            </Tab.Content>
                    </Grid>
                </Grid>
            </Tab.Container>
            
        )
    }
}

export default SignUpFormUser;