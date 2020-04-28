import React from 'react';

//Atoms
import TitlePage from '../atoms/TitlePage';
import Form from '../molecules/FormContact';
import Map from '../atoms/Map';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render(){
        return (
            <div className={'contact-page container-dft section'}>
                <TitlePage
                    titleFirst={'Nous'} 
                    titleSecond={'Contacter'}
                    contentText={'Remplir le formulaire ou nous envoyer un mail.'}
                />
                <div className='img'></div>
                
                <Form />

                <Map />

                <div className="infos section">
                    <h4>Office</h4>
                    <p className='sub-title'>Notre ter-ter</p>
                    <p className='ville'>Paris</p>
                    <p className='adresse'>95 Boulevard haussman, 75008 Paris</p>
                    <p className='tel'>01 43 95 30 59</p>
                    <p className='email'>contact@ad-agency.com</p>
                </div>
            </div>
        )
    }
}

export default ContactPage;