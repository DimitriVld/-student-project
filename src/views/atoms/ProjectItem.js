import React from 'react';

const ProjectItem = (props) => {

    return(
        <div className={`project-item-atom ${props.class ? props.class : ''}`}>
            <div className="item-img" styles={{ backgroundImage:`url(${props.img ? props.img : ''})` }}></div>
            <div className="item-name">{props.title}</div>
            <div className="item-type">{props.type}</div>
        </div>
    );

}

export default ProjectItem;