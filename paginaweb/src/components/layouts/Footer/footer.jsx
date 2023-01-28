import React from 'react';	
import "../../../styles/footer/footer.css";
import {Facebook, Twitter, Instagram, Telephone, Envelope, Geo} from 'react-bootstrap-icons';


const Footer = () => {
    return (
        
            <footer className='footer'>
                <div className="container">
                    <div className="row">
                     
                        <div className="col-md-4 my-auto">
                            <h3 className='socialNetworkTitle'>Redes sociales</h3>
                            <ul className='socialNetwork'>
                                <li className='socialNetworkItem'><a href="#"><Facebook/></a></li>
                                <li className='socialNetworkItem'><a href="#"><Twitter/></a></li>
                                <li className='socialNetworkItem'><a href="#"><Instagram/></a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 placeholderFooter">
                            PLACEHOLDER
                            </div>
                        <div className="col-md-4">
                           
                            <ul>
                                <li className='contactTittleFoot'>Contacta</li>
                                <li ><Telephone/>123456789</li>
                                <div className='contactItem'></div>
                                <li ><Envelope/>contacto@vpconstrucciones.cl </li>
                                <div className='contactItem'></div>
                                <li ><Geo/>Avenida Siempreviva 742</li>

                             </ul>   

                        </div>                                    
                    </div>
                </div>    
            </footer>
        
        
    );
}


export default Footer;