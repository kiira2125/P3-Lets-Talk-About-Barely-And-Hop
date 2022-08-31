import { useAtom } from 'jotai'
import { userAtom } from '../../state'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"

export function AddRecipe() {
  const navigation = useNavigate()
  const [user, setUser] = useAtom(userAtom)

  useEffect(() => {
    if (!user) {
      navigation('/login')
    }
  }, [user])


  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/users/recipes', {
      method: 'POST',
      body: JSON.stringify({
        name: e.target.name.value,
        beerType: e.target.type.value,
        description: e.target.description.value,
        ingredients: e.target.ingredients.value,
        instructions: e.target.instructions.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      
    })
    
    .then((res) => {
      console.log(res.status)
      if (res.status !== 200) {
        alert('Not valid input')
        return res.status
      } 
      return res.json() 
    })
    .then((data) => {
      if (data > 200) return
      console.log(data)
      setUser(data)
      navigation('/newrecipe')
    })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <h1>Add Recipe</h1>
      <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Recipe Name" />
        <input type="text" name="type" placeholder="Recipe Type" />
        <input type="text" name="description" placeholder="Recipe Description" />
        <input type="text" name="ingredients" placeholder="Recipe Ingredients" />
        <input type="text" name="instructions" placeholder="Recipe Instructions" />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );

  
}

export default AddRecipe;
