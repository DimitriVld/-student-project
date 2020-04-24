import React from 'react';

const ListItem = (props) => {

    return(
        <div className={`list-item-atom ${props.class}`}>
            <div className="item-name">{props.name}</div>
            <div className="item-content">{props.content}</div>
            <div className="item-id">{`.0${props.id}`}</div>
        </div>
    );

}

export default ListItem;