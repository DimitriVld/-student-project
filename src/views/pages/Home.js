import React from 'react';
import TitlePage from '../atoms/ui/TitlePage';
import Icon from '../atoms/icons/Index';

const Home = () => {
    return (
        <div className={'home-page'}>
            <div className="container-dft">
                <section className="banner">
                    <TitlePage 
                        titleFirst={'We create <br/> & build'} 
                        titleSecond={'Digital solution'} 
                        contentText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                    />

                    <Icon name="Smile" width={300}/>
                </section>
            </div>

            
        </div>
    )
}

export default Home;