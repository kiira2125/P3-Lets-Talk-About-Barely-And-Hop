import React, {Component} from "react";
import {Form, Row, Col, FormGroup, Button} from 'react-bootstrap';
import API from '../../../utils/loginAPI';
import LoginInput from './LoginInput';
import Wrapper from '../../../components/Wrapper';

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        message: ''
    };

 handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
 };

 handleSubmit = event =>{
    event.preventDefault();
    if(this.checkLoginFieldValid()){
      this.checkLoginCredentials();
    }
 }

 checkLoginFieldIsValid = () => {
    if (!this.state.username || !this.state.password){
        this.handleInvalidLogin('Please enter your username and password, please O_o!');
        return false;
    }
    return true;
 }

 checkLoginCredentials = () => {
    API.checkLogin(this.state.username, this.state.password)
    .then(res => {
      this.checkPassword(res.date);
    })
    .catch(err => { this.handleInvalidLogin("Username does not exit, please try again O_o!");
    });
 }

 checkPassword = response => {
  if(response.result){
   this.handleValidLogin(response.id);
  } else {
    this.handleInvalidLogin("This is an invalid username and password, please try again O_o!");
  }
 }

 handleValidLogin = id => {
   const userID = this.setSessionDate(id);
   window.location.href = `profile/${userID}`;
 }

 setSessionDate = id => {
  sessionStorage.setItem('userID', id);
  sessionStorage.setItem('loggedIn', true);
  return sessionStorage.getItem('userID');
 }

 handleInvalidLogin = message =>{
    this.setState({
      username: '',
      password: '',
      message: message
    })
 }

 render(){

  return(
   <Form>
    <Wrapper>
      <h2 className='loginTitle'> Start Connecting! </h2>
      <h5 className='text-center failedLogin'>{this.state.message}</h5>
      <FormGroup>
        <LoginInput name='Username' type='username'value= {this.state.username} change={this.handleInputChange}></LoginInput>
        <LoginInput name='Password' type='password'value= {this.state.password} change={this.handleInputChange}></LoginInput>
      </FormGroup>
    </Wrapper>
   </Form>
   )
 }
}

export default LoginForm;