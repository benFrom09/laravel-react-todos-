import React, { Component } from 'react'
import Axios from 'axios';
import Table from './Table';
import { Note } from './Note';
import ProjectUpdate from './ProjectUpdate';
import {Button} from './Buttons';
import moment from 'moment';
import {reverseDate} from '../helpers/helpers';
import Modal from './Modal';
export default class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            project:{},
            tasks:[],
        }
        this.onpenPreference = this.onpenPreference.bind(this);
        this.onProjectUpdate = this.onProjectUpdate.bind(this);

    }
    componentDidMount(){

        const projectId = this.props.match.params.id;
        Axios.get(`/api/project/${projectId}`).then(response => {
            let p = response.data;
            this.setState({project:response.data
            });
        });
    }
    onpenPreference(e){

    }

    onDeleteProject(e,projectId){
        e.preventDefault();
        Axios.delete(`/api/project/delete/${projectId}`).then(response =>{
            if(response.data) {
                location = `/projects`;
            }
        });

    }

    onProjectUpdate(project){
        console.log("update " + project.id);
        this.setState({project})
    }
    render() {
        let {name,description,start_date,end_date,color,completed,created_at,id} = this.state.project;
        console.log(this.props);
        const category = false;
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <div className="card-title d-flex justify-content-between">
                            <h2><i className="fas fa-circle" style={{color:color}}/> {name}</h2>
                            <div><span>statut:</span> {completed ? "archivé" : "en cours"}</div>
                            <Button enabled={true}
                            onClick={(e) => this.props.openModal(
                            <ProjectUpdate onProjectUpdate={this.onProjectUpdate}
                             colors={this.props.colors} project={this.state.project}/>,'Modifier le projet')}
                             className="p-icon">
                                Modifier
                            </Button>
                            <Button onClick={(e)=> this.props.openModal(
                            <div><p>Voulez vous continuer ?</p>
                            <div className="form-group mt-4">
                                <Button onClick={(e)=> this.onDeleteProject(e,id)} enabled={true}>Ok</Button>
                                </div></div>,"suppression du projet")} enabled={true}>Supprimer</Button>
                        </div>
                        <div><i className="fas fa-calendar-alt"/> du <span>{start_date}</span> au <span>{end_date}</span></div>
                    </div>
                    <div className="card-body">
                        <div className="info p-4">
                            <Table cells={{"catégorie":category?category:"Aucune",
                                            "début":start_date,
                                            "fin":end_date,
                                            "statut":completed?"archivé":"en cours",
                                            "date de création":created_at}}/>
                        </div>
                        <div className="">
                            <h4 className="text-capitalize">description:</h4>
                            <p>{description}</p>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="taskList p-4">
                                    <h4 className="pb-2">Taches <span>(0)</span></h4>
                                    <Note/>
                                </div>
                                <div className="eventList p-4">
                                    <h4 className="pb-2">Evenements<span>(0)</span></h4>
                                    <Note>

                                    </Note>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="notes p-4">
                                    <h4 className="pb-2">Notes:</h4>
                                    <Note><p className="p-4 lead">clickez-moi pour ecrire</p></Note>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer"></div>
                </div>
            </React.Fragment>
        )
    }
}
