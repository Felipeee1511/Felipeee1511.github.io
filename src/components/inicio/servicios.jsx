import { CardGroup } from "react-bootstrap";
import "../../styles/inicio/servicios.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-grid-carousel'

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

                  <div className="container cardServicios">
                    <div className="row ">
                      <div className="containerOvals">
                 
                      <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
      <Card className="cardServices">
                              <strong className="tittleServices">
                                Limpieza Industrial  
                              </strong>
                            
                        </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card className="cardServices">
                            
                            <strong className=" tittleServices">
                            Obras Civiles  
                            </strong>
                          
                          
                      </Card> 
      </Carousel.Item>
      <Carousel.Item>
      <Card className="cardServices">
                              
                              <strong className="tittleServices">
                                Residuos Peligrosos
                              </strong>
                            
                            
                          
                      </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card className="cardServices">
                              <strong className="tittleServices">
                              Aseo y sostenibilidad  
                              </strong>
                            
                        </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card className="cardServices">
                              <strong className="tittleServices">
                            Mantención de terrenos 
                              </strong>
                            
                        </Card>
      </Carousel.Item>
    </Carousel>
                   
                        
                  
                  
                

                
                       
                        
                        

                       
                        
                       
                        
                       
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