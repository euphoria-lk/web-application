import React, {Component} from 'react'
import {Button, Card, CardActions, CardContent, CardHeader, Grid,Avatar} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

class CounselorCard extends Component {

    handleClick=()=>{
        this.setState({'status':'Approved'})
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
                paddingTop: '56.25%', 
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
            
        const tolink='/user/appointments/'+this.props.counselors.name;
          return (
            <Link underline='none' component={RouterLink} to={tolink} >
            <Card style={{width:'500px',height:'400px',margin:'10px'}} className={classes.root}>
             <CardActionArea>
            <CardHeader
                    avatar={
                <Avatar  style={{backgroundColor:'green',width:"50px",height:"50px"}} aria-label="recipe" >
                   {this.props.counselors.name.toString().substring(0, 1).toUpperCase()}
                </Avatar>
        }
                style={{height:'30%'}}
                title={this.props.counselors.name}
                subheader={this.props.counselors.speciality}
            />
           
            
            <CardContent style={{height:''}}>

                <Avatar style={{width:'150px',height:'150px',marginLeft:'30%',marginTop:'-30px',marginBottom:'30px'}} alt="Remy Sharp" src="https://firebasestorage.googleapis.com/v0/b/xplore-1.appspot.com/o/post-uploads%2FEUaLjpamJtr6VNsq4KJu%2Fpost-image?alt=media&token=4034bcad-cbc0-4f97-97e9-9e7fec7f220b"  />
                <Typography variant="body2" color="textSecondary" >
                    Description : {this.props.counselors.description}
                </Typography>
                 <Typography variant="body2" color="textSecondary" >
                    Age : {this.props.counselors.age}
                </Typography>
                 <Typography variant="body2" color="textSecondary" >
                    City : {this.props.counselors.city}
                </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
            </Link>
  );
    };
}

export default CounselorCard;