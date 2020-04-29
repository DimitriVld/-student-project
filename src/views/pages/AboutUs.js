import React from 'react';
import TitlePage from '../atoms/TitlePage';
import {team} from '../../constants/team';

import TeamSection from '../atoms/TeamSection';

const AboutUsPage = () => {
    return(
        <div className={'about-us-page section'}>

                <section className="banner">
                    <div className="container-dft">
                        {/*
                            # Title Page component 
                            # Contain Title
                            # contentText (facultative)
                        */}
                        <TitlePage 
                            titleFirst={'A propos'} 
                            titleSecond={'de nous'} 
                            contentText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                        />
                    </div>
                </section>

                <section className="team">
                    
                    {
                        team.map( (item) => {
                            console.log(item.expertises)
                            return(
                                <TeamSection 
                                    key = {item.name}
                                    name = {item.name}
                                    image = {item.image}
                                    description = {item.description}
                                    expertises = {item.expertises}
                                />
                            )                                    
                        })
                    }

                </section>

        </div>
    )
}

export default AboutUsPage;