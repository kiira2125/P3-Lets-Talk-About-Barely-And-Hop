// same code method using axios. to envolce the axios method simliar to fetch method

import axios from 'axios';

export default {
  // getting all recipes using getRecipes method and axios.get
  getRecipes: () => axios.get('/api/recipes'),
  // using getRecipe for getting userId
  getRecipe: id => axios.get(`/api/recipes/${id}`),
  // using updateRecipe method to update recipe and axios.put
  updateRecipe: (id, data) => axios.put(`/api/recipes/${id}`, data),
  // delete the recipes using deleteRecipe method and axios.delete
  deleteRecipe: id => axios.delete(`/api/recipes/${id}`),
 //posting ay new recipes using saveRecipe() and axios.post
  saveRecipe: recipeData => axios.post('/api/recipes', recipeData)
};