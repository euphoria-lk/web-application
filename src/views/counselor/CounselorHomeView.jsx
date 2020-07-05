import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import CounselorNavigation from "../../components/counselor/CounselorNavigation";
import AppointmentCard from "../../components/counselor/AppointmentCard";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import {TitleComponent} from '../../components/common/Title'
import { Alert, AlertTitle } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import localService from '../../localStorageService'

const axios = require('axios').default;

class CounselorHomeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            appointments: [],
            error:'',
            user:'',
            
        };
    }
    componentWillMount(){
     
           const email = localStorage.getItem('counselor_email');
        axios.get('http://localhost:5002/api/v1/counselling-service/counsellor/profile/'+email,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                console.log(response.data);
                this.setState({
                    appointments:response.data,
                })
            }).catch((err) => {
                this.setState({
                    error:err
                })
            })
            console.log("this is appointments"+this.state.appointments.length)
    }
 


    componentDidMount(){
        // const email = localStorage.getItem('counselor_email');
        // axios.get('http://localhost:5002/api/v1/counselling-service/counsellor/profile/'+email,
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //         }
        //     }).then((response) => {
        //         this.setState({
        //             appointments:response.data,
        //         })
        //     }).catch((err) => {
        //         this.setState({
        //             error:err
        //         })
        //     })
    };

    render() {
        const classes = makeStyles((theme) => ({
            root: {
                display: 'flex',
                '& > * + *': {
                marginLeft: theme.spacing(2),
                },
            },
            }));
        return (
            <div>
                <CounselorNavigation></CounselorNavigation>
                 <TitleComponent title="Appointments | Counselor" />
                 <h2 style={{textalign:"center",marginLeft:'30%',marginTop:'20px'}}>Upcoming Appointments </h2>
                <Grid style={{marginTop:'20px',marginLeft:'50px'}} container spacing={3}>
                 {this.state.error  &&
            <Alert style={{textalign:'center',marginLeft:'35%'}} onClose={() => {
                this.setState({
                     error:false
                 })
            }} severity= "error"
               
        >
                <AlertTitle>Error</AlertTitle>
                <strong>{this.state.error.message}</strong>
            </Alert>
            }
                    {this.state.appointments !== null ?
                            this.state.appointments.map((appointment,index) => (
                                    <AppointmentCard style={{marginTop:'20px',width:'300px'}} key={index}  appointments={appointment}/>
                            )) :  <div  style={{textalign:'center',width:'300px',height:'300px'}} className={classes.root}>
                            <CircularProgress />
                            </div>
                    }
                </Grid>
            </div>

        );
    };
}

export default CounselorHomeView;
