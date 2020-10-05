import React, {Component} from 'react'
import {Avatar, Button, Dialog, DialogActions, DialogContent, Grid, Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
// import NavBarLandingPage from '../../src/components/common/NavBarLandingPage';
// import logo from '/euphoria-v2-art.png';
// import {TitleComponent} from '../../src/components/common/Title'

const axios = require('axios').default;

const logo = '/euphoria-v2-art.png';

export async function getServerSideProps() {
    const res  = await fetch('http://localhost:5002/api/v1/counselling-service/counsellor/10');
    const data = await res.json();

    return {props: {data}};
}

class NewAppointmentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counselor: 'kasun',
            firstname: 'Missaka',
            lastname : 'Iddamalgoda',

            errors     : {},
            isLoading  : false,
            // counselor  : '',
            // firstname  : '',
            // lastname   : '',
            title      : '',
            description: '',
            startTime  : '',
            endTime    : '',
            speciality : '',
            email      : '',
            error      : '',
            open       : true,
            success    : false,
            image      : ''
        }

        this.getData();
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    startTimeChange = (time) => {

    }


    onSubmit = (e) => {
        e.preventDefault();
        console.log("datetime" + this.state.startTime);
        const body = {}

        send('http://localhost:5002/api/v1/counselling-service/counsellor/appointments', JSON.stringify(this.state), {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(result => {
            if (result.message) {
                this.setState({
                    success: false,
                    error  : result
                })
            } else {
                this.setState({
                    error  : false,
                    success: true
                })
                setTimeout(() => {
                    // window.location.replace("/user/home");
                }, 2000);

            }


        }).catch(err => {
            this.setState({
                error: err
            })

        });
    }

    getData() {
        // this.state.counselor=this.props.match.params.name;
        // this.state.counselor = 'kasun';
        console.log("Damn");
        this.setState({
            // firstname:localStorage.getItem('firstname'),
            // lastname:localStorage.getItem('lastname')
        })
        axios.get('http://localhost:5001/api/v1/counsellor-service/counsellor/' + this.state.counselor, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(result => {
            console.log(result.data);
            if (result.data.message) {
                this.setState({
                    error: result.data
                })
            } else {
                this.setState({
                    counselor : result.data.name,
                    speciality: result.data.speciality,
                    email     : result.data.email,
                    image     : result.data.image
                })
            }

        }).catch(err => {
            this.setState({
                error: err
            })

        });

    }

    componentDidMount() {

    }

    render() {
        const {errors}  = this.state;
        const useStyles = makeStyles(theme => ({
            container: {
                display : 'flex',
                flexWrap: 'wrap',
            },
            textField: {
                marginLeft : theme.spacing(1),
                marginRight: theme.spacing(1),
            },
            dense    : {
                marginTop: theme.spacing(2),
            },
            menu     : {
                width: 200,
            },
            bigAvatar: {
                margin: 10,
                width : 60,
                height: 60,
            },
        }));

        return (

            <Dialog open={true}>
                <form>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <DialogContent>
                            <Grid container>
                                {/*<NavBarLandingPage></NavBarLandingPage>*/}
                                {/*{this.state.error &&
                            <Alert onClose={() => {
                                this.setState({
                                    error: false
                                })
                            }} severity="error">
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
                                <strong>Appointment saved successfully!</strong>
                            </Alert>
                            }*/}
                                {/*<Grid item xs={6}>*/}
                                {/*    <Avatar style={{*/}
                                {/*        width       : '350px',*/}
                                {/*        height      : '300px',*/}
                                {/*        marginLeft  : '30%',*/}
                                {/*        marginTop   : '30%',*/}
                                {/*        marginBottom: '30px'*/}
                                {/*    }} alt={this.state.counselor} src={this.state.image}/>*/}
                                {/*    <Typography variant={'h5'}>*/}
                                {/*        Name : {this.state.counselor}*/}
                                {/*    </Typography>*/}
                                {/*    /!*<h4 style={{marginLeft: "30%", fontFamily: "Inconsolata"}}>Name : {this.state.counselor} </h4>*!/*/}
                                {/*    <Typography variant={'h5'}>*/}
                                {/*        Speciality : {this.state.speciality}*/}
                                {/*    </Typography>*/}
                                {/*    /!*<h4 style={{marginLeft: "30%", fontFamily: "Inconsolata"}}>Speciality : {this.state.speciality} </h4>*!/*/}
                                {/*    <Typography variant={'h5'}>*/}
                                {/*        Email : {this.state.email}*/}
                                {/*    </Typography>*/}
                                {/*</Grid>*/}
                                <Grid item xs={12}>

                                    {/*<TitleComponent title="Appointment | User"/>*/}
                                    {/*<CssBaseline/>*/}
                                    <Grid container spacing={1}>
                                        <Grid item xs={5}>
                                            <Avatar
                                                style={{
                                                    width      : '100%',
                                                    maxWidth   : '150px',
                                                    height     : "auto",
                                                    maxHeight  : '150px',
                                                    marginLeft : "auto",
                                                    marginRight: '0px'
                                                }}
                                                alt="logo" src={logo}/>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <Typography variant={"h5"} component={"h5"}>New Appointment |
                                                User</Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2}>

                                        <Grid item xs={12}>
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

                                                onChange={this.onChange}
                                                value={this.state.counselor}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                disabled
                                                id="firstnameq"
                                                label=" First Name"
                                                className={useStyles.textField}
                                                type="text"
                                                name="firstname"
                                                autoComplete="firstname"
                                                margin="none"
                                                variant="outlined"
                                                // style={{width: '50vh'}}
                                                onChange={this.onChange}
                                                value={this.state.firstname}
                                                fullWidth
                                            />
                                            {/*<br/>*/}
                                        </Grid>
                                        <Grid item xs={12}>
                                            {/*</FormGroup>*/}
                                            {/*<FormGroup controlId="formlastnameq">*/}
                                            <TextField
                                                required
                                                disabled
                                                id="lastnameq"
                                                label=" Last Name"
                                                className={useStyles.textField}
                                                type="text"
                                                name="lastname"
                                                autoComplete="lastname"
                                                margin="none"
                                                variant="outlined"
                                                // style={{width: '50vh'}}
                                                onChange={this.onChange}
                                                value={this.state.lastname}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            {/*</FormGroup>*/}
                                            {/*<FormGroup controlId="formtitleq">*/}
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
                                                // style={{width: '50vh'}}
                                                onChange={this.onChange}
                                                value={this.state.title}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            {/*</FormGroup>*/}

                                            {/*<FormGroup controlId="formdescriptionq">*/}
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
                                                // style={{width: '50vh'}}
                                                onChange={this.onChange}
                                                value={this.state.description}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            {/*</FormGroup>*/}
                                            {/*<FormGroup controlId="formstartTimerq">*/}
                                            {/*<TextField
                                            id="startTimeq"
                                            label="Appointment Start Time"
                                            type="datetime-local"
                                            className={useStyles.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            name='startTime'

                                            onChange={this.onChange}
                                            variant="outlined"
                                            value={this.state.startTime}
                                            fullWidth
                                        />*/}
                                            <DateTimePicker id={"startTimeq"} label={"Appointment Start Time"}
                                                            name={'startTime'} value={this.state.startTime}
                                                            onChange={this.startTimeChange} inputVariant={"outlined"}
                                                            disablePast
                                                            fullWidth/>
                                            {/*    <br/>*/}
                                        </Grid>
                                        <Grid item xs={12}>
                                            {/*</FormGroup>*/}
                                            {/*<FormGroup controlId="formendTimeq">*/}
                                            <TextField
                                                id="endTimeq"
                                                label="Appointment End Time"

                                                className={useStyles.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                name='endTime'
                                                // style={{width: '50vh', color: 'black'}}
                                                onChange={this.onChange}
                                                variant="outlined"
                                                value={this.state.endTime}
                                                fullWidth
                                            />
                                            {/*    <br/>*/}
                                        </Grid>
                                        {/*</FormGroup>*/}
                                    </Grid>
                                </Grid>
                                {/*</Row>*/}
                            </Grid>
                        </DialogContent>
                    </MuiPickersUtilsProvider>
                    <DialogActions>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{width: '30vh', marginTop: '20px', marginLeft: '90px'}}
                            type="submit"
                        >
                            Request Appointment
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        )
    }
}


export default NewAppointmentView;