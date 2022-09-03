import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row, Panel, Button} from 'react-bootstrap';

const RecipeCard = props =>{
<Wrapper>
    <Panel className="recipeCard">
     <div className="recipeCardPanelHeading">
     <Panel.Heading>
      <Panel.Title toggle>
        <h1>{props.name}</h1><h2>{props.style}</h2>
        <p>
          
          </p>
      </Panel.Title>
     </Panel.Heading>
     </div>
     <div className="panelCollapse">
      <Panel.Collapse>
        <Panel.Body>
          <div className="panelBody">
            <Row>
             <Col xs={12} md={12}>
              <h2>BeerBrewing: {props.FirstName} {props.LastName} - {props.brewer}</h2>
            </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h3> Description </h3>
                    <p className="recipeCardScript">{props.description}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Button className= 'recipeBtn' componentClass={Link} to= {"/recipes/" + props.id} size="large"> View Recipe O_o</Button>
                </Col>
            </Row>
          </div>
        </Panel.Body>
      </Panel.Collapse>
     </div>
    </Panel>
</Wrapper>
}

export default RecipeCard;