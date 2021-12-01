import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import LikedCocktails from './pages/LikedCocktails';

//import components
import NavBar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="/favorites">
          <LikedCocktails />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
