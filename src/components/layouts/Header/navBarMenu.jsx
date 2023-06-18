import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../../styles/header/navBar.css";
import Logo from "../../../assets/logo.png";
import Logo1 from "../../../../logo1.png"

function navBarMenu () {
  return (
    <Navbar collapseOnSelect expand="lg"   sticky="top" className='navBar'>
      <Container className='logoContainer'>
        <Navbar.Brand href="/"><img src={Logo1} width={180} height={94} alt="LogoVP-Construcciones"/></Navbar.Brand>
        </Container>
        
         <Container className='itemsContainer'>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/about_us" className="itemMenu">Nosotros</Nav.Link>
            <Nav.Link href="/services" className="itemMenu">Servicios</Nav.Link>
            
            <Nav.Link href="/contact" className="itemMenu">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
       
      
    </Navbar>
  )
}
export default navBarMenu;