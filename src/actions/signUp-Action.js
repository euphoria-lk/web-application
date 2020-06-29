import axios from 'axios';


export function userSignUpRequest(userData){
    return dispatch=>{
        return axios.post('',JSON.stringify(userData),{headers: {
            'Content-Type': 'application/json',
        }})
        
;
    }
}