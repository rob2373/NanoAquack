import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const RegisterForm = () => {
  // Estados para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phoneNumber: '',
    municipality: 'Seleccione un municipio', // Valor por defecto
  });
   // Función para manejar cambios en los inputs
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones como enviar los datos a una API o imprimirlos en consola
    console.log(formData);
    // Puedes añadir lógica adicional aquí, como enviar los datos a una API, etc.
  };

  return (
    <Container className="mt-5">
      <h2>Registro de Empresa</h2>
      <Form onSubmit={handleSubmit}>
        {/* Nombre de la empresa */}
        <Form.Group controlId="companyName">
          <Form.Label>Nombre de la Empresa</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre de la empresa"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Email */}
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese el email de la empresa"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Teléfono */}
        <Form.Group controlId="phoneNumber">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Ingrese el teléfono de la empresa"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Select de municipios */}
        <Form.Group controlId="municipality">
          <Form.Label>Municipio</Form.Label>
          <Form.Control
            as="select"
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
            required
          >
            <option disabled>Seleccione un municipio</option>
            <option>Aguascalientes</option>
            <option>Asientos</option>
            <option>Calvillo</option>
            <option>...</option> {/* Agregar más municipios de Aguascalientes según sea necesario */}
          </Form.Control>
        </Form.Group>

        {/* Botón de submit */}
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;