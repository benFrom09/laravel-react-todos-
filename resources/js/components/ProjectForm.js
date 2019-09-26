import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { Button } from './Buttons';
import moment from 'moment';
import {Checker} from '../helpers/helpers';
import axios from 'axios';
import FormError from './FormError';

export default class ProjectForm extends Component {
    constructor(props){
        super(props);
        this.state={
           project:{
               name:'',
               description:'',
               color:'#B200FF',
               start_date:'',
               end_date:'',
               completed:0
           },
           name:false,
           errors:"",
           btn:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }
    handleChange(e){
        e.persist();

        if(e.target.name === 'name') {
            if(e.target.value !== '' && e.target.value.length > 3){
                if(Checker.isAlphaNum(e.target.value)) {
                    this.setState({error:""})
                    this.setState({btn:true});
                } else {
                    this.setState({error:"Utiliser uniquement des caractères alphanumériques (@ et _ sont autorisés)"});
                }
            }
            else {
                this.setState({error:"Le nom du projet doit contenir au moins 4 caractères alphanumeriques (@ et _ sont autorisés)"});
                this.setState({btn:false});
            }
        }
        this.setState((state,props)=>{
            return {
                project:{...this.state.project,[e.target.name]:e.target.value}
            }
        });
    }
    onSubmit(e){
        e.preventDefault();
        axios.post('api/project/store',this.state.project).then(response=>{
            if(response.data[1].response ===true) {
                let projectId = response.data[2].last_insert_id;

                location = `/project/${projectId}`;
            }
        });
    }
    handleColorChange(e){
        e.persist();
        this.setState({project:{...this.state.project,color:e.target.title}});
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form >
                        <div className="form-group">
                            <label htmlFor="name">Nom du projet:</label>
                            <input onChange={(e)=>this.handleChange(e)} id="name" type="text" name="name" value={this.state.project.name} className="form-control"/>
                            {this.state.error?<FormError error={this.state.error}/>:null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description du projet:</label>
                            <textarea onChange={(e)=>this.handleChange(e)} id="description" name="description" value={this.state.project.description}/>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <label htmlFor="start_date">Début:</label>
                                <input onChange={(e)=>this.handleChange(e)} className="form-control" id="start_date"
                                type="date" name="start_date" value={this.state.project.start_date}/>
                            </div>
                            <div className="col form-group">
                                <label htmlFor="end_date">Fin:</label>
                                <input onChange={(e)=>this.handleChange(e)} className="form-control" id="end_date"
                                 type="date" name="end_date" value={this.state.project.end_date}/>
                            </div>
                        </div>
                        <div className="py-4">
                            <Link to="/person/add">Ajouter une personne</Link>
                        </div>
                        <div>Choisir une couleur:</div>
                        <div className="d-flex py-2">
                            {this.props.colors.map((color,i) => {
                                return <div title={color} key={i + 1} className="color" style={{background:color}}
                                onClick={(e)=>this.handleColorChange(e)}></div>
                            })}
                        </div>
                        <div className="form-group mt-4">
                            <Button enabled={this.state.btn} onClick={(e)=>this.onSubmit(e)}>Envoyer</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
