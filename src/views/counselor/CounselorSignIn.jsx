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
import logo from '../../assets/eu-logo.png';
import axios from 'axios';
import {TitleComponent} from '../../components/common/Title'
import './CounselorSignIn'

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
    width: '100%', 
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



class CounselorSignIn extends Component{
  constructor(props){
    super(props);
    this.state={
      'email':'',
      'password':''
    }
  }
   
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  handleClick=(e)=>{
    e.preventDefault();
    console.log("redirect");
    
    axios.post('',JSON.stringify(this.state),{headers: {
        'Content-Type': 'application/json',
    }})
    .then((res)=>{
         console.log(res.data);
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
        window.location.replace('/counselor/homepage')
    }).catch(err=>{
      alert("Invalid combination of username and password");
      this.setState({"email":'',"password":''});

    })
    

  }
  render(){
      const {classes}=this.props;
      return(
        <Grid id="rootContainer" >

        <Container component="main" maxWidth="xs">
              <TitleComponent title="Sign In | Counselor" />
              <CssBaseline />
              <div className={classes.paper}>
                
                <Avatar alt="logo" src={logo} className={classes.bigAvatar} /> <h2>Sign In | Counselor</h2>
               
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
                      <Link href="/counselor/signup" variant="body2">
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
            </Grid>
      )


  }

}
CounselorSignIn.propTypes={
  classes:PropTypes.object.isRequired,
};
export default withStyles(styles)(CounselorSignIn);
