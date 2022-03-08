import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Nav/Navbar';
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Blog from './components/Blog/Blog'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />  
        
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/blogs">
          <Blog />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
