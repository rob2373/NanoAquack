import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Citas from './citas'; // Asegúrate de que la ruta sea correcta
import '../components/registro.css'; // Importa el archivo de estilos CSS
import logo from '/log.png';
import logoo from '/ic.png';
import utna from '/utnaa.png';
import utma from '/utmaa.png';
import icphub from '/icphub.png';
import z3 from '/z3.jpeg';
import df from '/df.png';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phoneNumber: '',
    municipality: 'Seleccione un municipio',
  });

  const [redirectToCitas, setRedirectToCitas] = useState(false); // Estado para redirigir

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.companyName && formData.email && formData.phoneNumber && formData.municipality !== 'Seleccione un municipio') {
      console.log(formData);
      setRedirectToCitas(true); // Establecer redirección
    } else {
      alert('Por favor complete todos los campos antes de enviar el formulario.');
    }
  };

  const handleButtonClick = () => {
    // Crear un objeto de evento simulado
    const simulatedEvent = {
      preventDefault: () => {},
    };

    // Llamar al handleSubmit con el evento simulado
    handleSubmit(simulatedEvent);
  };

  if (redirectToCitas) {
    return <Citas />; // Renderizar el componente de destino
  }

  return (
    <div>
      <div className="body-container" style={{ height: '50px' }}>
        <img src={logo} alt="Logo" className="logo" />
       
      </div>
      <Container className="register-form-container">
        <h2 className="form-title">Registro de Empresa</h2>
        <Form className="form">
          <Form.Group controlId="companyName">
         
            <Form.Label className="form-label">Nombre de la Empresa</Form.Label>
            <br />
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre de la empresa"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="form-input"
              required
            />
            <br />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label className="form-label">Email</Form.Label>
            <br />
            <Form.Control
              type="email"
              placeholder="Ingrese el email de la empresa"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label className="form-label">Teléfono</Form.Label>
            <br />
            <Form.Control
              type="tel"
              placeholder="Ingrese el teléfono de la empresa"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-input"
              required
            />
          </Form.Group>
          <Form.Group controlId="municipality">
            <Form.Label className="form-label">Municipio</Form.Label>
            <br />
            <Form.Control
              as="select"
              name="municipality"
              value={formData.municipality}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option disabled>Seleccione un municipio</option>
              <option>Aguascalientes</option>
              <option>Asientos</option>
              <option>Calvillo</option>
              {/* Agregar más municipios de Aguascalientes según sea necesario */}
            </Form.Control>
          </Form.Group>
          <br />
        </Form>
        <Button variant="primary" className="submit-button" onClick={handleButtonClick}>
          Registrar
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
    </div>
  );
};

export default RegisterForm;
