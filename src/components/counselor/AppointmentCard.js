import React, {Component} from 'react'
import {Button, Card, CardActions, CardContent, CardHeader, Grid,Avatar} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import axios from 'axios'

class CounselorCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:'pathirana'
        }
    }

    handleClick=()=>{
        this.setState({'status':'Approved'})
     
    }
    componentWillMount(){
        console.log(this.props.appointments.user);
            axios.get('http://localhost:5002/api/v1/counselling-service/counsellor/user/'+this.props.appointments.user,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                this.setState({
                    user:response.data,
                })
            }).catch((err) => {
                this.setState({
                    error:err
                })
            })
    }

    render() {
        const classes = makeStyles((theme) => ({
            root: {
                // maxWidth: 345,
                marginTop:'20px',
                width:"300px"
            },
            media: {
                height: 0,
                /*paddingTop: '56.25%',*/
                paddingTop: '81.25%',
                borderRadius: '50%',
                margin: '28px'
            },
            expand: {
                transform: 'rotate(0deg)',
                marginLeft: 'auto',
                transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
                }),
            },
            expandOpen: {
                transform: 'rotate(180deg)',
            },
             large: {
                width: theme.spacing(10),
                height: theme.spacing(10),
                // marginLeft:
             },
           
            }));
            
       
          return (
            
            <Card style={{width:'500px',height:'300px',margin:'20px'}} className={classes.root}>
             <CardActionArea>
            <CardHeader
                  
                style={{height:'30%',textalign:'center'}}
                title={this.state.user.firstname + ' ' + this.state.user.lastname}
            />
            <CardContent style={{height:'70%'}}>
                
                <Avatar src ="" style={{backgroundColor:'grey',width:"60px",height:"60px",marginLeft:"40%", marginBottom:"10px"}} aria-label="recipe" />
                 
        
               
                <Typography style={{marginBottom:'10px'}} variant="body2" color="textSecondary" >
                    Title : {this.props.appointments.title}
                </Typography>
                 <Typography style={{marginBottom:'10px'}}  variant="body2" color="textSecondary" >
                    Description : {this.props.appointments.description}
                </Typography>
                 <Typography  style={{marginBottom:'10px'}} variant="body2" color="textSecondary" >
                    Start Time : {this.props.appointments.startTime}
                </Typography>
                 <Typography variant="body2" color="textSecondary" >
                    End Time : {this.props.appointments.endTime}
                </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
            
  );
    };
}

export default CounselorCard;