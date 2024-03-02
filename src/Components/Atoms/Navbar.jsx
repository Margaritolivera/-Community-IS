import React from 'react';
import img2 from '../../assets/img/ajuste.png';
import Search from './Search';
import './Navbar.css';

function Navbar() {
    return (
        <> 
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
            <div className="nav-links-2">
                <button className="nav-button">Mi perfil</button>
                <button className="nav-button"><img className="ajuste-img" src={img2} alt="Ajustes" /></button>
            </div>
        </div>
        </>
    
    );
}

export default Navbar;
