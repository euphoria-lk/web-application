import React, {Component} from 'react'
import logo from '../../assets/eu-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));


export default function NavBarLandingPage() {
    const firstname= localStorage.getItem('firstname');
     const Classes=useStyles();
    
        return (
          
             <div className={Classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <Avatar alt="EU Logo" src={logo} />
                    <Typography variant="h6" className={Classes.title}>
                        Euphoria
                    </Typography>
                    {/* <Avatar style={{marginLeft:'10px',marginRight:'10px'}} alt={user.firstname}   /> */}
                    <Avatar  style={{backgroundColor:'grey',width:"50px",height:"50px",marginRight:'10px'}} aria-label="recipe" >
                   {firstname.toString().substring(0, 1).toUpperCase()}
                </Avatar>
                    <Button href="" color="inherit">Sign Out</Button>
                   

                    </Toolbar>
                </AppBar>
            </div>

        )
    
}
