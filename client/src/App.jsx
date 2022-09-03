import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import SingUp, { Login } from './components/SignUp/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { atom } from 'jotai'
import AddRecipe from './components/Blog/Blog'
//import ViewRecipe from './components/ViewRecipe'
//import RecipeForm from './components/RecipeForm'
export const userAtom = atom(null)

function App() {
  return (<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SingUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newRecipe" element={<AddRecipe />} />
      {/*<Route path="recipeForm" element={<RecipeForm />} />*/}
    </Routes>
    </BrowserRouter>)
}

export default App
