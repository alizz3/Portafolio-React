import Navbar from "../components/navbar/Navbar";
import ilustrator from '../components/navbar/img/Melogo.png'
import '../index.css'
import Btn from '../components/buttons/Buttons'


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
                            <Btn texto="Hire me"></Btn>
                        </section>
                    </div>
                    <div className="container-Home-img"><img src={ilustrator} alt="caracter" /></div>
                </div>
            </section>
        </div >
    );
}

export default Home;