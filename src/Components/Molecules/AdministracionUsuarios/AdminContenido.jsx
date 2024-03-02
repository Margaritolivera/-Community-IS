import React from "react";
import ArticleMoelcule from "../ArticleMoelcule";
import Button from "../../Atoms/Atoms_Login/Button";

function AdminContenido(){
    return(
        <>
        <br />
        <br />

        <div>
             <h1>Administracion de Contenido</h1>
             <h3>_________________________________________________</h3>
        
        <div className="flex justify-between items-center">

        <ArticleMoelcule
        title="Publicaciones reportadas"
        content="4 Publicaciones"
        />
        <Button 
        txt={"editar"} 
        classN={"rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
        />
        </div>
<br />
        <div className="flex justify-between items-center">
        <ArticleMoelcule
        title="Publicaciones Bloqueadas"
        content="4 Publicaciones"
        />
        <Button 
        txt={"editar"} 
        classN={"rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
        />
        </div>
<br />
        <div className="flex justify-between items-center">
        <ArticleMoelcule
        title="Publicaciones eliminadas"
        content="4 Publicaciones"
        />
        <Button 
        txt={"editar"} 
        classN={"rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
        />
        </div>
 
<h3>_________________________________________________</h3>

<div className="flex justify-between items-center">
        <ArticleMoelcule
        title="Eventos reportados"
        content="2 eventos"
        />
        <Button 
        txt={"editar"} 
        classN={"rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
        />
        </div>
<br />  
        <div className="flex justify-between items-center">
        <ArticleMoelcule
        title="Eventos bloqueados"
        content="2 eventos"
        />
        <Button 
        txt={"editar"} 
        classN={"rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
        />
        </div>
<br />
        <div className="flex justify-between items-center">
        <ArticleMoelcule
        title="Eventos cancelados"
        content="2 eventos"
        />
        <Button 
        txt={"editar"} 
        classN={"rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
        />
        </div>


        </div>
       
        </>
    )
}

export default AdminContenido