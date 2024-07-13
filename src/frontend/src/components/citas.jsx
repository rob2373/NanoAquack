import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../components/citas.css'; // Importa el archivo de estilos CSS
import logo from '/log.png';
import logoo from '/ic.png';
import nFondo from '/logoo.png';
import utna from '/utnaa.png';
import utma from '/utmaa.png';
import icphub from '/icphub.png';
import z3 from '/z3.jpeg';
import df from '/df.png';
import citas from '/ci.png';
import out from '/out.png';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    dateC: '',
    Litros: '',
    all: '',
    gps: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar si el formulario ha sido enviado

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar si todos los campos requeridos están completos
    if (formData.companyName && formData.email && formData.phoneNumber && formData.municipality !== 'Seleccione un municipio') {
      // Aquí puedes realizar acciones como enviar los datos a una API
      console.log(formData);
      // Marcar el formulario como enviado
      setFormSubmitted(true);
    } else {
      alert('Por favor complete todos los campos antes de enviar el formulario.');
    }
  };

  const handleLogout = () => {
    // Aquí puedes añadir la lógica para el logout de Internet Identity
    // Por ejemplo, limpiar tokens de sesión, redirigir a la página de login, etc.
    console.log("Logout de Internet Identity");
    // Redirigir a la página de login o a la página de inicio
    window.location.href = 'Login'; // Reemplaza con la ruta correcta a tu página de login
  };

  // Redirigir si el formulario ha sido enviado correctamente
  if (formSubmitted) {
    return <Redirect to="" />; // Reemplaza "/ruta-de-tu-pagina" con la ruta real a donde deseas redirigir
  }

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
      <Container className="citas-form-container">
        <h2 className="form-title">Registro de Citas</h2>
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group controlId="dateC">
            <br />
            <Form.Label className="form-label">Fecha de cita</Form.Label>
            <br />
            <Form.Control
              type="text"
              placeholder="Ingrese la fecha en que desea la cita"
              name="dateC"
              value={formData.dateC}
              onChange={handleChange}
              className="form-input"
              required
            />
            <br />
          </Form.Group>
      
          <Form.Group controlId="Litros">
            <Form.Label className="form-label">Litros Aproximados</Form.Label>
            <br />
            <Form.Control
              type="string"
              placeholder="Ingrese cuantos litros desea"
              name="Litros"
              value={formData.Litros}
              onChange={handleChange}
              className="form-input"
              required
            />
          </Form.Group>

          <Form.Group controlId="all">
            <Form.Label className="form-label">Total:</Form.Label>
            <br />
            <Form.Control
              type="string"
              placeholder="$7000"
              name="all"
              value={formData.all}
              onChange={handleChange}
              className="form-input"
              required
            />
          </Form.Group>

          <Form.Group controlId="gps">
            <Form.Label className="form-label">Ubicación exacta</Form.Label>
            <br />
            <Form.Control
              type="text"
              placeholder='La Estación Rincón, Avenida Universidad 1001, El Potrero, 20400 Rincón de Romos, Ags.'
              name="gps"
              value={formData.gps}
              onChange={handleChange}
              className="form-input"
              required
            />
          </Form.Group>
        </Form>
        <br />
        <Button variant="primary" type="submit" className="submit-button">
          Registrar cita
        </Button>

        <div className="footer">
          <img className="logoo" src={logoo} alt="Logo" />
          <img src={utna} alt="Logo" className="utna" />
          <img src={utma} alt="Logo" className="utma" />
          <img src={z3} alt="Logo" className="z3" />
          <img src={icphub} alt="Logo" className="icph" />
          <img src={df} alt="Logo" className="df" />
        </div>
      </Container>
    </body>
  );
};

export default RegisterForm;
