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
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                                    </div>
                                    <div className='mb-3'>
                                      <h1> Visión</h1>
                                    "Lorem ipsum dolor sit samet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
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