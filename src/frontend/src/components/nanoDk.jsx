import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Asumiendo que estás usando react-bootstrap para el sistema de grid y el diseño
import logo from '/log.png';
import citas from '/ci.png';
import '../components/nd.css'

const ImageWithText = () => {
  return (
    <body>
      <div className="body-container" style={{ height: '50px' }}>
        <img 
          src={out} 
          alt="out" 
          className="out" 
          onClick={handleLogout}
           // Llama a la función de logout al hacer clic
        />
        <img src={citas} alt="citas" className="citas" />
        <img src={logo} alt="Logo" className="logo" />
      </div>
    <Container>
      <Row>
        <Col xs={6}>
          <img src="/ruta/a/tu/imagen.jpg" alt="Descripción de la imagen" style={{ maxWidth: '100%' }} />
        </Col>
        <Col xs={6}>
          <p>
            Aquí va tu texto asociado a la imagen. Puedes escribir lo que desees para describir o explicar la imagen.
          </p>
        </Col>
      </Row>
    </Container>
    </body>
  );
};

export default ImageWithText;
