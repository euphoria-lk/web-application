import React, {Component} from 'react'
import {Avatar, Button, Card, CardContent, Divider, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
const axios = require('axios').default;

class AppointmentCard extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            counsellor: {

            }
        }
    }

    handleClick = () => {
        this.props.onChatActivate(this.state.counsellor);
        console.log("Counsellor Chat Triggered");
    }

    componentDidMount() {
        axios.get('http://35.192.213.59:5001/api/v1/counsellor-service/counsellor/counselor/'+ this.props.appointment.counselor,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
            if(response.data.message && response.status === 200){
                this.setState({
                    show:false
                })
            }else{
                this.setState({
                    counsellor:response.data
                })

                console.log(response.data);

            }

        }).catch((err) => {
            this.setState({
                error:err
            })
        })

    }

    render() {

        // const {classes} = this.props;

        // const tolink = '/user/appointments/' + this.props.counsellor.name;
        return (

            <Card style={{margin: '10px'}}>
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            {/*<img src={'/euphoria-v2-art.png'} style={{width:'100%'}}/>*/}
                            <Avatar style={{width: '100%', maxWidth: '150px', height: "auto", maxHeight: '150px'}}
                                    alt="Remy Sharp" src={this.state.counsellor.image}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h4" component="h3">
                                {this.state.counsellor.name}
                            </Typography>
                            {/*<Divider/>*/}
                            <Typography variant='h5' component='h4' color="textSecondary">
                                {this.state.counsellor.speciality}
                            </Typography>
                            {/*<Typography variant='h6' component='h5' color="textSecondary">*/}
                            {/*    {this.props.counsellor.qualification}*/}
                            {/*</Typography>*/}
                        </Grid>
                        <Grid item xs={12}>
                            <Divider/>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography variant='h6' component='h5' color="textSecondary">
                                        Booking Date: {this.props.appointment.bookingDate}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='h6' component='h5' color="textSecondary">
                                        Timeslot: {this.props.appointment.timeSlot}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' color='primary' style={{marginLeft: 'auto', float: 'right'}}
                                    onClick={this.handleClick}>Chat</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    };
}

export default AppointmentCard;