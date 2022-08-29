import Navbar from './components/Navbar'
import Home from './components/Home'
import Singup, { Login } from './components/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { atom } from 'jotai'
import { AddRecipie } from './components/Blog'
import ViewRecipe form './components/ViewRecipe'
export const userAtom = atom(null)

function App() {
  return (<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newrecipie" element={<AddRecipie />} />
    </Routes>
    </BrowserRouter>)
}

export default App
