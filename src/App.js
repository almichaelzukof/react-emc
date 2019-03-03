import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import Navigation from './components/Navigation';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          Edmonton Movie Club
        </Link>
      </header>
      <Navigation />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
