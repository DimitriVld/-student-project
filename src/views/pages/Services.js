import React from 'react';

//Components
import Icon from '../atoms/icons/Index';
import TitlePage from '../atoms/TitlePage';
import ListItem from '../atoms/ListItem';

//datas
import {competences} from '../../constants/competences';


const ServicesPage = () => {
    return(
        <div className={'services-page section'}>

            <section className="banner container-dft">
                {/*
                    # Title Page component 
                    # Contain Title
                    # contentText (facultative)
                */}
                <TitlePage 
                    titleFirst={'Nos'} 
                    titleSecond={'Services'} 
                    contentText={'En velle technologique constantes, nous apportons notre savoir-faire combiné à ceux de nos collaborateurs choisi avec soin afin de vous proposer les meilleures solutions à vos besoins .'}
                />

                <Icon name="Smile" width={300}/>
            </section>

            <section className="services">
                    {competences.map( item => {
                        return(
                            <div class="services-item">
                                <div className="left">
                                    <ListItem 
                                        class = {""}
                                        key = {item.id}
                                        id = {item.id + 1}
                                        name = {item.name}
                                        content = {item.content}
                                    />
                                </div>
                                
                                <div className="img">
                                
                                </div>
                            </div>
                            
                        )
                    })}
            </section>

        </div>
    )
}

export default ServicesPage;