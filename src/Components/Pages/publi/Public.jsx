import './Publi.css';
import { Button } from '../../UI/button/button';
import { Input } from '../../UI/input/input';
import { FaCamera, FaCalendarAlt, FaNewspaper } from 'react-icons/fa';
import avatar from '../../../assets/img/Perfil.jpeg';
import check from '../../../assets/img/check.png'

export function CrearPubli() {
    return (
        <div className="centered-container">
            <div className="container">
                <div className="avatar-container">
                    <img src={avatar} alt="Avatar" />
                </div>
                <div className="input-container">
                    <Input type="text" placeholder="Crear Publicación" withLabel={false} />
                </div>
                <div className="button-container">
                    <Button customClass="check-button">
                        <FaCamera />
                    </Button>
                </div>
                <div className="action-buttons-container">
                    <div className="action-buttons">
                        <Button content={<FaCamera />} customClass="action-button">
                            Contenido multimedia
                        </Button>
                        <Button content={<FaCalendarAlt />} customClass="action-button">
                            Evento
                        </Button>
                        <Button content={<FaNewspaper />} customClass="action-button">
                            Escribir artículo
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
