import React from 'react';

//Atoms
import InputCheckboxGroup from '../molecules/InputCheckboxGroup';
import InputTextGroup from '../molecules/InputTextGroup';
import Button from '../atoms/Button';

class FormContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactStep: 1,
            object: '',
        };
    }

    SetValueChecked = (event) => {
        this.setState({
            contactStep: 2,
            object: event.currentTarget.value,
        });
    }

    ReturnToStep1 = () =>{
        this.setState({
            contactStep: 1,
            object: '',
        })
    }

    render(){
        const Step1 = () => {
            return (
                <div className='form-step-1'>
                    <p className='for'>C'est pour ?</p>
                    <InputCheckboxGroup text='Un projet' name='projet' onClick={this.SetValueChecked}/>
                    <InputCheckboxGroup text='Un partenariat' name='partenariat' onClick={this.SetValueChecked}/>
                    <InputCheckboxGroup text='Nous rejoindre' name='rejoindre' onClick={this.SetValueChecked}/>
                </div>
            )
        };

        const Step2 = () => {
            return (
                <div className='form-step-2'>
                    <p className='for'>C'est pour</p>
                    <p className='choice-select' onClick={this.ReturnToStep1}>
                        <img src="./img/CTA_Back.png" alt="Back" className='cta-back'/>
                        {this.state.object}
                    </p>
                    <InputTextGroup text='Quel est votre nom ?' placeholder='Jean Christophe' name='fullname' />
                    <InputTextGroup text='Votre superbe adresse mail' placeholder='jean.christophe@contact.com' name='email' />
                    <InputTextGroup text='Parlez-nous de votre projet' placeholder='Votre message' name='message' />
                    <Button text='Envoyer'/>
                </div>
            )
        };

        return (
            <form className='form-contact-molecule'>
                { this.state.contactStep === 1 ? <Step1/> : '' }
                
                { this.state.contactStep === 2 ? <Step2/> : '' }
            </form>
        )
    }
}

export default FormContact;