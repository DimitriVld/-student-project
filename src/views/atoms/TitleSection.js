import React from 'react';

const TitleSection = (props) => {
    return (
        <div data-testid={props.testid} className="title-section-atom">
            <h2 className="content" dangerouslySetInnerHTML={{__html: props.title}}></h2>
            <div className="sub">{props.subtitle}</div>
        </div>
    )

}

export default TitleSection;