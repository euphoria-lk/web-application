import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Container,Tab,Nav} from 'react-bootstrap';
import axios from 'axios';
import {TitleComponent} from '../../components/common/Title'
import {ValidateCounselorSignUp} from '../../validations/CounselorSignUpValidation';
import { FormControl,FormGroup,Button,Box,Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {Form} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/eu-logo.png';


class CounselorSignUp extends Component {
    constructor(props){
        super(props);
         this.state={
           
            email:'',
            password:'',
            passwordConfirmation:'',
            errors:{},
            isLoading:false
        }
    }
 
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    isValid=()=>{
        const{errors,isValid}=ValidateCounselorSignUp(this.state);
        console.log(isValid);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        console.log("shit");
        
        if(this.isValid()){
            console.log("ho");
            this.setState({errors:{}});

            this.props.userSignUpRequest(this.state).then( result => {
                window.location.replace("/user/signupsuccess");
             }, function(error) {
                alert('Error occured');
                
             });
        }
    }
    
    render() {
           
        const {errors} =this.state;
         const useStyles = makeStyles(theme => ({
            container: {
            display: 'flex',
            flexWrap: 'wrap',
            },
            textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            },
            dense: {
            marginTop: theme.spacing(2),
            },
            menu: {
            width: 200,
            },
        }));
        return (
                <Grid >
                      <TitleComponent title="Register | Counselor" />
                      <div style={{marginLeft:'40%',marginBottom:'50px',marginTop:'50px'}}>
                                
                                <Avatar alt="logo" src={logo} style={{margin: 10,width: 60, height: 60,marginLeft:'90px'}} /> <h2>Sign Up | Counselor</h2>

                            </div>
                        <Grid container  direction="row" justify="center" alignItems="center" >
                          

                            <Form onSubmit={this.onSubmit}>
                             <Form.Label>Name</Form.Label>
                            <Form.Group controlId="fornameq">
                            <TextField
                                id="nameq"
                                label="Enter name"
                                className={useStyles.textField}
                                type="text"
                                
                                name="name"
                                autoComplete="name"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.name}

                            />
                            <br/>
                            
                        {errors.name && <span style={{color:'red'}} className="help-block">{errors.name}</span>}
                        </Form.Group>
                    
                    <Form.Label>Email</Form.Label>

                        <Form.Group controlId="formemailq">
                            <TextField
                                id="emailq"
                                label="Enter email"
                                className={useStyles.textField}
                                type="email"
                                
                                name="email"
                                autoComplete="email"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.email}

                            />
                            <br/>
                            
                        {errors.email && <span style={{color:'red'}} className="help-block">{errors.email}</span>}
                        </Form.Group>
                         <Form.Label>SLMC Number</Form.Label>
                            <Form.Group controlId="forslmcq">
                            <TextField
                                id="slmcNumber"
                                label="Enter SLMC Number"
                                className={useStyles.textField}
                                type="text"
                                
                                name="slmcNumber"
                                autoComplete="slmcNumber"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.slmc}

                            />
                            <br/>
                            
                        {errors.slmc && <span style={{color:'red'}} className="help-block">{errors.slmc}</span>}
                        </Form.Group>
                        <Form.Label>Speciality</Form.Label>
                            <Form.Group controlId="forspecialityq">
                            <TextField
                                id="speciality"
                                label="EnterSpeciality"
                                className={useStyles.textField}
                                type="text"
                                
                                name="speciality"
                                autoComplete="speciality"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.speciality}

                            />
                            <br/>
                            
                        {errors.speciality && <span style={{color:'red'}} className="help-block">{errors.speciality}</span>}
                        </Form.Group>
                    
                        <Form.Group controlId="formpasswordq">
                             <Form.Label>Password</Form.Label>
                            <br/>
                            <TextField

                                id="passwordq"
                                label="Enter password"
                                className={useStyles.textField}
                                type="password"
                                name="password"
                                autoComplete="email"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.password}
                            />
                            <br/>
                            
                            {errors.password && <span style={{color:'red'}} className="help-block">{errors.password}<br></br></span> }
                        </Form.Group>

                        <Form.Group controlId="formpasswordconfirmationq">
                            <Form.Label>Password Confirmation</Form.Label>
                            <br/>

                            <TextField

                                id="passwordConfirmationq"
                                label="Re-type Password"
                                className={useStyles.textField}
                                type="password"
                                name="passwordConfirmation"
                                autoComplete="password"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.passwordConfirmation}
                            />
                            <br/>

                        {errors.passwordConfirmation && <span style={{color:'red'}} className="help-block">{errors.passwordConfirmation}<br></br></span> }
                        </Form.Group>

                        <Form.Group controlId="formbutton">
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ width: '10vh' }}
                                type="submit"
                            >
                                Send
                            </Button>
                        </Form.Group>
                            
                    </Form> 
                        </Grid>
                        
                </Grid>
           
            
        )
    }
}

export default CounselorSignUp;