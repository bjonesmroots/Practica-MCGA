import React from 'react';
import Productos from './productos/index'
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
          <Route exact path="/" component={Productos}>
            
          </Route>
          <Route exact path="/formulario" component={Formulario}>

          </Route>
          <Route exact path="/formulario/:id/:nombre/:descripcion/:precio" component={Formulario}>

          </Route>
          <Route path="*" component={Productos}>
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
