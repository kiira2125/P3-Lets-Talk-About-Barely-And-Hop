import React, { COmponent } from 'react';
import {Button, Overlay, Tooltip} from 'react=bootstrap';
import './likeBtn.css'


class LikeBtn extends Component{

    state={
        show: this.props.show,
        message: this.props.message
    }

    targe = null;

    componentDidUpdate(prevProps){
     if (this.props.show !== prevProps.show){
        this.setState
     }
    }
}