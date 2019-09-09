import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Project from './Project';
import {Button} from './Buttons';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects:[],
            colors:this.props.color
        }
        this.handleColor = this.handleColor.bind(this);
    }
    componentDidMount(){
       axios.get("/api/projects").then(response => { this.setState({projects:response.data})})

    }
    handleColor(e) {
        this.toggleClass(e.target.parentNode.nextElementSibling,'none');
    }
    toggleClass(element,className) {
        if(element.classList.contains(className)) {
            element.classList.remove(className);
        }
        else {
            element.classList.add(className);
        }
    }
    render() {
        const {projects} = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title py-2">Mes projets</h5>
                    <div className="plist-btn-container">
                        <Button>par catégories</Button>
                        <Button>par couleurs</Button>
                        <Button>tous mes projets</Button>
                        <Button>par date</Button>
                        <Button>par status</Button>
                    </div>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {projects.map(project => {
                            return (<li className="list-group-item" key={project.id}><Project handleColor={this.handleColor} colors={this.state.colors} project={project} /></li>);
                        })}
                    </ul>
                </div>
            </div>

        )
    }
}
