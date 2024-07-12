import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../components/registro.css'; // Importa el archivo de estilos CSS
import logo from '../../public/log.png';
import logoo from '../../public/ic.png';
import nFondo from '../../public/logoo.png';
import utna from '../../public/utnaa.png';
import utma from '../../public/utmaa.png';
import icphub from '../../public/icphub.png';
import z3 from '../../public/z3.jpeg';
import df from '../../public/df.png';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phoneNumber: '',
    municipality: 'Seleccione un municipio',
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

  // Redirigir si el formulario ha sido enviado correctamente
  if (formSubmitted) {
    return <Redirect to="" />; // Reemplaza "/ruta-de-tu-pagina" con la ruta real a donde deseas redirigir
  }

  return (
    <body>  
    <div className="body-container" style={{height: '50px'}}>
      <img src={logo} alt="Logo" className="logo" />
      </div>
    <Container className="register-form-container">
      <h2 className="form-title">Registro de Empresa</h2>
      <Form onSubmit={handleSubmit} className="form">
        <Form.Group controlId="companyName">
        <br />
      
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
             <br />
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
        <br />
       
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
     
       
      </Form>
      <br />
     
      <Button variant="primary" type="submit" className="submit-button">
          Registrar
        </Button>

        <div className="footer">
      <img className ="logoo" src={logoo} alt="Logo" />
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