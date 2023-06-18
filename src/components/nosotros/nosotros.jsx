import MenuNavBar from '../layouts/Header/navBarMenu';
import Footer from '../layouts/Footer/footer';
import Card from 'react-bootstrap/Card';

const Nosotros = () => {
    return (
        <div>
            <MenuNavBar/>
                <div className='cardServicios'> 
                    <div className="container">
                        <div className="row">
                            <Card className="text-center">
                                <Card.Header>
                                    <h1>Nosotros</h1>  
                                </Card.Header>

                                <Card.Body>
                                    <div className='mb-3'>
                                    <h1> Misión</h1>
                                    "Satisfacer las necesidades de nuestros clientes durante la duración del proyecto. Entregamos un servicio de alta calidad, regido por exigentes estándares en seguridad, calidad y puntualidad" 
                                    </div>
                                    <div className='mb-3'>
                                      <h1> Visión</h1>
                                    "Mantener a lo largo del tiempo el sello que nos caracteriza, como una empresa integral y detallista en el ámbito de la construcción y la limpieza, preocupándonos por la disminución de residuos, para así convertirnos en una empresa ambientalmente responsable, lograr que nuestro personal se sienta motivado y orgulloso de pertenecer a VP Construcciones, corregir debilidades para siempre poder entregar un mejor servicio, logrando la
                                     satisfacción de nuestros clientes. Además de ser una empresa mundialmente reconocida por su compromiso, calidad e innovación en cada uno de nuestros procesos" 
                                    </div>
                                </Card.Body>    
                            </Card>
               
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
    }

export default Nosotros;