// import { Link } from 'react-router-dom';
import './buttons.css';

function Btn({ texto, href,className }) {
    return (
        <div className='button-container'>
             {/* <a href={href}target="_blank" rel="noreferrer" className='btn-az btn-az-hover' > 'btn-az' */}
              <a href={href}target="_blank" rel="noreferrer" className={className} > {/*'btn-az' */}
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