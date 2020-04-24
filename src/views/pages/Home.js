import React from 'react';

//Atoms
import TitlePage from '../atoms/TitlePage';
import Icon from '../atoms/icons/Index';
import TitleSection from '../atoms/TitleSection';
import ListItem from '../atoms/ListItem';

//Datas
import {competences} from '../../constants/competences';

const Home = () => {
    return (
        <div className={'home-page'}>

            {/* 
            |-------------
            |   Banner 
            |-------------
            */}
            <section className="banner container-dft">
                {/*
                    # Title Page component 
                    # Contain Title
                    # contentText (facultative)
                */}
                <TitlePage 
                    titleFirst={'We create <br/> & build'} 
                    titleSecond={'Digital solution'} 
                    contentText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                />

                <Icon name="Smile" width={300}/>
            </section>


            {/* 
            |----------------
            |   Compétences 
            |----------------
            */}
            <section className="competences section">
                
                <div className="container-dft">

                    {/*
                        # Titles component 
                        # Contain Titles | Italic text
                    */}
                    <TitleSection 
                        title = {'Nos competences'}
                        subtitle = {'qui nous tiennent à coeur'}
                    />

                    {/* 
                    |   Competences list 
                    |----------------------
                    */}
                    <div className="competences-container">
                        {competences.map( item => {
                            return(
                                <ListItem 
                                    class = {"small-item"}
                                    key = {item.id}
                                    id = {item.id + 1}
                                    name = {item.name}
                                    content = {item.content}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home;