import React from 'react';

//Atoms
import Intro from '../atoms/ui/Intro';
import Titles from '../atoms/ui/Titles';
import ListItem from '../atoms/ui/ListItem';

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
            <section className="banner">
                <div className="container-dft">

                    {/*
                        # Intro component 
                        # Contain Title
                        # contentText (facultative)
                    */}
                    <Intro 
                        titleFirst={'We create <br/> & build'} 
                        titleSecond={'Digital solution'} 
                        contentText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                    />

                </div>
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
                    <Titles 
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