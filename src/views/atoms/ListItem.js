import React from 'react';

const ListItem = (props) => {

    return(
        <div data-testid={props.testid} className={`list-item-atom ${props.class ? props.class : 'without-class'}`}>
            <div className="item-name">{props.name}</div>
            <div className="item-content">{props.content}</div>
            <div className="item-id">{`.0${props.id}`}</div>
        </div>
    );

}

export default ListItem;