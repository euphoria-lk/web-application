import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import NavBarLandingPage from "../../components/common/NavBarLandingPage";
import CounselorCard from "../../../components/client/CounselorCard";
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';
import {TitleComponent} from '../../components/common/Title'
import {Alert, AlertTitle} from '@material-ui/lab';

const axios = require('axios').default;

class CounselorAppointments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            counselors: [],
            error: '',
        };
    }

    componentWillMount() {
        // if(!localStorage.getItem('token')){
        //     window.location.replace("/user/login");
        // }
    }


    componentDidMount() {
        axios.get('http://localhost:5002/api/v1/counselling-service/counsellor/6',
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
            this.setState({
                counselors: response.data,
            })
        }).catch((err) => {
            this.setState({
                error: err
            })
        })
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
                <NavBarLandingPage></NavBarLandingPage>
                <TitleComponent title="Counselors | User"/>
                <Grid style={{marginTop: '20px', marginLeft: '50px'}} container spacing={3}>
                    {this.state.error &&
                    <Alert style={{textalign: 'center', marginLeft: '35%'}}
                           onClose={() => {
                               this.setState({
                                   error: false
                               })
                           }}
                           severity="error">
                        <AlertTitle>Error</AlertTitle>
                        <strong>{this.state.error.message}</strong>
                    </Alert>
                    }
                    {this.state.counselors.length > 0 ?
                        this.state.counselors.map((counselor, index) => (
                            <CounselorCard style={{marginTop: '20px', width: '300px'}} key={index}
                                           counselors={counselor}/>
                        )) :
                        <div style={{textAlign: 'center', width: '100%', height: '300px'}} className={classes.root}>
                            <CircularProgress
                                style={{marginLeft: '40%', width: '300px', height: '300px', marginTop: '50px'}}/>
                        </div>
                    }
                </Grid>
            </div>

        );
    };
}

export default CounselorAppointments;
