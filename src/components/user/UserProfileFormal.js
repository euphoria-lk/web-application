import React, { Component } from 'react'

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Col } from 'react-bootstrap';
import { validateFormalSignUp } from '../../validations/PatientSignUpValidation';
import axios from 'axios';
import { Alert, AlertTitle } from '@material-ui/lab';

class UserProfileFormal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: 'Male',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            contact: '',
            dob: '',
            nic: '',
            city: '',
            district: '',
            errors: {},
            isLoading: false,
            error: '',
            success: false
        }
    }

    onChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })



    }
    isValid = () => {
        const { errors, isValid } = validateFormalSignUp(this.state);
        console.log(isValid);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }
    onSubmit = (e) => {

        e.preventDefault();
        console.log("shit");

        if (this.isValid()) {
            console.log("ho");
            this.setState({ errors: {} });
            console.log(this.state);
            const body = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                gender: this.state.gender,
                contact: this.state.contact,
                district: this.state.district,
                password: this.state.password,
                nic: this.state.nic,
                dob: this.state.dob,
                city: this.state.city,
            }
            axios.post('http://localhost:5000/api/v1/client-service/signup', JSON.stringify(body), {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(result => {
                if (result.data.message && result.status === 200) {
                    this.setState({
                        error: {
                            message: result.data.message
                        }
                    })
                }
                else {
                    this.setState({
                        success: true
                    })
                    setTimeout(() => {
                        window.location.replace("/user/login");
                    }, 2000);


                }
            }, function (error) {
                console.log(error);
            }).catch(err => {
                this.setState({
                    error: err
                })
            });
        } else {
            this.setState({})
        }
    }

    render() {

        const { errors } = this.state;
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
                {this.state.error &&
                    <Alert onClose={() => {
                        this.setState({
                            error: false
                        })
                        console.log("clicked");
                    }} severity="error"

                    >
                        <AlertTitle>Error</AlertTitle>
                        <strong>{this.state.error.message}</strong>
                    </Alert>
                }
                {this.state.success &&
                    <Alert severity="success"
                        onClose={() => {
                            this.setState({
                                success: false
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
                                id="outlined-read-only-input"
                                label="First Name"
                                className={useStyles.textField}
                                type="text"
                                defaultValue="Gota"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                style={{ width: '400px', marginLeft: '100px', marginTop: '30px' }}
                            />
                            <br />
                            {errors.firstname && <span style={{ color: 'red' }} className="help-block">{errors.firstname}</span>}
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom02">


                            <TextField
                                id="outlined-read-only-input"
                                label="Last Name"
                                type="text"
                                defaultValue="Bro"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                style={{ width: '400px', marginTop: '30px' }}
                            />
                            <br />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            {errors.lastname && <span style={{ color: 'red' }} className="help-block">{errors.lastname}</span>}
                        </Form.Group>
                    </Form.Row>

                    <Form.Group as={Col} md="6" controlId="validationCustom01">

                        <TextField
                            id="outlined-read-only-input"
                            label="Gender"
                            type="text"
                            defaultValue="Male"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            style={{ width: '300px', marginTop: '10px', marginLeft: '85px' }}
                        />
                        <br />
                        {errors.gender && <span style={{ color: 'red' }} className="help-block">{errors.gender}</span>}
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} md="3" controlId="validationCustom01">

                            <TextField
                                id="outlined-read-only-input"
                                label="Email"
                                type="text"
                                defaultValue="GotaHora@srilanka.com"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                style={{ width: '500px', marginTop: '40px', marginLeft: '100px' }}
                            />
                            <br />
                            {errors.email && <span style={{ color: 'red', marginLeft: '50px' }} className="help-block">{errors.email}</span>}
                        </Form.Group>




                        <Form.Group as={Col} md="6" controlId="validationCustom04">



                            <TextField
                                id="outlined-read-only-input"
                                label="Password"
                                type="password"
                                defaultValue="rajapaksha"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                style={{ width: '350px', marginLeft: '350px', marginTop: '40px' }}
                            />
                            <br />
                            {errors.password && <span style={{ color: 'red', marginLeft: '200px' }} className="help-block">{errors.password}<br></br></span>}

                        </Form.Group>
                    </Form.Row>



                    <Form.Group as={Col} md="6" controlId="validationCustom03">



                        <TextField
                            id="outlined-read-only-input"
                            label="Contact Numbers"
                            type="numeric"
                            multiline
                            defaultValue="1234567890"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            style={{ width: '300px', marginTop: '40px', marginLeft: '85px' }}
                        />
                        <br />
                        {errors.contact && <span style={{ color: 'red' }} className="help-block">{errors.contact}</span>}
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
                                readOnly: true,
                            }}
                            onChange={this.onChange}
                            style={{ marginLeft: '85px', marginTop: '40px', width: '250px' }}
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">


                            <TextField
                                id="outlined-read-only-input"
                                label="NIC"
                                type="text"
                                multiline
                                defaultValue="123456789V"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                style={{ width: '300px', marginTop: '40px', marginLeft: '100px' }}
                            />
                            <br />
                            <div style={{ width: '200px' }}>
                                {errors.nic && <span style={{ color: 'red' }} className="help-block">{errors.nic}</span>}
                            </div>

                        </Form.Group>



                        <Form.Group as={Col} md="4" controlId="validationCustom03">

                            <TextField
                                id="outlined-read-only-input"
                                label="City"
                                type="text"
                                multiline
                                defaultValue="Colombo"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                style={{ width: '300px', marginTop: '40px', marginLeft: '100px' }}
                            />
                            <br />
                            {errors.city && <span style={{ color: 'red' }} className="help-block">{errors.city}</span>}
                        </Form.Group>


                        <Form.Group as={Col} md="4" controlId="validationCustom04">

                            <TextField
                                id="outlined-read-only-input"
                                label="District"
                                type="text"
                                multiline
                                defaultValue="Colombo"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                style={{ width: '300px', marginTop: '40px', marginLeft: '100px' }}
                            />
                            <br />
                            {errors.district && <span style={{ color: 'red' }} className="help-block">{errors.district}</span>}


                            <br />


                        </Form.Group>
                    </Form.Row>



                    <Form.Group controlId="formbutton">
                        <Form.Row>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ width: '20vh', marginLeft: '420px', marginRight: '40px', marginTop: '40px' }}
                                type="submit"
                            >
                                Edit
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ width: '20vh', marginRight: '50px', marginTop: '40px' }}
                                type="submit"
                            >
                                Back
                            </Button>
                        </Form.Row>
                    </Form.Group>

                </Form>

            </div>

        )
    }
}


export default UserProfileFormal;