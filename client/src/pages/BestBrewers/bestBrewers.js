import React, {Component} from "react";
import {Grid, Col, Row} from 'react-bootstrap';
import FollowingCard from "../../components/FollowingCard";
import API from "../../utils/usersAPI"
import {Grid} from 'react-bootstrap-grid';
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

/* utilizing map for userArr */
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
            {this.state.userArr.map((user, i) =>
           <FollowingCard key = {`brewerCard${i}`} user = {user} />
          )}
        </Col>
       </Row>
      </Grid>
     </div>
    )
  }
};

export default BestBrewers;