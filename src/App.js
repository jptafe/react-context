import React from 'react';
import './App.css';

import About from './routes/about';
import Settings from './routes/settings';
import Panel from './routes/panel';
import Register from './routes/register';
import Home from './routes/home';

import Nav from './components/nav'
import Header from './components/header'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import CountContext from './context/countcontext'

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/panel">
            <Panel />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;