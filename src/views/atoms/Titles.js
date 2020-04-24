import React from 'react';

const Titles = (props) => {
    return (
        <div className="titles-atom">
            <h2 className="titles-content">{props.title}</h2>
            <div className="titles-sub">{props.subtitle}</div>
        </div>
    )

}

export default Titles;