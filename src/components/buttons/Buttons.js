// import { Link } from 'react-router-dom';
import './buttons.css';

function Btn({ texto, href }) {
    return (
        <div className='button-container'>
            <a href={href}target="_blank" rel="noreferrer" className='btn-az'>
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