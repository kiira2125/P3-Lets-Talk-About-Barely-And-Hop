import React, { Component } from 'react';
import API from '../../utils/recipeAPI';
import userAPI from '../../utils/userAPI';
import { Col, Row } from 'react-bootstrap';
import LikeBtn from './../LikeBtn'
import Hop from './Hop';
import Malt from './Malt';
//import './FullRecipe.css';

class FullRecipe extends Component{
    state = {
        id: " ",
        recipe:{},
        likes: '',
        brewer: '',
        brewerId: '',
        specs: {},
        batch: {},
        base: [],
        speciality:[],
        hops: [],
        yeast: {},
        ShowAlert: false,
        alertMessage: ''
    }


 getRecipe = id =>{
    API.getRecipe(id)
     .then(res => {
        this.setState({
            id:res.data._id,
            likes: parseFloat(res.data.likes),
            brewer: `${res.data.brewer.name.first} ${res.data.brewer.name.last}`,
            brewerId: res.data.brewer.id,
            specs: res.data.specs,
            batch: res.data.specs.batch,
            hops: res.data.ingredients.hops,
            yeast: res.data.ingredients.yeast,
            misc: res.data.ingredients.misc,
            base: res.data.ingredients.malt.base,
            speciality: res.data.ingredients.malt.speciality,
         })
     })
    .catch(err => err);
 }

  handleLikeClick =() => {
    if(!sessionStorage.getItem('userID')){
      this.showAlertMessage('Please login your recipe here.');
    }
    else if(sessionStorage.getItem('userID') === this.state.brewerId){
      this.showsAlertMessage('You cannot click like on your own recipe, sorry.');   
    }
    else{
      this.addLikeToBrewer(this.state.id);
    }   
  }

  addLikeToBrewer = recipeID => {
    const userID = sessionStorage.getItem('usrID')
    userAPI.updateUser(userID,{$addToSet: {'social.favorites': [recipeID]}})
      .then(res => {
        if(res.data.update > 0) {
          API.updateRecipe(recipeID, {
           likes: this.state.likes + 1
          })
      .then(res => {
        this.setState({
          likes: res.data.likes
        })
        this.showAlertMessage('Cheers Mate!');
     })
        .catch(err => err);
    } else {
      this.showAlertMessage('You have already click "like" on this recipe');
   }
  })
    .catch(err => err);
  }

  showAlertMessage = message => {
    this.setSTate({
        showAlert: true,
        alertMessage: message
    })
  }

   render() {
    const recipe = this.state.recipe;
    const specs = this.state.specs;
    const batch = this.state.batch;

 return(
     <div className= "fullRecipe">
       <Row>
         <Col xs={15} className= "fullRecipeHeader">
            <h1> Recipe: {recipe.name}</h1>
            <h2> Type: {recipe.style}</h2>
            <h2> Total Likes: {this.states.likes}</h2>
            <h2> Brewer: {this.state.brewer}</h2>
            <LikeBtn class= "fullRecipeHeader"
              id={this.state.id}
              brewerId={this.state.brewerId}
              likes={recipe.likes}
              addLike={this.handleLikeClick}
              show={this.state.showAlert}
              message={this.state.alertMessage}
            />
         </Col>
       </Row>
/* change the xs and md once your get full info on recipe */
       <Row>
         <Col xs={15} md={5}>
            <h3>Specs</h3>
              <p>
                 Batch: {batch.size} {batch.units} <br />
                 ABV: {specs.abv}% <br />
                 IBUs: {specs.ibu} <br />
                 OG: {specs.og} <br />
                 FG: {spec.fg} <br />
              </p>
          </Col>
          <Col xs={15} md={8}>
            <h3> Description: </h3>
            <p> {recipe.description}</p>
           </Col>
       </Row>
       <Row>
          <Col xs={12}>
            <h3> Ingredients: </h3>
          </Col>
       </Row>
       <Row>
          <Col sm={12} md={2}>
            <h4> Hops:</h4>
             {this.state.hops.map((hop, i) =>( 
                <Hop key={`hops${i}`} name={hops.name} type={hop.type} alpha={hop.alpha}
                 amount={hop.amount} units={hop.units} addition={hop.addition}/>
             ))}
          </Col>
          <Col sm={12} md={2}>
            <h4> Base Malt: </h4>
            {this.state.base.map((malt, i)=>(
             <Hop key={`base-${i}`} name={malt.name} type={malt.amount} units={malt.units}/>
            ))}
            <br/>
            <h4> Speciality Malt: </h4>
            {this.state.speciality.map((malt, i) => (
                <Malt Key={`speciality${1}`} name={malt.name} amount={malt.amount} units={malt.units}/>
            ))}
          </Col>
          <Col sm={12} md={2}>
            <h4> Yeast: </h4>
            <div className="yeast">
                <p> {this.state.yeast.name} ({this.state.yeast.name}) </p>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <h4> Misc: </h4>
            <div className="mics" > 
            <p> {this.state.misc} </p>
            </div>
          </Col>
       </Row>
         <Row>
           <Col xs={15}>
            <h3> Directions: </h3>
             <p> {recipe.directions} </p>
           </Col> 
         </Row>
        </div>
   )
  }
}

export default FullRecipe;

 