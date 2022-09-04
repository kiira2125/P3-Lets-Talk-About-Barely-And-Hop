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
              <p>4.0 lbs. (1.8 kg) American wheat malt
              3.0 lbs. (1.4 kg) American Pilsen malt
              2.0 lbs. (0.9 kg) American Vienna malt
              8 oz. (227 g) American crystal malt (10 °L)
              8 oz. (227 g) American CaraPils® malt
              4.25 AAU Mt. Hood hops (60 mins)
              (1.0 oz./28 g of 4.25% alpha acids)
              4.25 AAU Mt. Hood hops (20 mins)
              (1 oz./28 g of 4.25% alpha acids)
              1 oz. (28 g) Mt. Hood hops (5 mins)
              1 tsp. Irish moss (15 mins)
              1 tsp crushed coriander seed (5 mins)
              Fermentis SafBrew S -33 yeast
              0.75 cups corn sugar (for priming)</p>
              <h3>{recipe.name}</h3>
               <p>{recipe.description}</p>
              <p2>5.5 lbs. (2.5 kg) Briess wheat dry malt extract
              8 oz. (227 g) American CaraPils® malt
              8 oz (227 g) American 10 L crystal malt
              4.25 AAU Mt. Hood hops (60 mins)
              (1.0 oz./28 g of 4.25% alpha acids)
              4.25 AAU Mt. Hood hops (20 mins)
              (1 oz./28 g of 4.25% alpha acids)
              1 oz. (28 g) Mt. Hood hops (5 mins)
              1 tsp. Irish moss (15 mins)
              1 tsp crushed coriander seed (5 mins)
              Fermentis SafBrew S – 33 yeast
              0.75 cups corn sugar (for priming)</p2>
            <button>View Recipe</button>
          </div>
        ))}
      </div>
    </div>
  )

}

export default Home