import React, {Component} from 'react'
import logo from '../../assets/eu-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {Nav} from 'react-bootstrap';

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
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }));


export default function CounselorNavigation() {
     
     const Classes=useStyles();
     const image = localStorage.getItem('counselor_image');
    
        return (
          
             <div className={Classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <Avatar alt="EU Logo" src={logo} />
                    <Typography variant="h6" className={Classes.title}>
                        Euphoria
                    </Typography>
                    <Nav className={"mr-auto"}>
                            
                            <Typography>
                           <Nav.Link style={{color:'white'}} href="http://localhost:3000/counselor/">Patients</Nav.Link>
                            </Typography>
                           
                        </Nav>
                         
                         <Avatar style={{marginLeft:'10px',marginRight:'10px'}} alt="Remy Sharp" src={image}  />
                         <Button href="" color="inherit">LogOut</Button>
                    </Toolbar>
                </AppBar>
            </div>

        )
    
}
