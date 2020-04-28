import React from 'react';
import { Link } from "react-router-dom";

const ProjectItem = (props) => {

    return(
        <Link to={`/project-${props.id}`} className={`project-item-atom ${props.class ? props.class : ''}`}>
            <div className="item-img" styles={{ backgroundImage:`url(${props.img ? props.img : ''})` }}></div>
            <div className="item-name">{props.title}</div>
            <div className="item-type">{props.type}</div>
        </Link>
    );

}

export default ProjectItem;