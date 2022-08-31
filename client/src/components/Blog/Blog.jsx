import { useAtom } from 'jotai'
import { userAtom } from '../App'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"

export function AddRecipie() {
  const navigation = useNavigate()
  const [user, setUser] = useAtom(userAtom)

  useEffect(() => {
    if (!user) {
      navigation('/login')
    }
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    // fetch
  }
  return (
    <div>
      <h1>Add Recipe</h1>
      <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipe Name" />
        <input type="text" placeholder="Recipe Type" />
        <input type="text" placeholder="Recipe Description" />
        <input type="text" placeholder="Recipe Ingredients" />
        <input type="text" placeholder="Recipe Instructions" />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );

  
}
