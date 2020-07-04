import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

import { FormControl,FormGroup,Button,Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import {Form,Tab,Nav} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import axios from 'axios';
import {validateQuickSignUp} from '../../validations/PatientSignUpValidation';
import { Redirect } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';



class QuickRegistration extends Component {
    constructor(props){
        super(props);
        this.state={
           
            email:'',
            password:'',
            passwordConfirmation:'',
            errors:{},
            isLoading:false,
            accountType:'',
            error:'',
            success:false
        }
    }
    
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    isValid=()=>{
        const{errors,isValid}=validateQuickSignUp(this.state);
        console.log(isValid);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.isValid()){
            console.log("ho");
            this.setState({errors:{},accountType:'quick'});
            const body ={
                email:this.state.email,
                password:this.state.password
            }

            axios.post('http://localhost:5000/api/v1/client-service/signup',JSON.stringify(body),{headers: {
            'Content-Type': 'application/json',
            }}).then( result => {
                if(result.data.message && result.status === 200){
                    this.setState({
                        error:result.data
                    })
                }else{
                 this.setState({
                     error:false,
                     success: true
                })
              setTimeout(() => {
               window.location.replace("/user/login");
                }, 2000);
                }

                
             }).catch(err=>{
                 this.setState({
                     error:err
                 })

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
            <div>
            { this.state.error  &&
                    <Alert onClose={() => {
                        this.setState({
                            error:false
                        })
                        console.log("clicked");
                    }} severity= "error"
                    
                >
                     <AlertTitle>Error</AlertTitle>
                     <strong>{this.state.error.message}</strong>
                    </Alert>
            }
                { this.state.success  && 
                 <Alert  severity="success"
                    onClose={() => {
                    this.setState({
                        success:false
                 })
            }}>
            <AlertTitle>Success</AlertTitle>
             <strong>Quick User Registered successfully</strong>
            </Alert>
            }
                
        
                <Form onSubmit={this.onSubmit}>
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
            </div>
        )
    }
}



export default QuickRegistration;