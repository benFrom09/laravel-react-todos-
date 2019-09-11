import React from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import {Button} from './Buttons';

export default function ProjectPage(props) {
    const {colors,openModal} = props
    return (
        <React.Fragment>
            <div className="form-group">
                <Button onClick={(e) => openModal(<ProjectForm colors={colors}/>,"Ajouter un projet")}>noveau projet</Button>
            </div>
            <ProjectList colors={colors}/>
        </React.Fragment>
    )
}
