import React from 'react';

const ExpertItem = (props) => {

    return(
        <div data-testid={props.testid} className={`expert-item-atom ${props.class ? props.class : 'empty'}`}>
            <img className="item-img" src={props.icon} alt="Expert img" />
            <div className="item-name">{props.title}</div>
        </div>
    );

}

export default ExpertItem;