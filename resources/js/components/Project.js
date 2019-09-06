import React from 'react';
import { Link } from 'react-router-dom';

export default function Project(props) {
    const {name,description,id,created_at} = props.project;
    let tasks_count;
    const style = {
        maxWidth:"500px",
    }
    return (
        <Link to={`/project/${id}`}>{name}</Link>
    );
}

