import React, { Component } from 'react';
import RecipeForm from './../../components/RecipeForm';
import SignInAlert from './../../components/SignInAlert';
import {Grid} from 'react-bootstrap-grid';

//import "./AddRecipe.css";

const AddRecipe = () => {
 let componentToRender = <RecipeForm />
  if(!sessionStorage.getItem('loggedIn')){
     componentToRender = <SignInAlert />
  }

    return (
     <div className = "addRecipeBackground">
        {componentToRender}
     </div>
    )
}

export default AddRecipe;