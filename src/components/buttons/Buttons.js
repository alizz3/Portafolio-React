// import { Link } from 'react-router-dom';
import './buttons.css';

function Btn({ texto }) {
    return (
        <div className='button-container'>
            <a href="https://api.whatsapp.com/send?phone=573113071168&text=Hola%20Aliz!!%20Estoy%20interesad%40%20en%20contratar%20tus%20servicios%20de%20Developer%20front%20End"target="_blank" rel="noreferrer" className='btn-az'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {texto}
            </a>
        </div>
    )
}

export default Btn