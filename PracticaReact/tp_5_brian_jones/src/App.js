import React from 'react';
import Usuarios from './usuarios/index'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './app.module.css';
import Formulario from './formulario/index';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Usuarios}>
            
          </Route>
          <Route exact path="/formulario" component={Formulario}>

          </Route>
          <Route path="*" component={Usuarios}>
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
