import React from "react";
import {Well, Row, Col} from'react-bootstrap';
import WellActionBtn from './WellActionBtn';
import LoginForm from './LoginForm';
import Wrapper from './Wrapper';

const LoginWell = () => {
    if (sessionStorage.getItem('loggedIn')) {
     return(
        <Well>
         <Wrapper>
          <h2 className='loginTitle'> What's your next style brewing going to be? 0_0 </h2>
           <Row>
            <Col xs={15} sm={5}>
              <WellActionBtn class='landingBtn' link='/recipes' name='Top Recipes'/>
            </Col> 
            <Col xs={15} sm={5}>
              <WellActionBtn class='landingBtn' link='/brewers' name='Top brewers'/> 
            </Col> 
          </Row>   
       </Wrapper>
    </Well>
     )
    }
    return(
        <Well>
            <LoginForm/>
        </Well>
    )
}

export default LoginWell;