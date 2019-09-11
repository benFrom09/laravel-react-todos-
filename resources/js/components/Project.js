import React, { Component } from 'react'
import Axios from 'axios';

export default class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            project:{},
            tasks:[]
        }
    }
    componentDidMount(){
        const projectId = this.props.match.params.id;
        Axios.get(`/api/project/${projectId}`).then(response => {
            this.setState({project:response.data});
        });
    }
    render() {
        const {name,description,start_date,end_date,color,completed} = this.state.project
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <div className="card-title d-flex justify-content-between">
                            <h2><i className="fas fa-circle" style={{color:color}}/> {name}</h2>
                            <div><span>statut:</span> {completed ? "archivé" : "en cours"}</div>
                            <div className="p-icon">
                                <i title="préférences" className="fas fa-cog"/>
                            </div>
                        </div>
                        <div><i className="fas fa-calendar-alt"/> du <span>{start_date}</span> au <span>{end_date}</span></div>
                    </div>
                    <div className="card-body">

                    </div>
                    <div className="card-footer"></div>
                </div>
            </React.Fragment>
        )
    }
}
