import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './SecondaryNav.css'

const SecondaryNav = props => {
    return(
     <Container className = 'secondaryNav'>
      <Row className = 'secondaryNavRow'>
        <Col xsHidden>
          <div>
          <a onClick={() => props.handleComponentChange('pinRecord')}><p className='secondaryNavText'>Overview</p></a>
          <a onClick={() => props.handleComponentChange('following')}><p className='secondaryNavText'>Following</p></a>
          <a onClick={() => props.handleComponentChange('followers')}><p className='secondaryNavText'>Followers</p></a>
          <a onClick={() => props.handleComponentChange('likes')}><p className='secondaryNavText'>Likes</p></a>
          
          <a onClick={() => props.handleComponentChange('recipes')}><p className='secondaryNavText'>Recipes</p></a>
          </div>
        </Col>
        <Col smHidden mdHidden lgHidden>
          <div>
          <a onClick={() => props.handleComponentChange('pinnedRec')}>
          <p className='secondaryNavText secondaryNavVert'>Overview</p>
          </a>
          <hr/>
          <a onClick={() => props.handleComponentChange('following')}>
          <p className='secondaryNavText secondaryNavVert'>Following</p>
          </a>
          <hr/>                        
          <a onClick={() => props.handleComponentChange('followers')}>
          <p className='secondaryNavText secondaryNavVert'>Followers</p>
          </a>
          <hr/>                        
          <a onClick={() => props.handleComponentChange('likes')}>
          <p className='secondaryNavText secondaryNavVert'>Likes</p>
          </a>
          <hr/>                        
          <a onClick={() => props.handleComponentChange('recipes')}>
          <p className='secondaryNavText secondaryNavVert'>Recipes</p>
          </a>
        </div>
      </Col>
    </Row>
  </Container>
    )
}

export default SecondaryNav;