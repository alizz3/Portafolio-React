import Navbar from "../components/navbar/Navbar";
import ilustrator from '../components/navbar/img/Melogo.png'
import '../index.css'
import Btn from '../components/buttons/Buttons'
import Footer from "../components/footer/Footer";


function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <section className="container-Home">
                <div className="container-home-text">
                    <div className="div-section-home">
                        <section>
                            <span className="wrapper"><h1 className="typing-demo">Hi i’m <strong>Aliz</strong></h1></span>
                            <h3>freelance web <br /> developer</h3>
                            <Btn href="https://api.whatsapp.com/send?phone=573113071168&text=Hola%20Aliz!!%20Estoy%20interesad%40%20en%20contratar%20tus%20servicios%20de%20Developer%20front%20End" texto="Hire me"></Btn>
                        </section>
                    </div>
                    <div className="container-Home-img"><img src={ilustrator} alt="caracter" /></div>
                </div>
            </section>
            <Footer></Footer>
        </div >
    );
}

export default Home;