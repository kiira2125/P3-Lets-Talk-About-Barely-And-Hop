import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Wrapper from  '../Wrapper';
//import './FollowingCard.css';

const FollowingCard = props =>(
    <Wrapper> 
      <a href= {`/profile/${props.user._id}`}>
        <Grid className = 'followingCard'>
          <Row className = 'followingCardContent'>
            <Col className = 'followingCardPicture'xs={15} sm={5}>
                <image className = 'followPic' src={`${props.user.image}`} alt={`${props.user.username}ProfilePicture`}></image></Col>
                <Col className = 'followingCardName' xs={15} sm={5}>
                    <h2 className = 'followingCardFull followingCardCap'>{props.user.name.first}{props.user.name.last}</h2>
                    <p className = 'followingCardUsername followingCardOther'>{props.user.username}</p>
                </Col>
                <Col className = 'followingCardLocation' xs={15} sm={5}>
                    <p className = 'followingCardOther followingCardCap'>{props.user.contact.city}, {props.user.contact.state}</p>
                    <p className = 'followingCardOther'>{props.user.contact.email}</p>                    
                </Col>           
             </Row>
          </Grid>  
       </a>
    </Wrapper>
);