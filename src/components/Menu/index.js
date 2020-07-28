import React from 'react';
import Logo from '../../assets/img/logo1.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo"/>
            </a>
            
            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}
export default Menu;