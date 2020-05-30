import React from 'react';
import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
import './App.css';
import Maestro from './components/Maestro/Maestro'
// import Alumno from './components/Alumno/Alumno'
import NavAlumno from './components/Alumno/Nav-Alumno'
import Administrador from './components/Administrador/Administrador'
import Login from './components/login/Login'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Maestro" exact component={Maestro} />
        <Route path="/Alumno" exact component={NavAlumno} />
        <Route path="/Administrador" exact component={Administrador} />
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
