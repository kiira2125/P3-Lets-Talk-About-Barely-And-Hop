// import React, {Component} from "react";
// import {Container, Col, Row} from 'react-bootstrap';
// //import {Container} from 'react-bootstrap-Container';
// import FollowingCard from "../../components/FollowingCard";
// import API from "../../utils/usersAPI"
// //import './BestBrewers.css';

// class BestBrewers extends Component{

//   state = {
//     userArr: [],
//   }

//   componentDidMount(){
//     this.getsUsers();
//   }

//   getUsers = () => {
//     API.getUsers() 
//     .then(res => {
//       this.setState({
//         userArr: res.data
//       });

//     })
//      .catch(err => err);
//   }

// /* utilizing map for userArr */
// render(){

//     return(
//      <div>
//       <Container>
//          <Row>
//           <Col xs={12}>
//             <h2 className = 'brewerHeader'> Best Brewers </h2>
//         </Col>
//       </Row>
//      <Row>
//         <Col xs={12}>
//             {this.state.userArr.map((user, i) =>
//            <FollowingCard key = {`brewerCard${i}`} user = {user} />
//           )}
//         </Col>
//        </Row>
//       </Container>
//      </div>
//     )
//   }
// };

// export default BestBrewers;