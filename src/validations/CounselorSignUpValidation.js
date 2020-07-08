import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
export  function ValidateCounselorSignUp(data){
    console.log("coming to here");
    
    let errors = {};
   
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invlalid';
    }
    if(Validator.isEmpty(data.email)){
        errors.email = 'This field is required';
    }
    if(Validator.isEmpty(data.password)){
        errors.password = 'This field is required';
    }
    if(Validator.isEmpty(data.passwordConfirmation)){
            errors.passwordConfirmation = 'This field is required';
        }
    if(!Validator.equals(data.password,data.passwordConfirmation)){
        errors.passwordConfirmation = 'Passwords must match';
    }
    console.log(errors);
    return{
        errors,
        isValid:isEmpty(errors)
    }
}