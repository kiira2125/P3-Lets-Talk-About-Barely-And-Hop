import React from "react";
import { Col, FormControl } from 'react-bootstrap';

const LoginInput = props => (

    <Col>
        <label className='loginLabel'>{props.name}:</label>
        <FormControl 
            id={`login${props.name}`}
            type={props.type} 
            placeholder={props.name}
            value={props.value}
            name={props.type}
            onChange={props.change} 
        />
    </Col>
)

export default LoginInput;