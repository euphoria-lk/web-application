import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// import logo from '../../assets/eu-logo.png';
import axios from 'axios';
import { Alert, AlertTitle } from '@material-ui/lab';
// import UserProfile from '../../model/UserProfile';
// import {TitleComponent} from '../common/Title'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Euphoria
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const styles=theme=>({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});



class CounsellorSignIn extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      error:'',
      success:false
    }
  }
   
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }

  handleClick=(e)=>{
    e.preventDefault();
    const body={
      email:this.state.email,
      password:this.state.password
    }
    axios.post('http://localhost:5001/api/v1/counsellor-service/counsellor/login',JSON.stringify(body),{headers: {
        'Content-Type': 'application/json',
      }})
        .then((res)=>{
          console.log(res);
          if(res.data.message && res.status === 200){
            this.setState({
              error:res.data
            })
          }else{
            this.setState({
              success:true,
              error:false
            })
            localStorage.setItem("counselor_email",res.data.counselor_profile.email);
            localStorage.setItem("counselor_image",res.data.counselor_profile.image);
            setTimeout(() => {
              window.location.replace('/counselor/home');
            }, 2000);

          }

        }).catch(err=>{
      this.setState({
        error:{
          message:err
        }
      })

    })
  }

  render(){
      const {classes}=this.props;
      return(
        
        <Container style={{backgroundcolor:'white'}} component="main" maxWidth="xs">
              {/*<TitleComponent title="Sign In | User" />*/}
              <CssBaseline />
               {this.state.error  &&
          <Alert onClose={() => {
                this.setState({
                     error:false
                 })
            }} severity= "error"
               
        >
                <AlertTitle>Error</AlertTitle>
                <strong>{this.state.error.message}</strong>
            </Alert>
            }
            {this.state.success  && 
            <Alert  severity="success"
                onClose={() => {
                this.setState({
                     success:false
                 })
            }}>
            <AlertTitle>Success</AlertTitle>
             <strong>LoggedIn  successfully!</strong>
            </Alert>
            }
              <div className={classes.paper}>
                
                <Avatar alt="logo" src={'/euphoria-v2-art.png'} style={{width:'150px'}} className={classes.bigAvatar} /> <h2>Sign In | Counsellor</h2>
               
                <form className={classes.form} noValidate onSubmit={this.handleClick} >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={this.handleChange}

                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button

                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.handleClick}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/counsellor/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
              <Box mt={8}>
                <Copyright />
              </Box>
            </Container>
      )


  }

}
CounsellorSignIn.propTypes={
  classes:PropTypes.object.isRequired,
};
export default withStyles(styles)(CounsellorSignIn);
