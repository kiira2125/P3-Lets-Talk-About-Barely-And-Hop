import React from "react";
import { Button, Container, Col, Row } from 'react-bootstrap';
import Wrapper from '../Wrapper';
import './AddRecipeButton.css';

const AddRecipeButton = props => {
    const loggedIn = sessionStorage.getItem('loggedIn');
    const brewer = sessionStorage.getItem('userID');
    
    if(loggedIn && props.id === brewer){
        return (
            <Container>
              <Row>
                <Wrapper>
                  <Col xs={0} sm={3} />
                  <Col xs={12} sm={6}>
                  <Button id='AddRecipeButton' href={'/recipes/new'} bsSize='large' block> Add Your Recipe! </Button>                            
                    </Col>
                    <Col xs={0} sm={3} />
                    </Wrapper>
                </Row>
            </Container>
        )
    }

    return ''

}

export default AddRecipeButton;