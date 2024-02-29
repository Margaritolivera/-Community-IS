import React from 'react'
import Arti from "../../assets/img/Arti.jpg"
import '../Perfil/Perfil.css'

function Articulo() {
  return (
    <>
        <div className='content-articulo'>
            <img src={Arti} alt="" />

            <div className='articulo-info'>
                <h1>Cary Johns</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam commodi voluptatem recusandae possimus quam, officiis nihil reprehenderit facilis quis a.</p>
                <button>Saber mas</button>
            </div>
        </div>
    </>
  )
}

export default Articulo