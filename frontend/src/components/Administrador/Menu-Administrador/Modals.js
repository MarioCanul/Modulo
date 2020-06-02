import React, { Component } from 'react';
import Axios from 'axios';
import moment from 'moment';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import InputLabel from '@material-ui/core/InputLabel';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import '../../../Assets/opcionCursos.css'

export class CrearCurso extends Component{  
    constructor(props){
        super(props)
        this.state={
            startDate: new Date(),
            endDate: new Date(),
            TimeDate:"",
            age:""
        }
    } 
    onSubmit = async (e) => {
        e.preventDefault();
        let Curso = this.state.age
        let Nivel = document.getElementById('nivelok').value;
        let Salon = document.getElementById('salonok').value;
        let Cantidad = document.getElementById('cantidadok').value;
        let Maestro = document.getElementById('maestrook').value;
        // var fechaI = moment(this.state.startDate).format('Do MMM YY');
        // var fechaT = moment(this.state.endDate).format('Do MMM YY');
        var hora = moment(this.state.TimeDate).format('hh:mm:ss');
        var fechaI = this.state.startDate;
        var fechaT = this.state.endDate;
        // var hora = this.state.TimeDate;
       const res = await Axios.post('http://localhost:4000/modulo/Administrador/', {
            Curso,
            Nivel,
            Salon,
            Cantidad ,
            Maestro,
            fechaI,
            fechaT,
            hora
          });
          console.log("Fecha de Inicio "+ fechaI+" Fecha de Termino "+fechaT+"  Hora "+hora)
          if(res.data ==="guardado"){
console.log("Exitoso");
this.props.cerrar();
this.props.cursos(e);
          }
          else{
              console.log("No se logro Guardar");
          }  
          
        }
      render(){
     
        return(
          <Dialog fullWidth
          
              aria-labelledby="alert-dialog-title1"
              aria-describedby="alert-dialog-description1"
              open={true}
              onClose={this.handleClose}
            >
              <DialogTitle id="alert-dialog-title1">{"Nueva Curso "}</DialogTitle>
              <DialogContent id="alert-dialog-description1">
                  <form autoComplete="off" className="wid" id="CreateForm" onSubmit={this.onSubmit}>
                  <InputLabel id="demo-simple-select-label">Tipo de Curso</InputLabel >
                    <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.age}
                    onChange={(e) => this.setState({age:e.target.value})}
                    >
                    <MenuItem value="Normal">Normal</MenuItem>
                    <MenuItem value="Verano">Verano</MenuItem>
                    <MenuItem value="Invierno">Invierno</MenuItem>
                    </Select><br/><br/>
                     <TextField 
                      type="number" 
                      label="Nivel del Curso"
                      id="nivelok" 
                      variant="outlined"
                      fullWidth 
                    /><br/><br/>
                     <TextField 
                      
                      label="Salon"
                      id="salonok" 
                      variant="outlined"
                      fullWidth 
                    /><br/><br/>
                     <TextField 
                     type="number" 
                      label="Cantidad de personas"
                      id="cantidadok" 
                      variant="outlined"
                      fullWidth 
                    /><br/><br/>
                     <TextField  
                      label="Maestro"
                      id="maestrook" 
                      variant="outlined"
                      fullWidth 
                    /><br/><br/>
                    <InputLabel  htmlFor="label2">Fecha de Inicio del Curso</InputLabel>
                    <DatePicker
                    id="label2"
                    className="Datepicker"
                    selected={this.state.startDate}
                    onChange={date => this.setState({startDate:date})}
                    selectsStart
                    dateFormat="dd-MM-yyyy"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                     />
                    <br/><br/>
                    <InputLabel  htmlFor="label">Fecha de Termino del Curso</InputLabel>
                     <DatePicker
                     className="Datepicker"
                    selected={this.state.endDate}
                    onChange={date => this.setState({endDate:date})}
                    selectsEnd
                    dateFormat="dd-MM-yyyy"
                    id="label2"
                    startDate={this.statestartDate}
                    endDate={this.state.endDate}
                    minDate={this.state.startDate}
                /><br/><br/>
                <InputLabel  htmlFor="label">Horario del Curso</InputLabel>
                <DatePicker
                className="Datepicker"
                selected={this.state.TimeDate}
                onChange={date => this.setState({TimeDate:date})}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                timeFormat="HH:mm"
                dateFormat="HH:mm"
                />
                    <br/><br/>
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
export class EliminarCurso extends Component{ 
   
    delete =() =>{
        // e.preventDefault();
        console.log(this.props.Data)
        var id = this.props.Data.Id_Curso;
        Axios.delete('http://localhost:4000/modulo/Administrador/'+id);  
        this.props.cerrar();
        this.props.cursos();
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
            <DialogTitle id="alert-dialog-title">Seguro que quieres Eliminar el Curso</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
               - La Eliminacion borrara el curso de la base de datos-
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={e=>{this.props.cerrar()}} color="primary">  
                Cerrar
              </Button>
              <Button onClick={this.delete} color="primary">
              Borrar
            </Button>
            </DialogActions>
        </Dialog>

        )
    }
}
export class ModificarCurso extends Component{  
    constructor(props){
        super(props)
        this.state={
          endDate:moment(this.props.Data.Ftermino).toDate() ,
          startDate:moment(this.props.Data.Finicio).toDate() ,
          
           TimeDate: new Date(`2011-07-14 ${this.props.Data.Horario}`),
          age:"",
          // Finicio:this.props.Data.Finicio,
          // Horario:this.props.Data.Horario,
          
         
            Curso:this.props.Data.Curso,
            Nivel_Curso:this.props.Data.Nivel_Curso,
            Salon:this.props.Data.Salon,
            CatidadPersonas:this.props.Data.CatidadPersonas,
            Maestro:this.props.Data.Maestro,
        }
    } 
    onSubmit = async (e) => {
        e.preventDefault();
        var id = this.props.Data.Id_Curso;
        let Curso = this.state.Curso
        let Nivel = this.state.Nivel_Curso
        let Salon = this.state.Salon
        let Cantidad = this.state.CatidadPersonas
        let Maestro = this.state.Maestro
        var fechaI =this.state.startDate
        var fechaT =this.state.endDate
        var hora =moment(this.state.TimeDate).format('hh:mm:ss');
       const res = await Axios.put('http://localhost:4000/modulo/Administrador/'+id, {
            Curso,
            Nivel,
            Salon,
            Cantidad ,
            Maestro,
            fechaI,
            fechaT,
            hora
          });
          console.log("Fecha de Inicio "+ fechaI+" Fecha de Termino "+fechaT+"  Hora "+hora)
          if(res.data ==="guardado"){
console.log("Exitoso");
this.props.cerrar();
this.props.cursos();
          }
          else{
              console.log("No se logro Guardar");
          }  
          
        }
      render(){
     
        return(
          <Dialog fullWidth
          
              aria-labelledby="alert-dialog-title1"
              aria-describedby="alert-dialog-description1"
              open={true}
              onClose={this.handleClose}
            >
              <DialogTitle id="alert-dialog-title1">{"Nueva Curso "}</DialogTitle>
              <DialogContent id="alert-dialog-description1">
                  <form autoComplete="off" className="wid" id="CreateForm" onSubmit={this.onSubmit}>
                  <InputLabel id="demo-simple-select-label">Tipo de Curso</InputLabel >
                    <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.Curso}
                    onChange={(e) => this.setState({Curso:e.target.value})}
                    >
                    <MenuItem value="Normal">Normal</MenuItem>
                    <MenuItem value="Verano">Verano</MenuItem>
                    <MenuItem value="Invierno">Invierno</MenuItem>
                    </Select><br/><br/>
                     <TextField 
                      type="number" 
                      label="Nivel del Curso"
                      id="nivelok" 
                      variant="outlined"
                      value={this.state.Nivel_Curso}
                      onChange={(e) => this.setState({Nivel_Curso:e.target.value})}
                      fullWidth 
                    /><br/><br/>
                     <TextField 
                       value={this.state.Salon}
                       onChange={(e) => this.setState({Salon:e.target.value})}
                      label="Salon"
                      id="salonok" 
                      variant="outlined"
                      fullWidth 
                    /><br/><br/>
                     <TextField 
                     value={this.state.CatidadPersonas}
                     onChange={(e) => this.setState({CatidadPersonas:e.target.value})}
                     type="number" 
                      label="Cantidad de personas"
                      id="cantidadok" 
                      variant="outlined"
                      fullWidth 
                    /><br/><br/>
                     <TextField  
                       value={this.state.Maestro}
                       onChange={(e) => this.setState({Maestro:e.target.value})}
                      label="Maestro"
                      id="maestrook" 
                      variant="outlined"
                      fullWidth 
                    /><br/><br/>
                     <InputLabel  >Fecha de Inicio del Curso Anterior {moment(this.state.Finicio).format('DD-MM-YYYY')}</InputLabel>
                     {/* <InputLabel  >Fecha de Inicio del Curso Anterior {this.state.startDate}</InputLabel> */}
                     <InputLabel  >Fecha de Inicio del Curso Anterior {this.state.Finicio}</InputLabel>
                    <InputLabel  htmlFor="label2">Fecha de Inicio del Curso</InputLabel>
                    <DatePicker
                    id="label2"
                    className="Datepicker"
                    // selected={moment(this.state.startDate).toDate()}
                    selected={this.state.startDate}
                    onChange={date => this.setState({startDate:date})}
                    selectsStart
                    dateFormat="dd-MM-yyyy"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                     />
                    <br/><br/>
                    <InputLabel  >Fecha de Termino del Curso Anterior {moment(this.state.Ftermino).format('DD-MM-YYYY')}</InputLabel>
                    <InputLabel  htmlFor="label">Fecha de Termino del Curso</InputLabel>
                     <DatePicker
                     className="Datepicker"
                
                    selected={this.state.endDate}
                    onChange={date => this.setState({endDate:date})}
                    selectsEnd
                    dateFormat="dd-MM-yyyy"
                    id="label2"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    minDate={this.state.startDate}
                /><br/><br/>
                {/* <InputLabel  >Hora de Inicio del Curso Anterior {(this.state.TimeDate)}</InputLabel> */}
                {/* <InputLabel  >Hora de Inicio del Curso Anterior {(this.state.vtest)}</InputLabel> */}
                <InputLabel  htmlFor="label">Horario del Curso</InputLabel>
                <DatePicker
                className="Datepicker"
                // selected={moment(this.state.Horario).toDate()}
                selected={this.state.TimeDate}
                onChange={date => this.setState({TimeDate:date})}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                timeFormat="HH:mm"
                dateFormat="HH:mm"
                // dateFormat="hh:mm:ss aa"
                />
                    <br/><br/>
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