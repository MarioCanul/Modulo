import React, { Component } from 'react';
import Axios from 'axios';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
export default class CrearCupo extends Component{ 
  constructor(props){
    super(props)
  }  
 async CrearCupo(){
   console.log("Entra en la funcion")
    // const res = await Axios.post('http://localhost:4000/modulo/Alumnos/', {
            
    //       });
  }
    render(){
        return(
<Dialog
        //descripcion
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            open={true}
            onClose={this.handleClose}
          >
            <DialogTitle id="alert-dialog-title">Crear Cupo para este Curso</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Nivel : {this.props.data.Nivel_Curso} Salon : {this.props.data.Salon} <br></br>
                           Fecha de Inicio : {moment(this.props.data.Finicio).add(10, 'days').format('L')}  Horario : {this.props.data.Horario}<br></br>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={e=>{this.props.exit()}} color="primary">  
                Cerrar
              </Button> 
              <Button onClick={e=>{this.props.exit()}} color="primary">  
                Aceptar
              </Button>
            </DialogActions>
        </Dialog>

        )
    }
}