import React, {Component} from 'react'
import {Card, CardContent, Divider, Grid, Avatar, Button} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import {makeStyles, withStyles} from '@material-ui/core/styles';

// import {Link as RouterLink} from 'react-router-dom'

// const styles = (theme) => ({
//     root      : {
//         // maxWidth: 345,
//         marginTop: '20px',
//         width    : "300px"
//     },
//     media     : {
//         height      : 0,
//         paddingTop  : '56.25%',
//         // paddingTop: '81.25%',
//         borderRadius: '50%',
//         margin      : '28px'
//     },
//     expand    : {
//         transform : 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
//     expandOpen: {
//         transform: 'rotate(180deg)',
//     },
//     large     : {
//         width : theme.spacing(10),
//         height: theme.spacing(10),
//         // marginLeft:
//     },
//
// });

class CounselorCard extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            counselors: {
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
        this.setState({'status': 'Approved'})
    }

    render() {

        // const {classes} = this.props;

        // const tolink = '/user/appointments/' + this.state.counselors.name;
        return (

            <Card style={{width: '500px', margin: '10px'}}>
                {/*<CardActionArea>*/}
                {/*<CardHeader*/}
                {/*    avatar={*/}
                {/*        <Avatar style={{backgroundColor: 'green', width: "50px", height: "50px"}}*/}
                {/*                aria-label="recipe">*/}
                {/*            MI*/}
                {/*            /!*{this.state.counselors.name.toString().substring(0, 1).toUpperCase()}*!/*/}
                {/*        </Avatar>*/}
                {/*    }*/}
                {/*    style={{height: '30%'}}*/}
                {/*    title={this.state.counselors.name}*/}
                {/*    subheader={this.state.counselors.speciality}*/}
                {/*/>*/}


                <CardContent>

                    <Grid container spacing='1'>
                        <Grid item xs={4}>
                            {/*<img src={'/euphoria-v2-art.png'} style={{width:'100%'}}/>*/}
                            <Avatar style={{width: '100%', maxWidth: '150px', height: "auto", maxHeight: '150px'}}
                                    alt="Remy Sharp" src={'/person.jpg'}/>
                        </Grid>
                        <Grid item xs={8} alignContent={"center"} alignItems={"center"}>
                            <Typography variant="h4" component="h3">
                                {this.state.counselors.name}
                            </Typography>
                            {/*<Divider/>*/}
                            <Typography variant='h5' component='h4' color="textSecondary">
                                {this.state.counselors.speciality}
                            </Typography>
                            <Typography variant='h6' component='h5' color="textSecondary">
                                {this.state.counselors.qualification}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider/>
                            <Typography variant="body2" color="textSecondary">
                                {this.state.counselors.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' color='primary' style={{marginLeft: 'auto', float: 'right'}}>Book
                                Now</Button>
                        </Grid>
                    </Grid>

                </CardContent>
                {/*</CardActionArea>*/}
            </Card>
        );
    };
}

export default CounselorCard;