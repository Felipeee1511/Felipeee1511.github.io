import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagenServ1 from "../../assets/imagenServ1.png";
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
          <Card className="cardServices">
                            
                            <strong className=" tittleServices">
                            Obras Civiles  
                            </strong>
                          
                          
                      </Card> 
         
          </div>
          <div>
          <Card className="cardServices">
                              
                              <strong className="tittleServices">
                                Residuos Peligrosos
                              </strong>
                            
                            
                          
                      </Card>
          </div>
          <div>
          <Card className="cardServices">
                              <strong className="tittleServices">
                              Aseo y sostenibilidad  
                              </strong>
                            
                        </Card>
          </div>
          <div>
          <Card className="cardServices">
                              <strong className="tittleServices">
                            Mantención de terrenos 
                              </strong>
                            
                        </Card>
          </div>
          <div>
          <Card className="cardServices">
                              <strong className="tittleServices">
                                Limpieza Industrial  
                              </strong>
                            
                        </Card>
          </div>
         
        </Slider>
      </div>
    );
  }
}