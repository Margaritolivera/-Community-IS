import React from 'react'
import '../amigos/Amigo.css'
import Amigo from "../../assets/img/chavo.jpg";

function Amigos() {
  return (
    <>
        <div className='container-amigo'>
            <div className='amigos-content'>
                <img src={Amigo} alt="" />
            </div>

            <div className='amigos-info'>
                <h1>Magarita Mendoza</h1>
                <p>Ing. Sistema de software</p>
            </div>
        </div>
    </>
  )
}

export default Amigos