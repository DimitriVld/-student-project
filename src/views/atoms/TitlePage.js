import React from 'react';

const TitlePage = (props) => {
    return (
        <div className="title-page-atom">
            <h1 className="title">
                <span dangerouslySetInnerHTML={{__html: props.titleFirst}}></span>
                <span className="title-outline">{props.titleSecond}</span>
            </h1>
            { props.contentText ? 
                <div className="text">{props.contentText}</div>
                : ""
            }
        </div>
    )

}

export default TitlePage;