
import { Link } from 'react-router-dom'
import '../navbar/Navbar.css'
import logo from './img/logo.svg'



function Navbar() {

   return (
      <header>
         <div className='linea'></div>
         <nav>
            <Link to="/home" className='item-logo'>
               <img src={logo} alt="Logo" className="logo-img"></img></Link>
            <input type="checkbox" id="check"></input>
            <label for="check" class="checkbtn">
               <i className="fa-solid fa-barcode"></i>
            </label>
            <ul>
               <li>
                  <Link to="/home" className='item'>Home</Link>
               </li>

               <li>
                  <Link to="/about-me" className='item'>About me</Link>
               </li>

               <li>
                  <Link to="/skills" className='item'>Skills</Link>
               </li>

               <li>
                  <Link to="/jobs" className='item'>Jobs</Link>
               </li>

               <li>
                  <Link to="/studies" className='item'>Studies</Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}


export default Navbar