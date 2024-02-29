// CrearPubli.jsx
import avatar from '../../assets/img/avatar.jpg';
import check from '../../assets/img/check.png';
import calendario from '../../assets/img/calendario.png';
import img from '../../assets/img/imagen.png';
import periodico from '../../assets/img/periodico.png';
import './CrearPubli.css';

function CrearPubli() {
    return (
        <div className="centered-container">
            <div className="container">
                <div className="avatar-container">
                    <img src={avatar} alt="Avatar" />
                </div>
                <div className="input-container">
                    <input type="text" name="" id="" className="custom-input" placeholder='Crear Publicación'/>
                </div>
                <div className="button-container">
                    <button className="check-button">
                        <img src={check} alt="" />
                    </button>
                </div>
                <div className="action-buttons-container">
                    <div className="action-buttons">
                        <button className="action-button"> <img src={img} alt="" />Contenido multimedia</button>
                        <button className="action-button-   "><img src={calendario} alt="" />Evento</button>
                        <button className="action-button"><img src={periodico} alt="" />Escribir artículo</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrearPubli;
