import React from "react";
import { Grid, Col, Row, Jumbotron, Button } from 'react-bootstrap';
import './SignInAlert.css';

const SignInAlert = () => (
    <Grid className='noMatch'>
        <Row>
            <Col xs={12}>
             <Jumbotron className = 'jumbo'>
              <h1> Sorry you Hop'ed a bit too far O_o;</h1>
              <h2>
                Please Login to add your recipe!
              </h2>
              <Row>
                <Col col xs = {12} sm = {4}>
                    <p>
                      <Button href='/'bsStyle='primary'>Login</Button> 
                    </p>
                </Col>
                <Col>
                  <p>
                  <Button href='/register' bsStyle='primary'>Sign Up</Button>
                  </p>
                </Col>
              </Row>
             </Jumbotron>;
             </Col>
        </Row>
    </Grid>
)

export default SignInAlert;