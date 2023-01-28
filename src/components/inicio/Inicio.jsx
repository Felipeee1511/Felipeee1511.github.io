import MenuNavBar from '../layouts/Header/navBarMenu';
import Carousel from 'react-bootstrap/Carousel';
import Servicios from './servicios';
import Footer from '../layouts/Footer/footer';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import '../../styles/inicio/inicio.css'
const Inicio = () =>{
  

  return (
    <div>
      <MenuNavBar/>

      <Carousel>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner1}
              alt="First slideee"
              height="500"
            />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
            height="500"
            />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
          height="500"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Servicios/>
    <Footer/>
    </div>

    
  )
}
export default Inicio;