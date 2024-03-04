import React from "react";
import imagenPerfil from "../../assets/img/Perfil.jpeg";
import "./Perfil.css";
import Navbar from '../Atoms/Navbar'
import Fondo from "../../assets/img/perfil2.jpeg";
import Instagram from "../../assets/img/instagram.png";
import Face from "../../assets/img/facebook.png";
import x from "../../assets/img/gorjeo.png";
import Articulo from "../articulo/Articulo";
import Amigos from "../amigos/Amigos";
import Post from "../../Components/post"

function Perfil() {
  return (
    <>
      <Navbar />
      <section className="content-all">
        <div className="Perfil">
            <div className="Fondo">
            <img src={Fondo} alt="" className="img-fondo" />
            </div>
            <div className="Imgperfil">
            <img src={imagenPerfil} alt="" className="Img-perfil" />
            </div>
            <div className="Info">
            <div className="content">
                <div className="present">
                <h1>Joanna Rosenbaum</h1>
                <span>Ing. Sistemas de la información</span>
                <p>Chiapas, México</p>
                </div>
                <div className="Intereses">
                <h5>Intereses</h5>
                <div className="listaIntereses">
                    <div className="Interes">Materia</div>
                    <div className="Interes">Deportes</div>
                    <div className="Interes">Comida</div>
                    <div className="Interes">Hobbies</div>
                    <div className="Interes">Peliculas/Series</div>
                </div>
                </div>
            </div>

            <div className="Redes">
                <div className="listaredes">
                <p className="redes-comment"><img src={Instagram} alt="" />@JoannaRose</p>
                <p className="redes-comment"><img src={Face} alt="" />/JoannaRose</p>
                <p className="redes-comment"><img src={x} alt="" />@JoannaRose</p>
                </div>
            </div>
            </div>

            <div className="amigos-perfil">
                <div className="acerca">
                    <h1>Acerca de mi</h1>
                    <p>Figma ipsum component variant main layer. Reesizing undo figjam align inspect.
                        Ipsum layer stroke slice frame italic background. Bold boolean duplicate layout overflow.
                        Scale draft ipsum main background figma selection. Star ellipse comment figma content draft. 
                        Figma main main arrange strikethrough. List slice pixel ellipse figjam text. Arrow line variant boolean device star hand comment layer.
                         Device shadow pixel comment scale figjam bold library font group. Arrow style slice reesizing underline prototype.
                         Comment move underline arrange style slice move reesizing pixel.</p>
                </div>

                <div className="amigos-conatiner">
                    <div className="amigos-class">
                        <h1>Amigos</h1>
                        <div className="count">
                            <p>123 amigos</p>
                            <a href="">Buscar amigo</a>
                        </div>
                    </div>

                    <div className="amigos-gap">
                        <Amigos/>
                        <Amigos/>
                        <Amigos/>
                    </div>
                </div>
            </div>
        </div>

        <div className="articulo">
            <div className="articulo-text">
                <h1>Articulo</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis impedit cumque commodi nam exercitationem officiis.</p>
            </div>
            <Articulo/>
            <Articulo/>
            <Articulo/>
        </div>
      </section>
      <Post />

    </>
  );
}

export default Perfil;
