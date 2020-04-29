import React from 'react';
import { Link } from "react-router-dom";
import Icon from './icons/Index';

class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    toggleMenu = () => {
        document.querySelector('.nav').classList.toggle('active');
        document.querySelector('.burger-icon').classList.toggle('active');
    }

    render(){
        return (
            <div data-testid={this.props.testid} className={'navigation-atom'}>
    
                {/* Menu */}
                <Link className='logo' to='/'>Logo</Link>
                <nav className='nav'>
                    <Link to='/about-us'>À propos</Link>
                    <Link to='/expertises'>Expertises</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/projects'>Projets</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/konami'>Konami</Link>
                </nav>
    
                {/* Burger menu */}
                <div className="burger-menu" onClick={() => this.toggleMenu()}>
                    <Icon name="Burger" width={50} stroke={"#fff"} />
                </div>
            </div>
        )
    }
}

export default Navigation;