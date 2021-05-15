import { React, useState } from 'react';
import { countContext } from "./context/countcontext.js";

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

function App() {
  const [context, setContext] = useState(0);
  //const [context, setContext] = useContext(countContext);

  return (
    <div className="App">
      <countContext.Provider value={[context, setContext]}>
        <Header/>
        <Nav/>
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/settings" component={Settings} />
            <Route path="/panel" component={Panel} />
            <Route path="/register" component={Register} />
            <Route exact path='/' render={ () => <Redirect to='/route1' /> } />
          </Switch>
        </Router>
      </countContext.Provider>
    </div>
  );
}
export default App;