import Axios from 'axios';
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import '../../Assets/Login.css';
import '../../Cookies'
import Container from '@material-ui/core/Container';
import{Exitosa,NoExitosa,Registro} from './Modales'
import { BrowserRouter as Router } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Component } from 'react';
import { setCookie } from '../../Cookies';
export default class SignIn extends Component {
 constructor(props){
  super(props);
  this.handleClose=this.handleClose.bind(this);
  this.Signup=this.Signup.bind(this);
  this.link=this.link.bind(this);
  this.state={
    dataM:[],
    ItemSelect:null,
    SesionExitosa:false,
    SesionnoExitosa:false,
    Registrar:false,
    
  }
 }
 handleClose(){
  this.setState({
   
    SesionnoExitosa:false,
    Registrar:false,
    
  })
 }
  SignIn=async(e)=>{
    e.preventDefault();
  let matricula = document.getElementById("email").value
  let pass = document.getElementById("password").value
   const Administrador= await Axios.get('http://localhost:4000/modulo/Registro/login/'+matricula);
   if(Administrador.data[0]["contrasena"] === pass){
    this.setState({
      dataM:Administrador.data,
      SesionExitosa:true,
    })
    
   }
   else{
    this.setState({
      SesionnoExitosa:true,
    })
   }

  }
  Signup(){
    this.setState({
      Registrar:true
    });
  }
  link(){
    var rol = this.state.dataM[0]['rol'];
    var matricula = this.state.dataM[0]['matricula'];
switch(rol){
  case 'Administrador':
  setCookie('Cmatricula',matricula,1)
    console.log("Administrador")
    this.setState({
      SesionExitosa:false,
    });
    window.location='/Administrador/';
    break;
  case 'Alumno':
    setCookie('Cmatricula',matricula,1)
    console.log("Alumno")
    this.setState({
      SesionExitosa:false,
    });
    window.location='/Alumno/';
    break; 
  case 'Maestro':
    setCookie('Cmatricula',matricula,1)
    console.log("Mestro ")
    this.setState({
      SesionExitosa:false,
    });
    window.location='/Maestro/';
    break;
    default : return console.log("No hay Rol")   
}


  }

  render(){
    var modalRegis = this.state.Registrar === true ? <Registro cerrar={this.handleClose}/> :'';
    var modalExitosa = this.state.SesionExitosa === true ? <Exitosa cerrar={this.link}/>:'';
    var modalNoExitosa = this.state.SesionnoExitosa === true ? <NoExitosa cerrar={this.handleClose}/>:'';
  return (
    <Router>
      {modalRegis}
      {modalExitosa}
      {modalNoExitosa}
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
          {/* <img src={logo} alt="Logo" width="300px" /> */}
          <Typography variant="h4">
            Inicio de sesión
          </Typography>
        <form className="form" autoComplete="off">
          <TextField
          type="number"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Matricula"
            name="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Constraseña"
            type="password"
            id="password"
          />
         
          <Button
            type="button"
            variant="contained"
            color="primary"
          
            className="submit"
            onClick={this.SignIn}  
          >

            Iniciar

          </Button>
          <br></br>
          <Grid container>
            {/* <Grid item xs>
            <Button
            type="button"
            
            variant="contained"
            color="primary"
            className="submit"
            onClick={this.SignIn} >

              ¿Olvidaste tu contraseña?

              </Button>
            </Grid> */}
            <Grid item>
            <Button
            type="button"      
            variant="contained"
            color="primary"
            className="submit"
            onClick={this.Signup} >Registrase
            </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </Router>
  );
}
}