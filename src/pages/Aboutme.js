import Navbar from "../components/navbar/Navbar";
import '../Aboutme.css'
import porfile from '../components/img/aboutme/90586195.jfif'

function Aboutme() {
    return (
        <section className="main_Aboutme">
            {/* <h1>Página About-me del portafolio</h1> */}
            <Navbar></Navbar>
            <div className="bg">

                <section className="container-aboutme">
                    <div className="gradient">
                        <div className="triangle">
                            <div className="my-image">
                                <img src={porfile} alt="sho"></img>
                            </div>
                        </div>
                    </div>
                    <div className="information-aboutme">
                        <p>I am 18 years old, I am starting in the world of FrontEnd I started in it just out of curiosity, and now I enjoy every moment that I develop in it, every stage of learning, success or error, always trying to find the best version of myself. Belonging to the world of technology allows me to be myself and create new things without limiting my imagination 👩🏻‍🚀🚀
                        </p>
                        <p>"El mejor modo de predecir el futuro es inventándolo" - Alan Kay</p>
                    </div>
                </section>
            </div>

        </section>
    );
}

export default Aboutme;