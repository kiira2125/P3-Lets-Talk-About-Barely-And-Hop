import React from "react";
import {Row, Col} from 'react-bootstrap';
import Wrapper from '../../components/Wrapper';
import LoginWell from'../../components/LoginWell';
import LandingSignUpBtn from '../../components/LandingSignUpBtn';
import 'LandingPage.css';

const LandingPage = () => {
  
 <div>
    <div className='landingBackground'>
      <Wrapper className='landingLogin'>
        <h1 className='landingTitle'>Barley legal Hops Blog </h1>
        <h2 className='landingCatch'>'Its always Barley-Hops Hour when you make it yourself O_o'</h2>
          <Row>
           <Col xs={0} md={2} lg={3} />
           <Col xs={12} md={8} lg={6}>
            <LoginWell />
           </Col>
        </Row>
      </Wrapper>
    </div>
</div>
};