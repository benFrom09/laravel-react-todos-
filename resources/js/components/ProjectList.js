import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Project from './Project';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects:[],
        }
    }
    componentDidMount(){
       axios.get("/api/projects").then(response => { this.setState({projects:response.data})})

    }
    render() {
        const {projects} = this.state;
        return (


                <ul className="list-group">
                    {projects.map(project => {
                        return (<li key={project.id}><Project project={project} /></li>);
                    })}
                </ul>

        )
    }
}
