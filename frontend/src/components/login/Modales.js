import React, { Component } from 'react';
import Axios from 'axios';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
export class Exitosa extends Component{   
    render(){
        return(
<Dialog
        //descripcion
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            open={true}
            onClose={this.handleClose}
          >
            <DialogTitle id="alert-dialog-title">Inicio de Sesion Exitosa</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Matricula y Rol
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={e=>{this.props.cerrar()}} color="primary">  
                Cerrar
              </Button>
            </DialogActions>
        </Dialog>

        )
    }
}
export class NoExitosa extends Component{   
    render(){
        return(
<Dialog
        //descripcion
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            open={true}
            onClose={this.handleClose}
          >
            <DialogTitle id="alert-dialog-title">Inicio de Sesion NoExitosa</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Matricula y Rol
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={e=>{this.props.cerrar()}} color="primary">  
                Cerrar
              </Button>
            </DialogActions>
        </Dialog>

        )
    }
}
export class Registro extends Component{   
    onSubmit = async (e) => {
        e.preventDefault();
        let matricula = document.getElementById('matriok').value;
        let contraseña = document.getElementById('contraok').value;
       const res = await Axios.post('http://localhost:4000/modulo/Alumnos/', {
            matricula,
            contraseña
          });
          console.log(res)
          if(res.data ==="guardado"){
console.log("Exitoso");
this.props.cerrar()
          }
          else{
              console.log("No se logro Guardar");
          }  
          
        }
      render(){
        return(
          <Dialog
          //Agregar
              aria-labelledby="alert-dialog-title1"
              aria-describedby="alert-dialog-description1"
              open={true}
              onClose={this.handleClose}
            >
              <DialogTitle id="alert-dialog-title1">{"Nueva Palabra"}</DialogTitle>
              <DialogContent id="alert-dialog-description1">
                  <form autoComplete="off" className="wid" id="CreateForm" onSubmit={this.onSubmit}>
                    <TextField  
                      label="Matricula"
                      id="matriok" 
                      variant="outlined"
                      fullWidth 
                    /><br/><br/>
                    <TextField  
                      label="Contraseña"
                      id="contraok" 
                      variant="outlined"
                      fullWidth 
                    /><br/><br/>
                  </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.props.cerrar} color="primary">
                  Cerrar
                </Button>
                <Button type="submit" form="CreateForm" color="primary">
                  Guardar
                </Button>
              </DialogActions>
          </Dialog>
    
        )
      }
}