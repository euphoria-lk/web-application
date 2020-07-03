import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import NavBarLandingPage from "../../components/common/NavBarLandingPage";
import CounselorCard from "../../components/counselor/CounselorCard";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import {TitleComponent} from '../../components/common/Title'

const axios = require('axios').default;

class CounselorAppointments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            counselors: [{
                    name:"Dimuthu",
                    speciality:"Thug",
                    description:"this is my style bro",
                    src:"../../assets/profile/me.jpg",
                    age:"33",
                    city:"Matara"


            },
            {
                    name:"Dimuthu",
                    speciality:"Thug",
                    description:"this is my style bro",
                    src:"../../assets/profile/u1.jpg",
                    age:"33",
                    city:"Matara"


            },
            {
                    name:"Dimuthu",
                    speciality:"Thug",
                    description:"this is my style bro",
                    src:"/assets/profile/u2.jpg",
                    age:"33",
                    city:"Matara"


            },
            {
                    name:"Dimuthu",
                    speciality:"Thug",
                    description:"this is my style bro",
                    src:"../../assets/profile/u3.jpeg",
                    age:"33",
                    city:"Matara"


            },
            {
                    name:"Dimuthu",
                    speciality:"Thug",
                    description:"this is my style bro",
                    src:"../../assets/profile/u4.jpg",
                    age:"33",
                    city:"Matara"


            },
            ],
        };
    }


    componentDidMount(){
        // axios.get('',
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //         }
        //     }).then((response) => {
        //         this.setState({
        //             counselors:response.data,
        //         })
        //     }).catch((err) => {
        //         return err
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
                <NavBarLandingPage></NavBarLandingPage>
                 <TitleComponent title="Counselors | User" />
                <Grid style={{marginTop:'20px',marginLeft:'50px'}} container spacing={3}>
                    {this.state.appointments !== null ?
                            this.state.counselors.map((counselor,index) => (
                                    <CounselorCard style={{marginTop:'20px',width:'300px'}} key={index}  counselors={counselor}/>
                            )) :  <div  style={{textalign:'center',width:'300px',height:'300px'}} className={classes.root}>
                            <CircularProgress />
                            </div>
                    }
                </Grid>
            </div>

        );
    };
}

export default CounselorAppointments;
