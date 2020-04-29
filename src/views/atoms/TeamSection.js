import React from 'react';

const TeamSection = (props) => {
    return(
        <div className="teammate">

            {/*
                # Teammate
                # Description
            */}
            <div className="container-dft">
                <div className="teammate-inner">
                    <div className="teammate-image" style={{ backgroundImage: `url(${props.image})`}}></div>
                    <div className="teammate-description">
                        <h2 className="teammate-name">{props.name}</h2>
                        <div className="teammate-content">
                            {props.description}
                        </div>
                    </div>
                </div>
            </div>

            {/*
                # Teammate
                # Expertises
            */}
            <div className="container-team-expertise">
                <div className="teammate-expertises">
                    <div className="expertises-content">
                        <div className="expertises-title">Ses expertises</div>
                        <div className="expertises-all">
                        {props.expertises.map( (item, i) => {
                            return(
                                <div key={i} className="expertise-item">{item}</div>
                            )                                    
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection;