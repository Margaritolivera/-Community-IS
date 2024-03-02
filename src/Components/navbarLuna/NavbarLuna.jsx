import React from 'react';
import img2 from '../../assets/img/ajuste.png';
import Search from './SearchLuna';
import './NavbarLuna.css';

function NavbarLuna() {
    return ( 
        <div className="container-nav">
            <div className="logo">
                <span className="logo-text">Campus<span className="logo-link">Link</span></span>
            </div>
            <div className="search-container">
                <Search /> 
            </div>
            <div className="nav-links">
                <button className="nav-button">Inicio</button>
                <button className="nav-button">Grupos</button>
                <button className="nav-button">Artículos</button>
                <button className="nav-button">Comunicados</button>
            </div>
            <div className="profile-settings">
                <button className="nav-button nav-link-right">Mi perfil</button>
                <div className="profile-img-container">
                    <button className="nav-button"><img className="ajuste-img" src={img2} alt="Ajustes" /></button>
                </div>
            </div>
        </div>
    );
}

export default NavbarLuna;
