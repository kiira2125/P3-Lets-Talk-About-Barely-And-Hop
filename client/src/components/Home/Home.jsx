
import { useState } from 'react'

let dummyRecipes = [
  {
    id: 1,
    title: 'Beer',
    description: 'A drink made from hops and barley',
    ingredients: 'Hops, Barley, Water, Yeast',
    instructions: 'Boil water, add hops and barley, let sit for 2 weeks',
  },
  {
    id: 2,
    title: 'Wine',
    description: 'A drink made from grapes',
    ingredients: 'Grapes, Water, Yeast',
    instructions: 'Boil water, add grapes, let sit for 2 weeks',
  },
]

function Home() {
  // Get the real recipes from the database in mongodb
  return (
    <div className="App">
      <h1>All Recipes</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {dummyRecipes.map((recipe) => (
          <div key={recipe.id} style={{ width: '30%', padding: '8px' }}>
            <div style={{ width: '100%', height: '200px', backgroundImage: `url(${recipe.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button>View Recipe</button>
          </div>
        ))}
      </div>
    </div>
  )

}

export default Home