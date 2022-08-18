// install axios 'npm install axios'
import axios from 'axios';

export default{
    // here this code will checkUsername utilizing the axios.get method instead of the fetch method
    checkUsername: username => 
      axios.get(`/api/login/check/${username}`),

    // here this code will login in the user credentials using axios.get instead of the fetch method
    checkLogin: (username, password) =>
      axios.get(`/api/login/${username}/${password}`)
};

//
// using Axios instead of the fetch method
 // here is why I decided to use the Axios method to the P3: Axios: Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser
//   and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses
//    and enables client-side protection against XSRF.  It also has the ability to cancel requests. 