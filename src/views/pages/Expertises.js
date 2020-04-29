import React from 'react';

//Components
import TitlePage from '../atoms/TitlePage';
import ListItem from '../atoms/ListItem';

//Datas
import {competences} from '../../constants/competences';

const ExpertisesPage = () => {
    return(
        <div className={'expertises-page section container-dft'}>

            <section className="banner">
                <TitlePage
                    titleFirst={'Nos'} 
                    titleSecond={'Expertises'}
                    contentText={'Soucieux de vous proposer les meilleures solutions à vos besoins, nous opérons une veille permanante sur les innovations, services et technologies susceptibles d’augmenter la qualité de service de nos prestations et accéléere la performance de la mise en oeuvre de la stratégie digitale de nos clients.'}
                />
                <div className='img'></div>
            </section>

            <section className="expertises">
                {competences.map( item => {
                    return(
                        <ListItem 
                            class = {"large-item"}
                            key = {item.id}
                            id = {item.id + 1}
                            name = {item.name}
                            content = {item.content}
                        />
                    )
                })}
            </section>
            

            

        </div>
    )
}

export default ExpertisesPage;