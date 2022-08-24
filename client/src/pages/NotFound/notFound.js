import React from "react";
import {Grid, Col, Row, Jumbotron, Button} from 'react-jumbotron';
import './NotFound.css'

const NotFound = () => (
  <Grid className = 'NotFound'>
   <Row>
    <Col xs = {12}>
     <Jumbotron className = 'jumbo'>
       <h1> 404 Page Not Found </h1>
       <h2> Go to homepage, you seem lost #😥  </h2>
        <p>
          <Button href = '/'bsStyle = 'primary'> Back to HomePage 🍺 </Button>
        </p>
      </Jumbotron>;
    </Col>
  </Row>
</Grid>
)

export default NotFound;