import React from 'react';
import TitlePage from '../atoms/TitlePage';

const AboutUsPage = () => {
    return(
        <div className={'about-us-page section'}>
            <div className="container-dft">

                <section className="banner">
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
                </section>
                
                <section className="team">

                    <div className="teammate">

                        <div className="teammate-inner">
                            <div className="teammate-image"></div>

                        </div>

                    </div>

                </section>

            </div>
        </div>
    )
}

export default AboutUsPage;