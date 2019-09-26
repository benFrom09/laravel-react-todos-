import React from 'react';
import ProjectList from './ProjectList';
import AnnouncementList from './AnnouncementList';
import Clock from './Clock';
import TaskList from './TaskList';

export default function Home(props) {
    const {user,date,colors} = props;
    return (
        <React.Fragment>
            <div className="jumbotron hero-usr">
                <h2><i className="fas fa-user"/> Hello {user ? user : "user"} !</h2>
                <span>{date}</span>
                <Clock style={{width:100,display:"block"}}/>
            </div>
            <div className="row mb-4">
                <div className="col-12 col-md-8">
                    <AnnouncementList/>
                </div>
                <div className="col-6 col-md-4">
                    <TaskList/>
                </div>
            </div>
            <div className="row">
                <div className="col-12" >
                    <div className="p-list">
                        <ProjectList search={false} url="/api/all" colors={colors}/>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}
