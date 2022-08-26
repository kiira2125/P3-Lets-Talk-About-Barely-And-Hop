import React, {Component} from "react";
import {Grid, col, Row} from 'react-bootstrap';
import FollowingCard from "../../components/FollowingCard";
import API from "../../utils/userAPI";
//import './BestBrewers.css';

class BestBrewers extends Component{

  state = {
    userArr: [],
  }

  componentDidMount(){
    this.getsUsers();
  }

  getUsers = () => {
    API.getUsers() 
    .then(res => {
      this.setState({
        userArr: res.data
      });

    })
     .catch(err => err);
  }
} 

render(){
    return(
     <div>
      <Grid>
       <Row>
        <Col xs={12}>
         <h2 className = 'brewerHeader'> Best Brewers </h2>
        </Col>
       </Row>
       <Row>
        <Col xs={12}>
        /* utilizing map for userArr */
          {this.state.userArr.map((user, i) =>
           <FollowingCard key = {`brewerCardName${i}`} user = {user} />
          )};
        </Col>
       </Row>
      </Grid>
     </div>
    )
};

export default BestBrewers;