// import React, { Component } from "react";
// import API from '../../utils/recipeAPI';
// import Container from 'react-bootstrap/lib/Container';
// import Col from 'react-bootstrap/lib/Col';
// import Row from 'react-bootstrap/lib/Row';
// import RecipeCard from '../RecipeCard';
// import RecipeCard from "./RecipeBoard.css";

// class RecipeBoard extends Component {
//  state ={
//     recipes: []
// }
//  componentDidMount() {
//     this.getRecipes();
//  }

//  getRecipes = () =>{
//   API.getRecipes()
//    .then(res => {
//     this.setState({
//      recipes: res.data
//      })
//    })
//    .catch (err => err);
//  }

// render() {
//     return(
//       <div className ="recipeBoard">
//        <Container>
//         <Row>
//           <Col xs = {12}>
//            <h2 className = 'recipeHeader'> Best Recipes #🍻 </h2>
//           </Col>
//         </Row>
//         /* Here going to map for the recipe */
//          {this.state.recipes.map(recipe => (
//           <Row Key = {recipe._id}>
//            <Col sm = {12} md = {12}> 
//              <RecipeCard 
//                id = {recipe._id}
//                name = {recipe.name}
//                style = {recipe.style}
//                abv = {recipe.specs.abv}
//                batchSize = {recipe.specs.batch.size}
//                batchUnits = {recipe.specs.batch.units}
//                ibu = {recipe.specs.ibu}
//                fg = {recipe.specs.fg}
//                brewer = {recipe.brewer.username}
//                brewerFirstName = {recipe.brewer.first}
//                brewerLastName = {recipe.brewer.last}
//                description = {recipe.description}
//                />
//              </Col>
//             </Row>
//           ))}
//        </Container>
//      </div>
//     )
//   }
// }

// export default RecipeBoard;