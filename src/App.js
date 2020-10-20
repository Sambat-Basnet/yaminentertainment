import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// importing pages
import SingleMovie from './pages/SingleMovie'
import Home from './pages/Home'
import Genres from './pages/Genres'
import Help from './pages/Help'
import Pricing from './pages/Pricing'
function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={Home}/>
      <Route exact path="/movie" component={SingleMovie}/>
      <Route exact path="/genres" component={Genres}/>
      <Route exact path="/help" component={Help}/>
      <Route exact path="/pricing" component={Pricing}/>
    </div>
    </Router>
  );
}

export default App;
