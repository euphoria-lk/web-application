import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Container,Tab,Nav,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import {TitleComponent} from '../../components/common/Title'
import {ValidateCounselorSignUp} from '../../validations/CounselorSignUpValidation';
import { FormControl,FormGroup,Button,Box,Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {Form} from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import  CloudUploadIcon  from "@material-ui/icons/CloudUploadOutlined";
import {storage} from "../../firebase/firebase"
import logo from '../../assets/eu-logo.png';
import { Alert, AlertTitle } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';

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
            slmc:'',
            speciality: '',
            hospital: '',
            city: '',
            image: null,
            imageUrl:'',
            uploaded:false,
            colSize :3,
            error:'',
            success:false,
            uploadClicked:false
        }
    }
    handleChange=(e)=>{
        this.setState({
            uploadClicked:true
        })
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        });

        const name = e.target.id;
        const value = e.target.value;

        let errors = this.state.errors;
        const imageFile = e.target.files[0]
        this.setState({
            image:imageFile
        });
        console.log('start of upload'+imageFile.name);
            if(this.state.image === '' ) {
             console.error(`not an image, the image file is a ${typeof(imageFile)}`)
        }
        const uploadTask = storage.ref(`/images/${imageFile.name}`).put(imageFile)
        uploadTask.on('state_changed',  
        (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
        }, (err) => {
        //catches the errors
        console.log(err)
        }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('images').child(imageFile.name).getDownloadURL()
        .then(fireBaseUrl => {
            console.log('uploaded');
            this.setState({
                imageUrl:fireBaseUrl,
                image:fireBaseUrl,
                uploaded: true,
                colSize:4
            })
            this.state.imageUrl=fireBaseUrl;
            this.state.image=fireBaseUrl
            this.state.uploaded=true;
            this.state.colSize=4
            console.log(this.state.image);

        })
        })

    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        if(e.target.name=='password'){
             if(!this.state.image && !this.state.imageUrl ){
                this.setState({
                    error:{
                        message :"please attach profile image"
                    }
                })
            }
        }
     
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
    
            const body ={
                name:this.state.name,
                email:this.state.email,
                speciality:this.state.speciality,
                description:this.state.description,
                slmc:this.state.slmc,
                hospital:this.state.hospital,
                image:this.state.image,
                password:this.state.password,
                city:this.state.city
            }
            axios.post('http://35.192.213.59:5001/api/v1/counsellor-service/counsellor/signup',JSON.stringify(body),{headers: {
            'Content-Type': 'application/json',
            }}).then( result => {
                console.log(result)
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
               window.location.replace("/counselor/login");
                }, 2000);
                }
                 
            
             }).catch(err=>{
                 console.log("error "+err.message);
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
                {this.state.error  &&
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
                {this.state.success  && 
                 <Alert  severity="success"
                    onClose={() => {
                    this.setState({
                        success:false
                 })
            }}>
            <AlertTitle>Success</AlertTitle>
             <strong>Counselor saved successfully!</strong>
            </Alert>
            }
                      <TitleComponent title="Register | Counselor" />
                       <Avatar alt="logo" src={logo} style={{marginTop: 30,width: 60, height: 60,marginLeft:'40%'}} />
                      <div style={{marginLeft:'10%',marginBottom:'50px',marginTop:'50px'}}>
                                
                               
                                <Row>
                                <Col xs={this.state.colSize}>
                                    {this.state.uploaded &&
                                    <Avatar alt="logo" src={this.state.image} style={{marginTop: 30,width: 60, height: 60, /*marginTop:'-10px',*/ marginLeft:'80%'}} />
                                     }
                                </Col>
                                <Col xs={12- this.state.colSize} style={{marginLeft:''}}>
                                 <h2>Sign Up | Counselor</h2> 
                                 </Col>
                                 </Row>

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
                                name="slmc"
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
                                value={this.state.hospital}

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
                                    value={this.state.description}

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
                                    {(!this.state.uploaded && this.state.uploadClicked) &&
                                     <CircularProgress style={{width:'50px', height:'50px',marginLeft:'50px',marginTop:'20px'}} />
                                     }
                                   
                               
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