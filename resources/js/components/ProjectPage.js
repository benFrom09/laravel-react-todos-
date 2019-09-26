import React from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import {Button} from './Buttons';
import Modal from './Modal';

export default class ProjectPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal:false,
            modalContent:null,
            modalTitle:null
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal(context,title) {
        this.setState({showModal:!this.state.showModal,modalContent:context,modalTitle:title})
    }
    closeModal(){
        this.setState({showModal:!this.state.showModal,modalContent:null,modalTitle:null});
    }
    render(){
        const {colors} = this.props
        return (
            <React.Fragment>
                <div className="form-group">
                    <Button enabled={true} onClick={(e) => this.openModal(<ProjectForm colors={colors}/>,"Ajouter un projet")}>nouveau projet</Button>
                </div>
                <ProjectList  url="/api/projects" search={true}  colors={colors}/>
                <Modal title={this.state.modalTitle} content={this.state.modalContent} close={this.closeModal} show={this.state.showModal} />
            </React.Fragment>
        )
    }

}
