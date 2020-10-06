import React, {Component} from 'react'
import {Card, CardContent, Divider, Grid, Avatar, Button} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import {makeStyles, withStyles} from '@material-ui/core/styles';

class CounselorCard extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            counsellor: {
                name         : 'Missaka Prasajith Iddamalgoda',
                speciality   : 'Counselling, Therapist',
                qualification: 'MBBS',
                image        : '/euphoria-v2-art.png',
                description  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet' +
                    'architecto assumenda distinctio dolorem ducimus eaque odio sunt, ullam! Eligendi impedit' +
                    'itaque nemo provident quidem quo repudiandae sapiente tempora vel.',
                email        : 'm.iddamalgoda@gmail.com',
                city         : 'Colombo'
            }
        }
    }

    handleClick = () => {
        this.props.onCounsellorSelect(this.props.counsellor.name);
        console.log("Counsellor Booking Triggered");
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
                                    alt="Remy Sharp" src={this.props.counsellor.image}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h4" component="h3">
                                {this.props.counsellor.name}
                            </Typography>
                            {/*<Divider/>*/}
                            <Typography variant='h5' component='h4' color="textSecondary">
                                {this.props.counsellor.speciality}
                            </Typography>
                            {/*<Typography variant='h6' component='h5' color="textSecondary">*/}
                            {/*    {this.props.counsellor.qualification}*/}
                            {/*</Typography>*/}
                        </Grid>
                        <Grid item xs={12}>
                            <Divider/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' color='primary' style={{marginLeft: 'auto', float: 'right'}} onClick={this.handleClick}>Chat</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    };
}

export default CounselorCard;