import React from 'react';

const TitleSection = (props) => {
    return (
        <div className="title-section-atom">
            <h2 className="content">{props.title}</h2>
            <div className="sub">{props.subtitle}</div>
        </div>
    )

}

export default TitleSection;