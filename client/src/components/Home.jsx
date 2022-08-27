import reactLogo from '../assets/react.svg'
import '../App.css'
import { useState } from 'react'

let dummyRecipies = [
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
  // Get the real recipies from the datbase in mongodb
  return (
    <div className="App">
      <h1>All Recipes</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {dummyRecipies.map((recipie) => (
          <div key={recipie.id} style={{ width: '30%', padding: '8px' }}>
            <div style={{ width: '100%', height: '200px', backgroundImage: `url(${recipie.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <h3>{recipie.title}</h3>
            <p>{recipie.description}</p>
            <button>View Recipe</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home