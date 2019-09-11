import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { Button } from './Buttons';

export default class ProjectForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            description:'',
            contributors:'',
        }
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form >
                        <div className="form-group">
                            <label htmlFor="name">Nom du projet:</label>
                            <input onChange={(e)=>this.handleChange(e)} id="name" type="text" name="name" value={this.state.name} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description du projet:</label>
                            <textarea onChange={(e)=>this.handleChange(e)} id="description" name="description" value={this.state.description}/>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <label htmlFor="start">Début:</label>
                                <input className="form-control" id="start" type="date" name="start"/>
                            </div>
                            <div className="col form-group">
                                <label htmlFor="end">Fin:</label>
                                <input className="form-control" id="end" type="date" name="end"/>
                            </div>
                        </div>
                        <label htmlFor="participants">Participants:</label>
                        <select  name="contributors"  value={this.state.contributors} onChange={(e)=>this.handleChange(e)} id="participants" className="form-control">
                            <option value="one">personne1</option>
                            <option value="two">personne2</option>
                        </select>
                        <div className="py-4">
                            <Link to="/person/add">Ajouter une personne</Link>
                        </div>
                        <div>Choisir une couleur:</div>
                        <div className="d-flex py-2">
                            {this.props.colors.map((c,i) => {
                                return <div title={c} key={i + 1} className="color" style={{background:c}}></div>
                            })}
                        </div>
                        <div className="form-group mt-4">
                            <Button onClick={(e)=>this.onSubmit(e)}>Envoyer</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
