import React from 'react';
import { Link } from "react-router-dom";
import TitleSection from '../atoms/TitleSection';
import Icon from '../atoms/icons/Index';

const Footer = (props) => {
    return (
        <footer className={'footer-partial'}>

            <div className={`footer-top container-dft section ${props.page}`}>
                {/*
                    # Titles component 
                    # Contain Titles | Italic text
                */}
                <TitleSection 
                    title = {'Un projet ? <br/> Parlons en ensemble'}
                    subtitle = {'Pour faire de la purée Mousline'}
                />

                <Link to='/contact'>
                    <Icon name="Add" width={160}/>
                </Link>
            </div>

            <div className="footer-bottom">

                <div className="footer-nav">
                    {/* Menu */}
                    <Link className='logo' to='/'>Logo</Link>
                    <nav className='nav'>
                        <Link to='/about-us'>À propos</Link>
                        <Link to='/expertises'>Expertises</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/projects'>Projets</Link>
                        <Link to='/contact'>Contact</Link>
                    </nav>
                </div>

                <div className="footer-infos">
                    <h4>Ad agency</h4>
                    <p className='email'>contact@ad-agency.com</p>
                    <p className='adresse'>Adresse</p>
                    <div className='socials'>
                        <img className="social-img" src='./img/github.png' alt="Social img" />
                        <img className="social-img" src='./img/twitter.png' alt="Social img" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;