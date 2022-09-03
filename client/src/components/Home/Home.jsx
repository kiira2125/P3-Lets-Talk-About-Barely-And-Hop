import reactLogo from '../../../src/assets/react.svg'
import './Home.css'
import { useState, useEffect } from 'react'

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
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('/api/recipes')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setRecipes(data)
    })
  }, [])

  return (
    <div className="App">
      <h1>Welcome to Home Brewing</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {recipes?.map((recipe) => (
          <div key={recipe._id} style={{ width: '30%', padding: '8px' }}>
            {/* <div style={{ width: '100%', height: '200px', backgroundImage: `url(${recipe.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> */}
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button>View Recipe</button>
          </div>
        ))}
      </div>
    </div>
  )

}

export default Home