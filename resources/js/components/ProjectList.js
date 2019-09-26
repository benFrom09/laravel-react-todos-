import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ProjectListItem from './ProjectListItem';
import {Button} from './Buttons';
import Pagination from './Pagination';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors:this.props.colors,
            url:this.props.url,
            projects:[],
            arrayOfItems:[],
            propertyChanged:false
        }
        this.handleColor = this.handleColor.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }
    componentDidMount(){
        this.fetchData();
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.url !== this.state.url){
            this.fetchData();
        }
        if(this.state.propertyChanged === true){
            this.fetchData();
        }

    }
    fetchData(){
        axios.get(this.state.url).then(response => {
            let data = response.data
            this.setState({
                projects:data,
                propertyChanged:false
            });
        });
    }
    sortByColor(){
        this.setState({url:"/api/projects?color=desc"});
    }
    sortByDate () {
        this.setState({url:"/api/projects?date=asc&completed=0"});
    }
    sortByStatus(){
        this.setState({url:"/api/projects?completed=1"});
    }
    handlePagination(arrayOfItems){
        this.setState({arrayOfItems:arrayOfItems});
    }

    handleColor(e) {
        console.log(e.target.parentNode);
        this.toggleClass(e.target.parentNode.nextSibling,'none');
    }
    handleColorChange(e,color,id){
        let target = e.target;
        let projectId = id;
        axios.put(`/api/project/updatecolor/${projectId}`,{"color":color}).then(data => {
            console.log(data);
            this.setState({propertyChanged:true});
            this.toggleClass(target.parentNode,'none');
        });
    }
    handleStatusChange(e,completed,id){
        let target = e.target;
        let projectId = id;
        axios.put(`/api/project/updatestatus/${projectId}`,{"completed":!completed}).then(data => {
            console.log(data);
            this.setState({propertyChanged:true});
        });
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
        const {projects,arrayOfItems} = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title py-2">Mes projets</h5>
                    {this.props.search?
                    <div className="plist-btn-container">
                        <Button enabled={false}>par catégories</Button>
                        <Button onClick={()=> this.sortByColor()} enabled={true}>par couleurs</Button>
                        <Button onClick={()=>this.sortByDate()} enabled={true}>deadline</Button>
                        <Button onClick={()=>this.sortByStatus()} enabled={true}>Archivés</Button>
                    </div>
                    :""}
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {this.state.arrayOfItems.map(project => {
                            return (<li className="list-group-item" key={project.id}><ProjectListItem handleColor={this.handleColor} handleColorChange={this.handleColorChange} handleStatusChange={this.handleStatusChange} colors={this.state.colors} project={project} /></li>);
                        })}
                    </ul>
                    <Pagination  handlePage={this.handlePagination} items={this.state.projects}/>
                </div>
            </div>

        )
    }
}
