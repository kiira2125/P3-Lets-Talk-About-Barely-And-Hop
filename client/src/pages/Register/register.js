import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBox, Button , Panel, Row, Col} from 'react-bootstrap';
import API from '../../utils/userAPI';
import Wrapper from '../../components/Wrapper';
import SuccessfulCard from '../../components/SuccessfulCard';
import Check from '../../utils/loginAPI';
import './Register.css';

const STATE = [ 'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];

class Register extends Component {
    state ={
        first: '',
        last: '',
        username: '',
        usernameMessage: '',
        password: '',
        email: '',
        emailMessage: '',
        phone: '',
        city: '',
        state: '',
        stateMessage: '',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpoqb1SIu0fZQeXWvVkHC0YrGupriaDlwxtA&usqp=CAU',
        isRegister: false
    };

};

handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name.trim();
    this.setState({
      [name]: value
    });
};

handleSubmit = event => {
    event.preventDefault();
    Check.checkUsername(
        this.state.username
    ).then(res => {
        if (res.data.username === this.state.username || this.state.username === '') {
            this.usernameDuplicate();
        }
        if (res.data.contact.email === this.state.email || this.state.email === '') {
            this.emailDuplicate();
        }
        if (this.state.state === '') {
            this.stateSelect();
        }
        if (this.state.state !== '') {
            this.stateReset();
        }
    }).catch(err => {
        this.postUser();
        return err;
    });
};

    // i need to code the handle method for duplicate....hmmm tricking it will be.

    usernameDuplicate = () => {
        this.setState({
            usernameMessage: 'Please enter a unique username O_o'
        });
    };

    emailDuplicate = () => {
        this.setState({
            emailMessage: 'Please enter a unique email O_o'
        });
    };

    stateSelect = () => {
        this.setState({
            stateMessage: 'Please select a state'
        });
    }; 

// this is the postUser method that will allow me this allows anyone to post without first logging in .
postUser = () => {
    API.saveUser({
        name: {
            first: this.state.first,
            last: this.state.last
        },
        username: this.state.username,
        contact: {
            email: this.state.email,
            phone: this.state.phone,
            city: this.state.city,
            state: this.state.state
        },
        password: this.state.password,
        image: this.state.image
    }).then(res => {
        this.setState({isRegistered: true})
    }).catch (err => err);

// Validations of the logging
firstValidation() {
    const length = this.state.first.length;
    if (length > 0) return 'success';
};

lastValidation() {
    const length = this.state.last.length;
    if (length > 0) return 'success';
};

usernameValidation() {
    const length = this.state.username.length;
    if (length > 3) return 'success';
};

passwordValidation() {
    const length = this.state.password.length;
    if (length < 1) return 'error';
    else if (length < 8) return 'warning';
    else if (length > 7) return 'success';
};

emailValidation() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(this.state.email)) return 'success';
};

phoneValidation() {
    if (/\d{3}-\d{3}-\d{4}/.test(this.state.phone)) return 'success';
};

render(){
 return(
    <div className = 'registerBackground'>
        
    </div>
 )
}