import Btn from "../components/buttons/Buttons";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import '../studies.css'

function Studies() {
    return (
        <div>
            {/* <h1>Página de estudios del portafolio</h1> */}
            <Navbar></Navbar>
            <header className="studies-header">
                <div className="container-studies">
                    <div className="cards card-1">
                        <img src="http://2.bp.blogspot.com/-LL-4fdK3LFI/TZzXexkCPYI/AAAAAAAAAAU/cD448_hsj3g/w1200-h630-p-k-no-nu/50553_8199639854_7595387_n.jpg" alt="Person" className="card__image" />
                        <p className="card__name">liceo Contadora </p>
                        <div className="grid-container">
                            <div className="grid-child-followers">
                                <br></br>
                                Bachiller Acádemico
                            </div>

                        </div>

                        <Btn href="https://www.linkedin.com/in/alizz-doblezz/"
                            texto="More"
                            className='btn-az'></Btn>


                    </div>
                    <div className="cards card-2">
                        <img src="data:image/png;base64,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" alt="Person" className="card__image" />
                        <p className="card__name">Smart Academy</p>
                        <div className="grid-container">

                            <br></br>

                            <div className="grid-child-followers">
                                Ingles
                            </div>

                        </div>
                        <Btn href="https://www.linkedin.com/in/alizz-doblezz/"
                            texto="More"
                            className='btn-az'></Btn>

                    </div>
                    <div className="cards card-3">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHuCBhw0C4l-Q/company-logo_200_200/0/1589311920034?e=2147483647&v=beta&t=mCjyQt7SjoLmKH4S2qvpiZOszS0Ox7ihaUAYNYR_RYE" alt="Person" className="card__image" />
                        <p className="card__name">Kuepa EduTech</p>
                        <div className="grid-container">

                            <br></br>


                            <div className="grid-child-followers">
                                Tecnólogo en Digitación
                            </div>

                        </div>

                        <Btn href="https://www.linkedin.com/in/alizz-doblezz/"
                            texto="More"
                            className='btn-az'></Btn>

                    </div>
                </div>
            </header>
            <Footer></Footer>
        </div>
    );
}

export default Studies;