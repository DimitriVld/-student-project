import React from 'react';

const Intro = (props) => {
    return (
        <div className="intro-atom">
            <h1 className="intro-title">
                <span dangerouslySetInnerHTML={{__html: props.titleFirst}}></span>
                <span className="intro-title-outline">{props.titleSecond}</span>
            </h1>
            { props.contentText ? 
                <div className="intro-text">{props.contentText}</div>
                : ""
            }
        </div>
    )

}

export default Intro;