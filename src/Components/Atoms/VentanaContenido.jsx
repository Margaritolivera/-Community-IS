import React from 'react';
import camara from '../../assets/img/camara.png';
import candado from '../../assets/img/candado.png';
import img from '../../assets/img/imagen.png';
import avatar from '../../assets/img/avatar.jpg'
import './VentanaContenido.css';

function ContenidoMultimedia() {
    return ( 
        <>
        <div className="container">
            <div className="text">
                <h1>Agregar Contenido multimedia</h1>
            </div>

            <div className="container-2">
                <div className="container-img">
                    <img src="" alt="" />
                </div>

                <div className="input-container">
                    <input type="text" name="" id=""  placeholder="Crear Publicación"/>
                    <div className="input">
                        <button>
                            <img src={camara} alt="" />
                        </button>
                    </div>
                </div>             
            </div>

            <div className='lista'>
                <button className='lista-button'><img src={candado} alt="" />Todo público</button>
                <button className='lista-button'><img src={img} alt="" />Publicar contenido multimedia </button>
            </div>

        </div>
        </>
     );
}

export default ContenidoMultimedia;
