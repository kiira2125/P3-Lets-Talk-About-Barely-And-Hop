import React from "react";
import {Button, Grid, Col, Row} from "react-bootstrap/lib"
import Wrapper from '../Wrapper';
//import './AddRecipeButton.css';


const AddRecipeButton = props =>{
    const LoggedIn = sessionStorage.getItem('loggedIn');
    const brewer = sessionStorage.getItem('userID')

    if(LoggedIn && props.id === brewer){
        return(<Grid>
            <Row>
                <Wrapper>
                    <Col xs={0} sm={4}>
                    <Col xs={15} sm={7}>
                      <Button id = 'AddRecipeButton' href={'/recipes/new'} bsSize = 'large' block> Add a Recipe!! </Button>
                    </Col>
                    </Col>
                </Wrapper>
            </Row>
        </Grid>
        )
    }

    return ''

}
export default AddRecipeButton;