import React from "react";
import AdminContenido from "../../Molecules/AdministracionUsuarios/AdminContenido";
import AdminUsuario from "../../Molecules/AdministracionUsuarios/AdminUsuarios";
import ArticleMoelcule from "../../Molecules/ArticleMoelcule";
import Logo from "../../../assets/img/Loogo.jpg"

function Administracion(){
    return(
        <>
        <div id="content-Administracion">
        <section className="flex flex-col items-center bg-indigo-600">
        <img id="img-logo" src={Logo} alt="Logo" />
  
        <div className="text-left truncate">
        <ArticleMoelcule title="Administra usuarios y contenido de CampusLink" /> <br />
        <AdminUsuario/>
        <AdminContenido/>
        </div>
        </section>
        </div>
        
        </>
    )
}

export default Administracion;