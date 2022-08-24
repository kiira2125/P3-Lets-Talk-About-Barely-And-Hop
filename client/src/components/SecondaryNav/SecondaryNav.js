import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import './SecondaryNav.css'

const SecondaryNav = props => {
    return(
     <Grid className = 'secondaryNav'>
      <Row className = 'secondaryNavRow'>
        <Col xsHidden>
          <div>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
          </div>
        </Col>
      </Row>
     </Grid>
    )
}