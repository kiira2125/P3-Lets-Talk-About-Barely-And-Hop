import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Singup, { Login } from './components/SignUp/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { AddRecipe } from './components/Blog/Blog'
//import ViewRecipe form './components/ViewRecipe'
function App() {
  return (<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newrecipe" element={<AddRecipe />} />
    </Routes>
    </BrowserRouter>)
}

export default App
