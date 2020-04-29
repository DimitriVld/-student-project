import React from 'react';

//Atoms
import TitlePage from '../atoms/TitlePage';
import Icon from '../atoms/icons/Index';
import TitleSection from '../atoms/TitleSection';
import ProjectItem from '../atoms/ProjectItem';

// Datas
import {staticProfile} from '../../constants/staticProfile';

const Konami = () => {
    return (
        <div className={'konami-page'}>

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
                    titleFirst={'Uns site <br/> construit'} 
                    titleSecond={'Avec amour'} 
                />

                <Icon name="Smile" width={300}/>
            </section>


            {/* 
            |----------------
            |   Compétences 
            |----------------
            */}
            <section className="profile section">
                
                <div className="container-dft">

                    {/*
                        # Titles component 
                        # Contain Titles | Italic text
                    */}
                    <TitleSection 
                        title = {'La team'}
                        subtitle = {'On est lààààààà ! Et en plus on est stylés !'}
                    />

                    {/* 
                    |   Competences list 
                    |----------------------
                    */}
                    <div className="profile-container">
                        {staticProfile.map( item => {
                            return(
                                <ProjectItem 
                                    key = {item.id}
                                    id = {item.id}
                                    img = {item.img}
                                    title = {item.title}
                                    type = {item.type}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Konami;