import React, {component} from 'react';
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import { userAtom } from '../../App'
import {Col, Row, Button,InputGroup, HelpBlock} from 'react-bootstrap';
//import './RecipeForm.css'

const beerStyle = ['Ale', 'English IPA', 'American IPA', 'American Lager', 'Barrel-Aged Beer', 'Belgian IPA', 
'Belgian Golden Strong Ale', 'Belgian Triple', 'Black Ale', 'Blonde Ale', 'Brown Ale', 'Brown Porter', 
'California Common', 'Double IPA', 'English IPA', 'Canadian Lager','German Pilsner', 'Irish Dry Stout', 
'New England IPA', 'Oktoberfest', 'Pale Ale', 'Scotch Ale', 'Session IPA',]

class RecipeForm extends Component {
    state = {
        name: '',
        brewer: sessionStorage.getItem('userID'),
        style: beerStyles[0],
        description: '',
        directions: '',
        misc: '',
        yeast: '',
        hopsArr: [
            {
                name: '',
                type: 'pellets',
                alpha: '',
                amount: '',
                units: 'oz',
                addition: ''
            }
        ],

        baseMaltArr: [
            {
                name: '',
                amount: '',
                units: 'lbs'
            }
        ],

    errorMsg: ''
};

addRecipe = newRecipe => {
    API.saveRecipe(newRecipe)
    .then(res =>{
        this.addRecipe2Brewer(res.data._id);
        windows.location.href =`/profile/${this.state.brewer}`;
    })
     .catch(err => {
        this.handleSubmitError();
     });
 };

addRecipe2Brewer = recipeID => {
    userAPI.updateUser(this.state.brewer, {$push:{recipes:[recipeID]}})
    .then(res => {
        return 'success';
    })
     .catch (err => err);
};
handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
};

handleChangeFor = (propertyName, type, i) => (event) => {
    const ingredient = this.state[type];
    ingredient[i][propertyName] = event.target.value;
    this.setState({
        ingredient,
    });
}}        
