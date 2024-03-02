import React from "react";
import imagenPerfil from "../../assets/img/Perfil.jpeg";
import "./PerfilLuna.css";
import NavbarLuna from "../navbarLuna/NavbarLuna";
import Fondo from "../../assets/img/perfil2.jpeg";
import Instagram from "../../assets/img/instagram.png";
import Face from "../../assets/img/facebook.png";
import x from "../../assets/img/gorjeo.png";
import ArticuloLuna from "../articuloLuna/ArticuloLuna";
import AmigosLuna from "../amigosLuna/AmigosLuna";
import BocetoLuna from "../bocetoLuna/BocetoLuna";

function PerfilLuna() {
  return (
    <>
      <NavbarLuna />
      <section className="content-all">


        <div>
            <BocetoLuna/>
        </div>

        <div className="Perfil">
          
        </div> 

        <div className="articulo">
            <div className="articulo-text">
                <h1>Articulo</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis impedit cumque commodi nam exercitationem officiis.</p>
            </div>
            <ArticuloLuna/>
            <ArticuloLuna/>
            <ArticuloLuna/>
        </div>
      </section>
    </>
  );
}

export default PerfilLuna;
