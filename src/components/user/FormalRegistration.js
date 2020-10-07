import React, { Component } from 'react'

import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Form,Col} from 'react-bootstrap';
import {validateFormalSignUp} from '../../validations/PatientSignUpValidation';
import axios from 'axios';
import { Alert, AlertTitle } from '@material-ui/lab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel'

class FormalRegistration extends Component {
    constructor(props){
        super(props);
        this.state={
            gender:'Male',
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            contact:'',
            dob:'',
            nic:'',
            city:'',
            district:'',
            errors:{},
            isLoading:false,
            error:'',
            success:false
        }
    }
    
    onChange=(e)=>{
        
        this.setState({[e.target.name]:e.target.value})
        
        
        
    }
    isValid=()=>{
        const{errors,isValid}=validateFormalSignUp(this.state);
        console.log(isValid);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
    onSubmit=(e)=>{
       
        e.preventDefault();
        
        if(true){
            console.log("ho");
            this.setState({errors:{}});
            console.log(this.state);
            const body={
                firstname:this.state.firstname,
                lastname:this.state.lastname,
                email:this.state.email,
                gender:this.state.gender,
                contact:this.state.contact,
                district:this.state.district,
                password:this.state.password,
                nic:this.state.nic,
                dob:this.state.dob,
                city:this.state.city,
            }
            axios.post('http://34.121.143.209:5000/api/v1/client-service/signup',JSON.stringify(body),{headers: {
            'Content-Type': 'application/json',
            }}).then( result => {
                    if(result.data.message && result.status === 200){
                        this.setState({
                            error:{
                                message:result.data.message
                            },
                            success:false
                        })
                    }
                    else{
                        this.setState({
                            success:true,
                            error:false
                        })
                           setTimeout(() => 
                           {window.location.replace("/user/login");
                         }, 2000);
                    
                       
                    }
                }, function(error) {
                    console.log(error);
                }).catch(err=>{
                    this.setState({
                        error:err,
                        success:false
                    })
                });
        }else{
            this.setState({})
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
            width: theme.width(300),
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
             <strong>Formal User Registered successfully</strong>
            </Alert>
            }
                <Form onSubmit={this.onSubmit}>
                    
                    
                     <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                        
                                    <TextField 
                                        required
                                        label="First Name"
                                        className={useStyles.textField}
                                        type="text"
                                        defaultValue="Male"
                                        name="firstname"
                                        autoComplete="firstname"
                                        margin="none"
                                        variant="outlined"
                                        style={{width:'400px'}}
                                        onChange={this.onChange}
                                        value={this.state.firstname} 
                                    />
                                    <br/>
                        {errors.firstname && <span style={{color:'red'}} className="help-block">{errors.firstname}</span>}
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                       
                                
                                    <TextField
                                        required
                                        label="Last Name"
                                        className={useStyles.textField}
                                        type="text"
                                        name="lastname"
                                        autoComplete="lastname"
                                        margin="none"
                                        variant="outlined"
                                        style={{width:'400px'}}
                                        onChange={this.onChange}
                                        value={this.state.lastname} />
                                        <br/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        {errors.lastname && <span style={{color:'red'}} className="help-block">{errors.lastname}</span>}
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                         <Form.Group as={Col} md="4" controlId="validationCustom01">
                          <TextField
                                        required
                                        label="Gender"
                                        className={useStyles.textField}
                                        type="text"
                                        name="gender"
                                        autoComplete="gender"
                                        margin="none"
                                        variant="outlined"
                                        style={{width:'300px',marginTop:'10px'}}
                                        onChange={this.onChange}
                                        value={this.state.gender} />
                                        <br/>
                                        {errors.gender && <span style={{color:'red'}} className="help-block">{errors.gender}</span>}
                         </Form.Group>
                         <Form.Group as={Col} md="3" controlId="validationCustom01">
                         <TextField
                                    required
                                    type="email" 
                                    placeholder="Enter email" 
                                    label="Email"
                                    className={useStyles.textField}
                                    name="email"
                                    autoComplete="email"
                                    margin="none"
                                    variant="outlined"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    style={{width:'500px',marginLeft:'50px',marginTop:'10px'}}
                                />
                                <br/>
                        {errors.email && <span style={{color:'red',marginLeft:'50px'}} className="help-block">{errors.email}</span>}
                         </Form.Group>
                         </Form.Row>
                     
                        
                        <Form.Row>
                        <Form.Group  controlId="validationCustom04">
                        <div style={{marginLeft:'-200px'}}>
                           
                            <TextField
                                required
                                type="password" 
                                placeholder="Password" 
                                label="Password"
                                className={useStyles.textField}
                                name="password"
                                autoComplete="email"
                                margin="none"
                                variant="outlined"
                                onChange={this.onChange}
                                value={this.state.password}
                                style={{width:'350px',marginRight:'60px',marginLeft:'200px'}}
                            />
                            <br/>
                        {errors.password && <span style={{color:'red',marginLeft:'200px'}} className="help-block">{errors.password}<br></br></span> }
                        </div>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            
                                    <TextField
                                    required
                                    type="password" 
                                    placeholder="Password Confirmation" 
                                    label="Re-type Password"
                                    className={useStyles.textField}
                                    name="passwordConfirmation"
                                    autoComplete="password"
                                    margin="none"
                                    variant="outlined"
                                    onChange={this.onChange}
                                    value={this.state.passwordConfirmation}
                                    style={{width:'350px',marginLeft:'50px'}}
                                />
                                <br/>
                                {errors.passwordConfirmation && <span style={{color:'red'}} className="help-block">{errors.passwordConfirmation}<br></br></span> }
                            
                        </Form.Group>
                        </Form.Row>
                            <Form.Row>  
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                           
                            
                                    <TextField 
                                        required
                                        label="Contact Number"
                                        className={useStyles.textField}
                                        type="text"
                                     
                                        name="contact"
                                        autoComplete="contact"
                                        margin="none"
                                        variant="outlined"
                                        onChange={this.onChange}
                                        value={this.state.contact} 
                                        style={{width:'300px',marginTop:'10px'}}
                                        
                                    />
                                    <br/>
                                    {errors.contact && <span style={{color:'red'}} className="help-block">{errors.contact}</span>}
                            </Form.Group>


                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <TextField
                                        required
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        name="dob"
                                        defaultValue="2020-01-01"
                                        className={useStyles.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                        onChange={this.onChange}
                                        style={{marginLeft:'-40px',marginTop:'10px',width:'250px'}}
                                    />
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                            

                                    <TextField
                                            required
                                            label="NIC"
                                            className={useStyles.textField}
                                            type="text"
                                            name="nic"
                                            autoComplete="nic"
                                            margin="none"
                                            variant="outlined"
                                            style={{width:'300px'}}
                                            onChange={this.onChange}
                                            value={this.state.nic} 
                                    />
                                    <br/>
                                <div style={{width:'200px'}}>
                                    {errors.nic && <span style={{color:'red'}} className="help-block">{errors.nic}</span>}
                                </div>

                            </Form.Group>
                           

                        
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                           
                                
                                    <TextField
                                         required
                                        label="City"
                                        className={useStyles.textField}
                                        type="text"
                                        name="city"
                                        autoComplete="city"
                                        margin="none"
                                        variant="outlined"
                                        style={{ width: '300px' }}
                                        onChange={this.onChange}
                                        value={this.state.city}
                                    />
                                    <br/>
                                    {errors.city && <span style={{color:'red'}} className="help-block">{errors.city}</span>}
                            </Form.Group>
                                        

                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                
                                
                                    <TextField
                                        required
                                        label="district"
                                        className={useStyles.textField}
                                        type="text"
                                        name="district"
                                        autoComplete="district"
                                        margin="none"
                                        variant="outlined"
                                        style={{ width: '300px' }}
                                        onChange={this.onChange}
                                        value={this.state.district}
                                    />
                                    <br/>
                                    {errors.district && <span style={{color:'red'}} className="help-block">{errors.district}</span>}
                                  
                                    
                                    <br/>       
                                    
                            </Form.Group>

                            </Form.Row>
                            
                            <Form.Group>
                                <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ width: '100px',height:'40px' }}
                                    type="submit"
                                    >
                                    Send
                            </Button>
                                                    
                    </Form> 
                    </div>
            
        )
    }
}


export default FormalRegistration;