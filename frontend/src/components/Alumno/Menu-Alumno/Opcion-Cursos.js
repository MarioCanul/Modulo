import React, { Component } from 'react'
import Axios from 'axios';
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import AssignmentIcon from '@material-ui/icons/Assignment';
export default class Cursos extends Component {
   
    state = {
        data: []
    }

    async componentDidMount() {
        this.getCursos();
    }

    getCursos = async () => {
        const res = await Axios.get('http://localhost:4000/modulo/Administrador/')
        this.setState({
            data: res.data
        });
    }

    deleteNote = async (noteId) => {
        await Axios.delete('http://localhost:4000/api/notes/' + noteId);
        this.getNotes();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.data.map(Curso => (
                        <div className="col-md-4 p-2" key={Curso.Id_Curso}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{Curso.Curso}</h5>
                                    <AssignmentIcon/>
                                    {/* <Link to={"/edit/" + Curso.Id_Curso} className="btn btn-secondary">
                                        <i className="material-icons">
                                            border_color</i>
                                    </Link> */}
                                </div>
                                <div className="card-body">
                                    <p>
                                       Nivel:{Curso.Nivel_Curso} Salon : {Curso.Salon}
                                    </p>
                                    <p>
                                        Maestro: {Curso.Maestro}
                                    </p>
                                    <p>
                                        Cupo: {Curso.CatidadPersonas}
                                    </p>
                                    <p>
                                        Fecha de Inicio: {format(Curso.Finicio)}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(Curso._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}