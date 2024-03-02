import React from 'react'
import './Boceto.css'
import fondo from '../../assets/img/perfil2.jpeg'
import perfil from '../../assets/img/Perfil.jpeg'

function Boceto() {
  return (
    <>
      <div className="boceto">
        <div className="boceto-fondo">
          <img src={fondo} alt="" />
          <div className="boceto-perfil">
            <img src={perfil} alt="" />
          </div>
        </div>

        <div className='infor-boceto'>
            <h1>Fernanda Luna</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque voluptatibus dolore ad natus quaerat.</p>

            <div className='btn-boceto'>
                <div className='gray-boceto'>
                    <h1>24</h1>
                    <p>Publicaciones</p>
                </div>

                <div className='gray-boceto'>
                    <h1>241</h1>
                    <p>Articulo</p>
                </div>
            
            </div>
        </div>
      </div>
    </>
  );
}

export default Boceto