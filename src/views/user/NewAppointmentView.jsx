import queryString from 'query-string';
import React, { Component } from 'react'
import { FormControl,FormGroup,Button,Box,Grid,Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {Form,Tab,Nav} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {axios} from 'axios';
import { Redirect } from 'react-router-dom';
import NavBarLandingPage from '../../components/common/NavBarLandingPage';
import logo from '../../assets/eu-logo.png';
import {TitleComponent} from '../../components/common/Title'
import CssBaseline from '@material-ui/core/CssBaseline';

class NewAppointmentView extends Component {
    constructor(props){
        super(props);
        this.state={
           
           
            errors:{},
            isLoading:false,
            counselor:'',
            name:'',
            title:'',
            description:'',
            startTime:'',
            endTime:''
        }
    }
    
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
 
    
    onSubmit=(e)=>{
        e.preventDefault();
        console.log("datetime"+this.state.startTime);
        
        if(true){
            console.log("ho");
            this.setState({errors:{},accountType:'quick'});

            // axios.post('',JSON.stringify(this.state),{headers: {
            // 'Content-Type': 'application/json',
            // }}).then( result => {
            //     window.location.replace("/user/signupsuccess");
            //  }, function(error) {
            //     alert('Error occured');
                
            //  });
        }
    }
    componentDidMount() {
        // axios.get('',
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //         }
        //     }).then((response) => {
        //         this.setState({
        //             name:response.data.name,
        //         })
        //     }).catch((err) => {
        //         return err
        //     });
             let url = this.props.location.search;
            let params = queryString.parse(url);
            // console.log(params.name)
            this.state.counselor=params.name;
            console.log("parameters"+params.name);
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
        return (
            <Grid>
            <NavBarLandingPage></NavBarLandingPage>
                <Form  style={{textalign: 'center',marginTop:'120px',marginLeft:'40%'}}  onSubmit={this.onSubmit}>
                   <TitleComponent title="Appointment | User" />
                   <CssBaseline />
                    <Avatar style={{marginLeft:'190px'}} alt="logo" src={logo} className={useStyles.bigAvatar} /> <h2 style={{marginLeft:'30px',marginBottom:'60px',marginTop:'10px'}}>New Appointment | User</h2>
                            
                
                        <Form.Group controlId="formnameq">
                            <TextField
                                required
                                disabled
                                id="nameq"
                                label="Enter Name"
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
                                multiline="true" 
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
                                label="Enter Counselor Name"
                                className={useStyles.textField}
                                type="text"
                                name="counselor"
                                autoComplete="counselor"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.counselor|| ""}

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
                                style={{ width: '50vh' }}
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
                    </Grid>
        )
    }
}



export default NewAppointmentView;