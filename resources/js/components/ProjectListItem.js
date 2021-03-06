import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectListItem(props) {
    const {name,id,start_date,end_date,completed,color} = props.project;
    let tasks_count;
    const style = {
        maxWidth:"500px",
    }

    return (

        <div className="p-container">
            <div className="d-flex align-items-center p-project-name">
                <div className="p-icon">
                    <i onClick={(e) => props.handleStatusChange(e,completed,id)} className={`fas fa-star ${completed ? 'p-completed' : ''}`}/>
                </div>
                <div  className="p-icon">
                    <i onClick={(e) => props.handleColor(e)} className="fas fa-circle" style={{color:color}}/>
                </div>
                <div className="colors none">{props.colors.map((color,i)=>{
                    return <div onClick={(e) => props.handleColorChange(e,color,id)} className="color" key={i + 1} style={{background:color}} title={color}></div>
                    })}
                </div>
                <Link to={`/project/${id}`}><h5 className="m-0 text-justify p-title">{name}</h5></Link>
            </div>
            {/*
            <div className="p-info">
                crée le:<span className="p-status"> {start_date}</span>
            </div>
            */}
            <div className="p-info">
                deadline:<span className="p-status"> {end_date}</span>
            </div>
            <div className="p-info">
                statut:<span className="p-status"> {completed ? "archivé" : "en cours"}</span>
            </div>
        </div>




    );
}

