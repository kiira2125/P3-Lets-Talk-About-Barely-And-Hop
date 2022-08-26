import React, {Component} from 'react';
import {NavBar, NavItem, Nav, Glyphicon} from 'react-bootstrap';
import './Nav.css';

class Head extends Component{
    state = {
      loggedIn: sessionSession.getItem('loggedIn'),
      brewer: sessionStorage.getItem('userID'),
      profileLink: '',
      display:{display: 'none'}
    };

  componentWillMount(){
    this.checkLogin();
  }

  checkLogin = () => {
    if(this.state.loggedIn){
      this.setupOutTab();
      this.displayViewProfileLink();
    } else {
      this.setSignUpTab();
    }
  }

  setLogOutTab = () => {
    if(this.state.loggedIn){
      this.setup.setLogOutTab();
      this.displayViewProfileLink();
    } else {
      this.setSignUpTab();
    }
  }

  setSignUpTab = () =>{
    this.setState({
        navTab: 'Sign UP',
        onNavTabClick: this.handleSignUp
    })
  }

  handleLogOut = () => {
    sessionStorage.clear();
    window.location.href = `/`;
  }

  handleSignUp = () => {
    window.location.href =`/register`;
  }

  displayViewProfileLink = () => {
    this.setState({
     profileLink: `/profile/${this.state.brewer}`,
     display: {display: 'inline'}
    })
  }

  render(){
    return(
    <Navbar collapseOnSelect>
     <Navbar.Header>
      <Navbar.Brand>
       <a className = 'navName' href='/'>Let's Talk About Barely and Hops!! O_o!</a>
       </Navbar.Brand>
       <Navbar.Toggle />
     </Navbar.Header>
     <Navbar.Collapse>
        <Nav pullRight>
          <NavItem className='navLinks' eventKey={1} href = '/'>
            <Glyphicon glyph = 'home'/>
          </NavItem>
          <NavItem className = 'navLinks' eventKey = {2} href = '/brewers'> Top Brewer </NavItem> 
          <NavItem className = 'navLinks' eventKey = {3} href = '/recipes'> Best Recipes </NavItem>
          <NavItem className = 'navLinks' style = {this.state.display} eventKey = {4} href = {this.state.profileLink}>
            <Glyphicon glyph = 'users'/>
          </NavItem>
          <NavItem className = 'navLinks' eventKey = {5} onClick = {this.state.onNavTabClick}> {this.state.navTab}</NavItem>
        </Nav>
     </Navbar.Collapse>
    </Navbar>

    );
  }
}

export default Head;