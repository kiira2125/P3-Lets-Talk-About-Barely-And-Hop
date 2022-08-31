import  React from 'react';
import {Col,} from 'react-bootstrap';

const LoginInput = props =>(
    <Col>
    <label className = 'LoggingLabel'>{props.name}:</label>
     <div 
      id={`login${props.name}`} 
      type={props.type}
      placeholder={props.name}
      value = {props.value}
      name={props.type}
      onChange={props.change} />
    </Col>
)

  export default LoginInput;