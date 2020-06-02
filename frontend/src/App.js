import React from 'react';
import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
import './App.css';
import NavMaestro from './components/Maestro/Nav-Maestro'

import NavAlumno from './components/Alumno/Nav-Alumno'
import NavAdministrador from './components/Administrador/Nav-Administrador'
import Login from './components/login/Login'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Maestro" exact component={NavMaestro} />
        <Route path="/Alumno" exact component={NavAlumno} />
        <Route path="/Administrador" exact component={NavAdministrador} />
        <Route path="/" exact component={Login} />
        
      </Switch>
    </Router>
  );
}

export default App;
