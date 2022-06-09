import './index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Error404 from './pages/error404';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Skills from './pages/Skills';
import Studies from './pages/Studies';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about-me' element={<Aboutme />}></Route>
      <Route path='/studies' element={<Studies />}></Route>
      <Route path='/skills' element={<Skills />}></Route>
      <Route path='/jobs' element={<Jobs />}></Route>
      <Route path='*' element={<Error404 />}></Route>



      <Route path='/privacy-policy' component={() => {
        window.location.href = 'https://api.whatsapp.com/send?phone=573113071168&text=Hola%20Aliz!!%20Estoy%20interesad%40%20en%20contratar%20tus%20servicios%20de%20Developer%20front%20End';
        return null;
      }} />
      <Route path='/home' element={<Navigate to={"/"} />}></Route>
    </Routes>
  </BrowserRouter>
);


