import React, { Component } from 'react';
import Axios from 'axios'
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import {CrearCurso,EliminarCurso,ModificarCurso} from './Modals'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import '../../../Assets/opcionCursos.css'
export default class OpcionCursos extends Component {
    constructor(props){
        super(props)
        this.handleClose=this.handleClose.bind(this);
        this.Registrar=this.Registrar.bind(this)
        this.getCursos=this.getCursos.bind(this)
        this.DeleteCurso=this.DeleteCurso.bind(this)
        this.EditCurso=this.EditCurso.bind(this)
        this.state={
            Data:[],
            EditCurso:false,
        DeleteCurso:false,
        Registrar:false,
        itemselect:null
        }
    }
    componentDidMount(){
      this.getCursos()
    }
    async getCursos(){
        const res = await Axios.get('http://localhost:4000/modulo/Administrador/')
        this.setState({
            Data:res.data
        })
          
    }
    EditCurso(parametro){
      this.setState({
        EditCurso:true,
        itemselect:parametro
      })
    }
    DeleteCurso(parametro){
      this.setState({
        DeleteCurso:true,
        itemselect:parametro
      })
    }
    Registrar(){
      this.setState({
        Registrar:true,
        
      })
    }
   
    handleClose(){
      this.setState({
        EditCurso:false,
        DeleteCurso:false,
        Registrar:false,
        
      })}
    render() {
        const { Data } = this.state;
    const dat = Data.map((d,index) =>(
      <TableRow key={index}>
          <TableCell component="th" align="center" scope="row">
          {d.Curso}
        </TableCell>
        <TableCell component="th" align="center" scope="row">
          {d.Nivel_Curso}
        </TableCell>
        <TableCell component="th" align="center" scope="row">
          {d.Salon}
        </TableCell>
        <TableCell component="th" align="center" scope="row">
          {d.CatidadPersonas}
        </TableCell>
        <TableCell component="th" align="center" scope="row">
          {d.Horario}
        </TableCell>
        <TableCell component="th" align="center" scope="row">
          {d.Maestro}
        </TableCell>
        <TableCell component="th" align="center" scope="row">
          {moment(d.Finicio).format('DD-MM-YYYY')}
        </TableCell>
        <TableCell component="th" align="center" scope="row">
          {moment(d.Ftermino).format('DD-MM-YYYY')}
        </TableCell>
        <TableCell align="right">
          <Button variant="contained" color="primary" onClick={ () => this.EditCurso(d) } >
              <EditIcon/>
          </Button>
        </TableCell>
        <TableCell align="right">
          <Button variant="contained" color="secondary" onClick={()=> this.DeleteCurso(d)}>
              <DeleteIcon/>
          </Button>
        </TableCell>
      </TableRow>
    ));
    var ModalR =this.state.Registrar == true ? <CrearCurso  cerrar={this.handleClose} cursos={this.getCursos}/> :'';
    var ModalE =this.state.EditCurso == true ? <ModificarCurso  cerrar={this.handleClose} cursos={this.getCursos} Data={this.state.itemselect}/> :'';
    var ModalEli =this.state.DeleteCurso == true ? <EliminarCurso  cerrar={this.handleClose} cursos={this.getCursos} Data={this.state.itemselect}/> :'';
       
        return (
<div className="container">
  {ModalR}
  {ModalEli}
  {ModalE}
    <div className="CursosAdd">
    <Button variant="contained" color="primary" onClick={this.Registrar}>
                  <AddIcon/>
              </Button>
    </div>
    <div className="tableCursos">
    <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Curso</TableCell>
                    <TableCell>Nivel</TableCell>
                    <TableCell>Salon</TableCell>
                    <TableCell>Cantidad de Personas</TableCell>
                    <TableCell>Horario</TableCell>
                    <TableCell>Maestro</TableCell>
                    <TableCell>Fecha de inicio</TableCell>
                    <TableCell>Fecha de Termino</TableCell>
                    
                    <TableCell align="right">Editar</TableCell>
                    <TableCell align="right">Eliminar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {dat}
                </TableBody>
              </Table>
            </TableContainer>
    </div>

</div>
           


        );
    }
}