import Navbar from "../components/navbar/Navbar";
import '../Aboutme.css'
import cuatro from '../components/img/aboutme/4.jpg'
import seis from '../components/img/aboutme/7jpg.jpg'
import Btn from "../components/buttons/Buttons";
import Footer from "../components/footer/Footer";

function Aboutme() {
    return (
        <section className="main_Aboutme">
            {/* <h1>Página About-me del portafolio</h1> */}
            <Navbar></Navbar>
            <section className="container-aboutme">

                <div className="information-aboutme">
                    <p>I am 18 years old, I am starting in the world of FrontEnd I started in it just out of curiosity, and now I enjoy every moment that I develop in it, every stage of learning, success or error, always trying to find the best version of myself. Belonging to the world of technology allows me to be myself and create new things without limiting my imagination 👩🏻‍🚀🚀
                    </p>
                    <p>"El mejor modo de predecir el futuro es inventándolo" - Alan Kay</p>
                </div>
                <div className="my-image">
                    <div className="card">
                        <div className="Text-card">
                            <div className="container-btn"><Btn href="https://www.linkedin.com/in/alizz-doblezz/"
                                texto="More about me"
                                className='btn-az'></Btn></div>
                        </div>
                        <img src={cuatro} alt="sho" className="img-pc"></img>
                        <img src={seis} alt="sho" className="img-mobile"></img>
                    </div>
                </div>

            </section>
            <Footer></Footer>
        </section>
    );
}

export default Aboutme;