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
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import  CloudUploadIcon  from "@material-ui/icons/CloudUploadOutlined";

import logo from '../../assets/eu-logo.png';


class CounselorSignUp extends Component {
    constructor(props){
        super(props);
         this.state={
            name:'', 
            email:'',
            password:'',
            passwordConfirmation:'',
            errors:{},
            isLoading:false,
            description:'',
            slmcNumber:'',
            speciality: '',
            hospital: '',
            city: '',
            image: ''
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
        
        if(this.isValid()){
            console.log("ho");
            this.setState({errors:{}});

             axios.post('',JSON.stringify(this.state),{headers: {
            'Content-Type': 'application/json',
            }}).then( result => {
                window.location.replace("/user/success");
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
            image:{
                 display: 'none',
            },
            root:{
                '& > *': {
                    margin: theme.spacing(1),
                    },
            },
            button:{
               margin: theme.spacing(1), 
            }
        }));
        return (
                <Grid >
                      <TitleComponent title="Register | Counselor" />
                      <div style={{marginLeft:'40%',marginBottom:'50px',marginTop:'50px'}}>
                                
                                <Avatar alt="logo" src={logo} style={{margin: 10,width: 60, height: 60,marginLeft:'90px'}} /> <h2>Sign Up | Counselor</h2>

                            </div>
                        <Grid container  direction="row" justify="center" alignItems="center" >
                          

                            <Form style={{width:"60%"}} onSubmit={this.onSubmit}>
                            <Form.Row>
                             
                            <Form.Group controlId="fornameq">
                            <TextField
                                id="nameq"
                                label="Enter name"
                                className={useStyles.textField}
                                type="text"
                                required
                                name="name"
                                autoComplete="name"
                                margin="none"
                                variant="outlined"
                                style={{ width: '45vh' }}
                                onChange={this.onChange}
                                value={this.state.name}

                            />
                            <br/>
                        
                        </Form.Group>
                    
                    

                        <Form.Group controlId="formemailq">
                            <TextField
                                id="emailq"
                                label="Enter email"
                                className={useStyles.textField}
                                type="email"
                                required
                                name="email"
                                autoComplete="email"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' ,marginLeft:"70px"}}
                                onChange={this.onChange}
                                value={this.state.email}

                            />
                            <br/>
                            
                        {errors.email && <span style={{color:'red'}} className="help-block">{errors.email}</span>}
                        </Form.Group>
                        </Form.Row>
                            <Form.Row>
                            <Form.Group controlId="forslmcq">
                            <TextField
                                id="slmcNumber"
                                label="Enter SLMC Number"
                                className={useStyles.textField}
                                type="text"
                                required
                                name="slmcNumber"
                                autoComplete="slmcNumber"
                                margin="none"
                                variant="outlined"
                                style={{ width: '30vh' ,marginRight:'30px',marginTop:'20px'}}
                                onChange={this.onChange}
                                value={this.state.slmc}

                            />
                            <br/>
                        
                        </Form.Group>
                        
                            <Form.Group controlId="forspecialityq">
                            <TextField
                                id="speciality"
                                label="Enter Speciality"
                                className={useStyles.textField}
                                type="text"
                                required
                                name="speciality"
                                autoComplete="speciality"
                                margin="none"
                                variant="outlined"
                                style={{ width: '70vh',marginLeft:'50px',marginTop:'20px' }}
                                onChange={this.onChange}
                                value={this.state.speciality}

                            />
                            <br/>
                          
                        </Form.Group>
                        </Form.Row>
                            <Form.Row>
                            <Form.Group controlId="forhospitalq">
                            <TextField
                                id="hospital"
                                label="Enter Hospital/Work"
                                className={useStyles.textField}
                                type="text"
                                required
                                name="hospital"
                                autoComplete="hospital"
                                margin="none"
                                variant="outlined"
                                style={{ width: '55vh' ,marginTop:'20px'}}
                                onChange={this.onChange}
                                value={this.state.speciality}

                            />
                            <br/>
                        
                        </Form.Group>
                       
                                <Form.Group controlId="forcityq">
                                <TextField
                                    id="city"
                                    label="Enter City"
                                    className={useStyles.textField}
                                    type="text"
                                    required
                                    name="city"
                                    autoComplete="city"
                                    margin="none"
                                    variant="outlined"
                                    style={{ width: '50vh' ,marginTop: '20px',marginLeft: '25px'}}
                                    onChange={this.onChange}
                                    value={this.state.city}

                                />
                                <br/>
                            
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                             <Form.Group controlId="fordescriptionq">
                                <TextField
                                    id="description"
                                    label="Enter Description"
                                    className={useStyles.textField}
                                    type="text"
                                    required
                                    name="description"
                                    autoComplete="description"
                                    margin="none"
                                    variant="outlined"
                                    style={{ width: '80vh', marginTop:'20px' }}
                                    onChange={this.onChange}
                                    value={this.state.city}

                                />  
                                <br/>
                            
                            </Form.Group>
                              <Form.Group controlId="forimageq">
                                       
                                        <div className={useStyles.root}>
                                        
                                        <label htmlFor="image">
                                            <Button
                                                color="primary"
                                                variant="outlined"
                                                component="span"
                                                fullWidth={true}
                                                size={"large"}
                                                style={{ marginTop:"28px",marginLeft:"30px"}}
                                                startIcon={<CloudUploadIcon/>}
                                            >
                                                upload Photo
                                                <input
                                            accept="image/*"
                                            id="image"
                                            name="image"
                                            required
                                            style={{ display:'none'}}
                                            type="file"
                                            onChange={e => this.handleChange(e)}
                                        />
                                            </Button>
                                        </label>
                                        </div>
                                    </Form.Group>
                                   
                               
                            </Form.Row>
                              <Form.Row>      
                        <Form.Group controlId="formpasswordq">
                          
                            <br/>
                            <TextField

                                id="passwordq"
                                label="Enter password"
                                className={useStyles.textField}
                                type="password"
                                name="password"
                                autoComplete="password"
                                margin="none"
                                variant="outlined"
                                required
                                style={{ width: '50vh',marginRight:'20px' }}
                                onChange={this.onChange}
                                value={this.state.password}
                            />
                            <br/>
                            
                            {errors.password && <span style={{color:'red'}} className="help-block">{errors.password}<br></br></span> }
                        </Form.Group>

                        <Form.Group controlId="formpasswordconfirmationq">
                            
                            <br/>

                            <TextField

                                id="passwordConfirmationq"
                                label="Re-type Password"
                                className={useStyles.textField}
                                type="password"
                                name="passwordConfirmation"
                                autoComplete="password"
                                required
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh',marginLeft:"20px" }}
                                onChange={this.onChange}
                                value={this.state.passwordConfirmation}
                            />
                            <br/>

                        {errors.passwordConfirmation && <span style={{color:'red'}} className="help-block">{errors.passwordConfirmation}<br></br></span> }
                        </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formbutton">
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ width: '150px' ,marginLeft:"650px",marginTop:'20px'}}
                                type="submit"
                            >
                                Sign Up
                            </Button>
                        </Form.Group>
                            
                    </Form> 
                        </Grid>
                        
                </Grid>
           
            
        )
    }
}

export default CounselorSignUp;