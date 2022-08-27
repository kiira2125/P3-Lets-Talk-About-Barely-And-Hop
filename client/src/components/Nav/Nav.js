// import {Navbar, NavItem, Nav,} from 'react-bootstrap'; 
// import {IonIcon} from '@ionic/react';
// import {homeOutline,personOutline} from 'ionicons/icons';
// import './Nav.css';

// function Nav ()

//     state = {
//       loggedIn: sessionStorage.getItem('loggedIn'),
//       brewer: sessionStorage.getItem('userID'),
//       profileLink: '',
//       display:{display: 'none'}
//     };

//   componentWillMount(){
//     this.checkLogin();
//   }

//   checkLogin = () => {
//     if(this.state.loggedIn){
//       this.setupOutTab();
//       this.displayViewProfileLink();
//     } else {
//       this.setSignUpTab();
//     }
//   }

//   setLogOutTab = () => {
//     if(this.state.loggedIn){
//       this.setup.setLogOutTab();
//       this.displayViewProfileLink();
//     } else {
//       this.setSignUpTab();
//     }
//   }

//   setSignUpTab = () =>{
//     this.setState({
//         navTab: 'Sign UP',
//         onNavTabClick: this.handleSignUp
//     })
//   }

//   handleLogOut = () => {
//     sessionStorage.clear();
//     window.location.href = `/`;
//   }

//   handleSignUp = () => {
//     window.location.href =`/register`;
//   }

//   displayViewProfileLink = () => {
//     this.setState({
//      profileLink: `/profile/${this.state.brewer}`,
//      display: {display: 'inline'}
//     })
//   }

//   render(){
//     return(
//       <div>
//         <p>Hops are dope</p>
//         <ul style={{ display: 'flex' }}>
//           <li>Login</li>
//           <li>Signup</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Head;