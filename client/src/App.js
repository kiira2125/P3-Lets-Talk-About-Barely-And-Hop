import React from 'react';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
//import Register from './components/Register';
import Profile from './pages/Profile';
import ViewAllRecipes from './pages/ViewAllRecipes';
import BestBrewers from './pages/BestBrewers'
import ViewRecipe from './pages/ViewRecipe';
import AddRecipe from './pages/AddRecipe';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';


const App = () => (
  <div>
    <Nav />
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/recipes/new' component={AddRecipe} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/recipes' component={ViewAllRecipes} />
          <Route exact path='/brewers' component={BestBrewers} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/recipes/:id' component={ViewRecipe} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>

  );
export default App;

