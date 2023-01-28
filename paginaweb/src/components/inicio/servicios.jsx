import "../../styles/inicio/servicios.css";
import Card from 'react-bootstrap/Card';

// Limpieza Industrial, Obras Civiles, Residuos Peligrosos, Aseo y sostenibilidad, Mantención de terrenos

const Servicios = () => {
    return (
        <div className="cardServicios">
          <div className="container">
            <div className="row">
              
              <Card className="text-center">
                <Card.Header>
                  <div className="servicios">
                    <h1>Servicios</h1>  
                  </div>
                </Card.Header>
                <Card.Body >
                  <div className="serviciosPostTitulo">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
                  </div>

                  <div className="container">
                    <div className="row ">
                      <div className="containerOvals">
                        <Card className="col-md-4 cardServices">
                              <strong className="tittleServices">
                                Limpieza Industrial  
                              </strong>
                            
                        </Card>
                        
                        <Card className="col-md-4 cardServices">
                            
                              <strong className=" tittleServices">
                              Obras Civiles  
                              </strong>
                            
                            
                        </Card>

                        <Card className="col-md-4 cardServices">
                              
                                <strong className="tittleServices">
                                  Residuos Peligrosos
                                </strong>
                              
                              
                            
                        </Card>
                        <Card className="col-md-4 cardServices">
                              <strong className="tittleServices">
                              Aseo y sostenibilidad  
                              </strong>
                            
                        </Card>
                       
                        <Card className="cardServices col-md-4">
                              <strong className="tittleServices">
                            Mantención de terrenos 
                              </strong>
                            
                        </Card>
                       
                    </div>

                  
                </div> 
                  
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
           
                    )
                      }
export default Servicios;