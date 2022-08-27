import React from 'react';
import {Panel, Row, Col, Button} from 'react-bootstrap';
import './SuccessfulCard.css';
import Wrapper from '../Wrapper';

const SuccessfulCard = () => (
  <Wrapper>
    <Panel className = 'successful panel'>
     <Wrapper>
       <Row>
         <h1 className = ' success title'><strong>Thank you for registering to our website blog ~_o!!</strong></h1><hr/>
         <h2 className = 'success-h2'> You have been register to our site, you may now login. Please click the icon button to return to the login page. </h2>
         <Col xs={0} md={4}/>
         <Col xs={12} md={4}>
          <Button className = 'successfulBtn' href = '/' bsSize = 'large' id = 'success-button'block > Login Page </Button> 
         </Col>
       </Row>
     </Wrapper>

    </Panel>
  </Wrapper>
);

export default SuccessCard;