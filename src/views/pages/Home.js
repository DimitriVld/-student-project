import React from 'react';
import Intro from '../atoms/ui/Intro';

const Home = () => {
    return (
        <div className={'home-page'}>
            <div className="container-dft">
                <section className="banner">
                    <Intro 
                        titleFirst={'We create <br/> & build'} 
                        titleSecond={'Digital solution'} 
                        contentText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                    />
                </section>
            </div>

            
        </div>
    )
}

export default Home;