import React from "react";
import Input from "../../Atoms/Atoms_Login/Input";
import Button from "../../Atoms/Atoms_Login/Button";
import ArticleMoelcule from "../ArticleMoelcule";

function AdminUsuario(){
    return(
        <>
<div className="">
    <h1>Administracion Usuarios</h1>
<h3>_________________________________________________</h3>
       <div className="flex justify-between items-center">
        <ArticleMoelcule
        title="Administradores"
        content="4 Administradores"
        />
        <Button 
        txt={"editar"} 
        classN={"rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
        />
        </div>
<br />
        <div className="flex justify-between items-center">
        <ArticleMoelcule
        title="Directores"
        content="2 Directores"
        />
        <Button 
        txt={"editar"} 
        classN={"rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
        />
        </div>
        
<h3>_________________________________________________</h3>

<div className="flex justify-between items-center">
        <ArticleMoelcule
        title="Usuarios reportados"
        content="0 usuarios reportados"
        />

        <Button 
        txt={"editar"} 
        classN={"rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
        />
</div>

<br />

<div className="flex justify-between items-center">
        <ArticleMoelcule
        title="Bloquear usuarios"
        content="2 usuarios bloqueados"
        />

        <Button 
        txt={"editar"} 
        classN={"rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
        />
</div>

<br />

<div className="flex justify-between items-center">
        <ArticleMoelcule
        title="Usuarios eliminados"
        content="2 usuarios eliminados"
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

export default AdminUsuario;