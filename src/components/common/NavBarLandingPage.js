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
     
     const Classes=useStyles();
    
        return (
          
             <div className={Classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Avatar alt="EU Logo" src={logo} />
                    <Typography variant="h6" className={Classes.title}>
                        Euphoria
                    </Typography>
                   
                    <Button href="" color="inherit">SignIn</Button>
                    </Toolbar>
                </AppBar>
            </div>

        )
    
}
