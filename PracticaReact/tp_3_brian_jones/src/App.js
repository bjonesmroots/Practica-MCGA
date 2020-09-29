import React from 'react';
import Home from './home/home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './app.module.css';
import Counters from './counters/counters';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}>
            
          </Route>
          <Route exact path="/counters" component={Counters}>

          </Route>
          <Route path="*" component={Home}>
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
