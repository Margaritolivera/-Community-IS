import React from "react";
import Input from "../../Atoms/Atoms_Login/Input";
import Button from "../../Atoms/Atoms_Login/Button";
import ArticleMoelcule from "../ArticleMoelcule";
import Logo from "../../../assets/img/Loogo.jpg"

function LoginForm({ onSubmit }) {
    return (
        <>
        <div id="content">
        <section className="flex flex-col items-center">
        <img id="img-logo" src={Logo} alt="Logo" />
  
  <div className="text-center">
    <ArticleMoelcule content="Iniciar Sesión" />
  </div>
</section>
        <div className="flex min-h-full flex-1 flex-col justify-between h-40 px-6 py-12 lg:px-8">
        <form onSubmit={onSubmit}>
        <Input name="username"  type="text"/><br /> <br />
        <Input name="password"  type="password"/> <br /> <br />
  
        <Button txt={"Iniciar Sesión"} classN={"flex w-full justify-center rounded-md bg-sky-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}></Button>
        <p className="mt-10 text-center text-sm text-gray-500"></p>
        <Button txt={"Iniciar Sesión con google"} classN={"flex w-full justify-center rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}></Button>
        </form>  
        </div>
        </div>
        </>
    );
  }
  export default LoginForm;