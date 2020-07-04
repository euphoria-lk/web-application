import queryString from 'query-string';
import React, { Component } from 'react'
import { FormControl,FormGroup,Button,Box,Grid,Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {Form,Tab,Nav} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import NavBarLandingPage from '../../components/common/NavBarLandingPage';
import logo from '../../assets/eu-logo.png';
import {TitleComponent} from '../../components/common/Title'
import CssBaseline from '@material-ui/core/CssBaseline';
import {Row,Col} from 'react-bootstrap';
import styles from './Style.css';
import { Alert, AlertTitle } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
class NewAppointmentView extends Component {
    constructor(props){
        super(props);
        this.state={
           
           
            errors:{},
            isLoading:false,
            counselor:'',
            firstname:'',
            lastname:'',
            title:'',
            description:'',
            startTime:'',
            endTime:'',
            speciality:'',
            email:'',
            error:'',
            open:true,
            success:false
        }
        
        
    }
    
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
 
    
    onSubmit=(e)=>{
        e.preventDefault();
        console.log("datetime"+this.state.startTime);
            
        
        axios.post('http://localhost:5000/api/v1/counselling-service/counsellor/appointments',JSON.stringify(this.state),{headers: {
            'Content-Type': 'application/json',
            }}).then( result => {
                if(result.message){
                    this.setState({
                        error:result
                    })
                }else{
                this.setState({
                     success: true
            })
              setTimeout(() => {
               window.location.replace("/user/counselors");
                }, 2000);
                
                }
                 
            
             }).catch(err=>{
                 this.setState({
                     error:err
                 })
             
             });
    }
    componentWillMount() {
            this.state.counselor=this.props.match.params.name;
            axios.get('http://localhost:5000/api/v1/counsellor-service/counsellor/'+this.state.counselor,{headers: {
            'Content-Type': 'application/json',
            }}).then( result => {
                console.log(result.data);
                if(result.data.message){
                    this.setState({
                        error:result.data
                    })
                }else{
                this.setState({
                counselor:result.data.name,
                speciality:result.data.speciality,
                email:result.data.email
            })
                }
             
             }).catch(err=>{
                 this.setState({
                     error:err
                 })
             
             });
          
    }
    componentDidMount() {
        
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
            bigAvatar: {
                margin: 10,
                width: 60,
                height: 60,
            },
        }));
        const alert=<h3></h3>;
        return (
            
            <Grid>
            <NavBarLandingPage></NavBarLandingPage>
             {this.state.error  &&
            <Alert onClose={() => {
                this.setState({
                     error:false
                 })
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
             <strong>Appointment saved successfully!</strong>
            </Alert>
            }
                <Row>
                <Col xs={6}>
                 <Avatar style={{width:'250px',height:'250px',marginLeft:'30%',marginTop:'30%',marginBottom:'30px'}} alt="Remy Sharp" src="https://firebasestorage.googleapis.com/v0/b/xplore-1.appspot.com/o/post-uploads%2FEUaLjpamJtr6VNsq4KJu%2Fpost-image?alt=media&token=4034bcad-cbc0-4f97-97e9-9e7fec7f220b"  />
                <h4 style={{marginLeft:"30%",fontFamily:"Inconsolata"}}>Name : {this.state.counselor} </h4>
                 <h4 style={{marginLeft:"30%",fontFamily:"Inconsolata"}}>Speciality : {this.state.speciality} </h4>
                 <h4 style={{marginLeft:"30%",fontFamily:"Inconsolata"}}>Email : {this.state.email} </h4>
                </Col>
                <Col xs={6}>
                <Form  style={{textalign: 'center',marginTop:'60px',marginLeft:'20%'}}  onSubmit={this.onSubmit}>
                   <TitleComponent title="Appointment | User" />
                   <CssBaseline />
                    <Avatar style={{marginLeft:'190px'}} alt="logo" src={logo} className={useStyles.bigAvatar} /> <h2 style={{marginLeft:'30px',marginBottom:'60px',marginTop:'10px'}}>New Appointment | User</h2>
                            
                
                        <Form.Group controlId="formfirstnameq">
                            <TextField
                                required
                                
                                id="firstnameq"
                                label=" First Name"
                                className={useStyles.textField}
                                type="text"
                                name="firstname"
                                autoComplete="firstname"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.firstname}

                            />
                            <br/>
                            
                        </Form.Group>
                        <Form.Group controlId="formlastnameq">
                            <TextField
                                required
                                
                                id="lastnameq"
                                label=" Last Name"
                                className={useStyles.textField}
                                type="text"
                                name="lastname"
                                autoComplete="lastname"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.lastname}

                            />
                            <br/>
                            
                        </Form.Group>
                      <Form.Group controlId="formtitleq">
                            <TextField
                                required
                                
                                id="titleq"
                                label="Enter Title"
                                className={useStyles.textField}
                                type="text"
                                name="title"
                                autoComplete="title"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.title}

                            />
                            <br/>
                            
                        </Form.Group>
                        
                        <Form.Group controlId="formdescriptionq">
                            <TextField
                                required
                                
                                id="descriptionq"
                                label="Enter Description"
                                className={useStyles.textField}
                                type="text"
                                name="description"
                                autoComplete="description"
                                margin="none"
                                multiline={true} 
                                rows={5}
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.description}

                            />
                            <br/>
                            
                        </Form.Group>
                           <Form.Group >
                            <TextField
                                required
                                disabled
                                id="counselorq"
                                label=" Counselor Name"
                                className={useStyles.textField}
                                type="text"
                                name="counselor"
                                autoComplete="counselor"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.counselor}

                            />
                            <br/>
                            
                        </Form.Group>
                           <Form.Group controlId="formstartTimerq">
                           <TextField
                                id="startTimeq"
                                label="Appointment Start Time"
                                type="datetime-local"
                                className={useStyles.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                name='startTime'
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                variant="outlined"
                                value={this.state.startTime}
                    />
                            <br/>
                            
                        </Form.Group>
                              <Form.Group controlId="formendTimeq">
                           <TextField
                                id="endTimeq"
                                label="Appointment End Time"
                                type="datetime-local"
                                className={useStyles.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                name='endTime'
                                style={{ width: '50vh',color: 'black'}}
                                onChange={this.onChange}
                                variant="outlined"
                                value={this.state.endTime}
                    />
                            <br/>
                            
                        </Form.Group>
                        <Form.Group controlId="formbutton">
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ width: '30vh' ,marginTop: '20px',marginLeft: '90px'}}
                                type="submit"
                            >
                                Request Appointment
                            </Button>
                        </Form.Group>
                            
                    </Form> 
                    </Col>
                    </Row>
                    </Grid>
        )
    }
}



export default NewAppointmentView;