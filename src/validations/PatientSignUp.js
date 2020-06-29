import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
    console.log("coming to here");
    
    let errors = {};
    if(Validator.isEmpty(data.username)){
        errors.username = 'This field is required';
    }
    if(Validator.isEmpty(data.email)){
        errors.email = 'This field is required';
    }
    if(Validator.isEmpty(data.password)){
        errors.password = 'This field is required';
    }
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invlalid';
    }
    console.log(errors);
    return{
        errors,
        isValid:isEmpty(errors)
    }
}