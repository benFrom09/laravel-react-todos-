import React from 'react';
import { Link } from 'react-router-dom';

export default function Project(props) {
    const {name,id,created_at,completed} = props.project;
    let tasks_count;
    const style = {
        maxWidth:"500px",
    }
    return (

        <div className="p-container">
            <div className="d-flex align-items-center p-project-name">
                <div className="p-icon">
                    <i className="fas fa-star"/>
                </div>
                <div onClick={(e)=> props.handleColor(e)} className="p-icon">
                    <i className="fas fa-circle"/>
                </div>
                <div className="colors none">{props.colors.map((color,id)=>{
                    return <div className="color" key={id + 1} style={{background:color}} title={color}></div>
                    })}
                </div>
                <Link to={`/project/${id}`}><h5 className="m-0 text-justify p-title">{name}</h5></Link>
            </div>
            <div className="p-info">
                crée le:<span className="p-status"> {created_at}</span>
            </div>
            <div className="p-info">
                deadline:<span className="p-status"> {created_at}</span>
            </div>
            <div className="p-info">
                status:<span className="p-status"> {completed ? "archivé" : "en cours"}</span>
            </div>
        </div>




    );
}

