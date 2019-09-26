import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { Button } from './Buttons';
import { Checker } from '../helpers/helpers';
import axios from 'axios';

export default class ProjectUpdate extends Component {
    constructor(props){
        super(props);
        this.state={
            project:this.props.project,
            enabled:false,
            error:{
                name:null,
                startDate:null,
                endDate:null
            }
        }
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.project !== this.state.project){
            //prevProps.onProjectUpdate(this.state.project);
        }
    }

    handleErrors(){

    }
    handleChange(e){
        let checker = new Checker();
        switch (e.target.name) {
            case "name":
                if(!checker.isAlphaNum(e.target.value)) {
                        this.setState({error:{name:checker.error.isAlphaNum}});
                }
                else {
                    this.setState({project:{...this.state.project,[e.target.name]:e.target.value},error:{name:null}});
                }
                break;
            case "description":
                    this.setState({project:{...this.state.project,[e.target.name]:e.target.value}});
                break;
            default:
                this.setState({project:{...this.state.project,[e.target.name]:e.target.value}});
                break;
        }


    }
    handleColorChange(color){
        this.setState({project:{...this.state.project,color:color}});
    }
    onSubmit(e){
        e.preventDefault();
        if(this.state.project.name.length < 5 ) {
            this.setState({error:"Le champs doit comporter au moins 5 caractères"});
            return;
        }
        this.update();
    }
    update(){
        const {id,name,description,color,start_date,end_date,completed} = this.state.project;
        let project = {
            "id":id,
            "name":name,
            "description":description,
            "completed":completed,
            "start_date":start_date,
            "end_date":end_date,
            "color":color
        };
        axios.put(`/api/project/update/${id}`,project).then(data => {
                console.log(data);
                this.props.onProjectUpdate(this.state.project);
        });
    }

    render() {
        let {name,description,updated_at,start_date,end_date,color,completed} = this.state.project;
        return (
            <div className="card">
                <div className="card-body">
                    <form >
                        <div className="form-group">
                            <label htmlFor="name">Nom du projet:</label>
                            <input onChange={(e)=>this.handleChange(e)} id="name" type="text" name="name" value={name} className="form-control"/>
                            <div className={this.state.error.name ? "alert-danger p-2 mt-2" : ""}>{this.state.error.name ? this.state.error.name: ""}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description du projet:</label>
                            <textarea onChange={(e)=>this.handleChange(e)} id="description" name="description" value={description}/>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <label htmlFor="start_date">Début:</label>
                                <input onChange={(e)=>this.handleChange(e)} className="form-control" id="start_date" type="date" name="start_date" value={start_date}/>
                                <div className={this.state.error.startDate ? "alert-danger p-2 mt-2" : ""}>{this.state.error.startDate ? this.state.error.startDate: ""}</div>
                                <label htmlFor="end_date">Fin:</label>
                                <input onChange={(e) =>this.handleChange(e)} className="form-control" id="end_date" type="date" name="end_date" value={end_date}/>
                                <div className={this.state.error.endDate ? "alert-danger p-2 mt-2" : ""}>{this.state.error.endDate ? this.state.error.endDate: ""}</div>
                            </div>
                        </div>
                        <div className="py-4">
                            <Link to="/person/add">Ajouter une personne</Link>
                        </div>
                        <div>modifier la couleur: <i className="fas fa-circle" title={color} style={{color:color}}/></div>
                        <div className="d-flex py-2">
                            {this.props.colors.map((color,i)=>{
                                return <div onClick={() => this.handleColorChange(color)} title={color} key={i + 1} className="color" style={{background:color}}></div>
                            })}
                        </div>
                        <div className="form-group mt-4">
                            <Button enabled={true} onClick={(e)=>this.onSubmit(e)}>Envoyer</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
