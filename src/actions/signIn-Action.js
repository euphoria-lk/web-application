const axios = require('axios');

export const signIn = (state) =>dispatch=>{
    console.log(state);
    
    return axios.post('',JSON.stringify(state),{headers: {
        'Content-Type': 'application/json',
    }})
   
}