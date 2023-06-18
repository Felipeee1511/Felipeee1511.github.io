import "../../styles/inicio/servicios.css";
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

import CarouselSlider from "./carouselSlider"

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
                 
                      
     
    
      
     
                        
                   
                      
             
         
                  
                
   
                 <CarouselSlider/>
                       
                        
                        

                       
                        
                       
                        
                       
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