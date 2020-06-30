import React, { Component } from 'react'

import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Form,Col} from 'react-bootstrap';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {validateFormalSignUp} from '../../validations/PatientSignUpValidation';
import axios from 'axios';

class FormalRegistration extends Component {
    constructor(props){
        super(props);
        this.state={
            gender:'',
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            contactNumber:'',
            dob:'',
            nic:'',
            city:'',
            district:'',
            errors:{},
            isLoading:false
        }
    }
    
    onChange=(e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state)
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
        console.log("shit");
        
        if(this.isValid()){
            console.log("ho");
            this.setState({errors:{}});
            console.log(this.state);
            axios.post('',JSON.stringify(this.state),{headers: {
            'Content-Type': 'application/json',
            }}).then( result => {
                    window.location.replace("/user/signup-success");
                }, function(error) {
                    console.log(error);
                }).catch(err=>{
                    alert("something went wrong with the registration");
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
        const list1=[
             { title: 'Male' },
             { title: 'Female' },
             { title: 'Other' }
        ];

        const list2=[
            {title:'Matara'},
            {title:'Ampara'},
            {title:'Badulla'},
            {title:'Anuradhapura'},
            {title:'Batticaloa'},
            {title:'Colombo'},
            {title:'Galle'},
            {title:'Gampaha'},
            {title:'Hambantota'},
            {title:'Jaffna'},
            {title:'Kalutara'},
            {title:'Kilinochchi'},
            {title:'Kegalle'},
            {title:'Kandy'},
            {title:'Mannar'},
            {title:'Kurunegala'},
            {title:'Matale'},
            {title:'Mannar'},
            {title:'Nuwara Eliya'},
            {title:'Mullaitivu'},
            {title:'Moneragala'},
            {title:'Polonnaruwa'},
            {title:'Puttalam'},
            {title:'Trincomalee'},
            {title:'Vavuniya'},
            {title:'Ratnapura'}

        ];
        return (
                <Form onSubmit={this.onSubmit}>
                    
                    
                     <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                        
                                    <TextField 
                                        label="First Name"
                                        className={useStyles.textField}
                                        type="text"
                                        name="firstname"
                                        autoComplete="firstname"
                                        margin="none"
                                        variant="outlined"
                                        style={{width:'400px'}}
                                        onChange={this.onChange}
                                        value={this.state.firstname} 
                                    />
                                    <br/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        {errors.firstname && <span style={{color:'red'}} className="help-block">{errors.firstname}</span>}
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                       
                                
                                    <TextField
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
                           
                                     <Autocomplete
                                        id="gender"
                                        name="gender"
                                        onChange={this.onChange}
                                        options={list1}
                                        getOptionLabel={(option) => option.title}
                                        style={{ width:'300px',marginRight:'50px',marginTop:'15px   ' }}
                                        renderInput={(params) => <TextField {...params} label="Gender" variant="outlined" />}
                                        />
                                        <br/>
                                        {errors.gender && <span style={{color:'red'}} className="help-block">{errors.gender}</span>}
                         </Form.Group>
                         <Form.Group as={Col} md="3" controlId="validationCustom01">
                         <TextField
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
                                    style={{width:'500px',marginLeft:'50px',marginTop:'15px'}}
                                />
                                <br/>
                        {errors.email && <span style={{color:'red'}} className="help-block">{errors.email}</span>}
                         </Form.Group>
                         </Form.Row>
                     
                        
                        <Form.Row>
                        <Form.Group  controlId="validationCustom04">
                        <div style={{marginLeft:'-200px'}}>
                           
                            <TextField
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
                        {errors.password && <span style={{color:'red'}} className="help-block">{errors.password}<br></br></span> }
                        </div>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            
                                    <TextField
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
                                        label="Contact Number"
                                        className={useStyles.textField}
                                        type="text"
                                     
                                        name="contactNumber"
                                        autoComplete="contactNumber"
                                        margin="none"
                                        variant="outlined"
                                        onChange={this.onChange}
                                        value={this.state.contactNumber} 
                                        style={{width:'300px',marginTop:'10px'}}
                                        
                                    />
                                    <br/>
                                    {errors.contactNumber && <span style={{color:'red'}} className="help-block">{errors.contactNumber}</span>}
                            </Form.Group>


                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <TextField
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
                                
                                
                                  
                                     <Autocomplete
                                        id="district"
                                        name="district"
                                         onChange={this.onChange}
                                        options={list2}
                                        getOptionLabel={(option) => option.title}
                                        style={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="District" variant="outlined" />}
                                        />
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
            
        )
    }
}


export default FormalRegistration;