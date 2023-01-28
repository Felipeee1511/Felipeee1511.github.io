import MenuNavBar from '../layouts/Header/navBarMenu';
import Footer from '../layouts/Footer/footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const FormularioContacto = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_fjrh7be', 'template_u52iqzc', form.current, 'V5kIGTyGzF4wsTOaH')
        .then((result) => {
            swal({
                title: "Mensaje enviado satisfactoriamente.",
                text: "Respuesta del servidor: " + result.text,
                icon: "success",
                button: "Continuar",
              });
            console.log(result.text);

        }, (error) => {
            console.log(error.text);
            swal({
                title: "Error al enviar el mensaje.",
                text: "Respuesta del servidor: " + error.text,
                icon: "error",
                button: "Continuar",
            })

        });
    }
    return(
        <div>
            <MenuNavBar/>
                <div className='cardServicios'>
                    <div className="container">
                        <div className="row">
                            <Card>
                                <Card.Header className='text-center content-center'><h1>Contáctanos</h1>  </Card.Header>
                                <Card.Body>
                            <Form ref={form} onSubmit={sendEmail}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1" >@</InputGroup.Text>
                                    <Form.Control type="text" placeholder="Correo electrónico" name="user_email"/>
                                </InputGroup>
                            <Form.Label htmlFor="basic-url">Nombre</Form.Label>
                            <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                            </InputGroup.Text>
                            <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Nombre' name="user_name" />
                            </InputGroup>
                       
                            <Form.Label htmlFor="basic-url">Apellido</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    
                                </InputGroup.Text>
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Apellido' />
                            </InputGroup>
                            
                            <InputGroup className="mb-3">
                            <InputGroup.Text>Comentario</InputGroup.Text>
                                <Form.Control as="textarea" aria-label="Comentario" name="message" />
                            </InputGroup>
                            
                         
                            <div>
                                
                                <Button variant="primary" type="submit" value="Send">
                                    Submit
                                </Button>
                            </div>
                            
                    </Form> 
                    <div className="container">
                        <div className="row">
                            <div className='col-md-3'>
                                <img src="https://images.vexels.com/media/users/3/141831/isolated/preview/cfc7d87575b1671aa844a4cf418b9d2c-certificado-redondeado-rojo.png" 
                                alt="certificado"
                                width="300"
                                height="300"/>
                            </div>
                            <div className='col-md-3'>
                                <img src="https://images.vexels.com/media/users/3/141831/isolated/preview/cfc7d87575b1671aa844a4cf418b9d2c-certificado-redondeado-rojo.png" 
                                alt="certificado"
                                width="300"
                                height="300"/>
                            </div>
                            <div className='col-md-3'>
                                <img src="https://images.vexels.com/media/users/3/141831/isolated/preview/cfc7d87575b1671aa844a4cf418b9d2c-certificado-redondeado-rojo.png" 
                                alt="certificado"
                                width="300"
                                height="300"/>
                            </div>
                        </div>
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

export default FormularioContacto;