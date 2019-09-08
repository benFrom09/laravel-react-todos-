import React from 'react'
import ProjectList from './ProjectList'
import AnnouncementList from './AnnouncementList'
import ListTool from './ListTool'

export default function Home(props) {
    return (
        <React.Fragment>
            <div className="jumbotron">
                <h2><i className="fas fa-user"/> Hello user!</h2>
                <span>{Date.now()}</span>
            </div>
            <div className="row mb-4">
                <div className="col-12 col-md-8">
                    <AnnouncementList/>
                </div>
                <div className="col-6 col-md-4">
                    <ListTool/>
                </div>
            </div>
            <div className="row">
                <div className="col-12" >
                    <div className="p-list">
                        <ProjectList/>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}
