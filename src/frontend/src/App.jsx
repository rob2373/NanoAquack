// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import RegisterForm from './components/registro'
const App = () => {
  const [identity, setIdentity] = useState(null);

  const handleLogin = (identity) => {
    setIdentity(identity);
  };

  return (
    <div>
      {identity ? (
    <div className="App">
      <header className="App-header">
        <h1>Formulario de Registro de Empresa</h1>
      </header>
      <main>
        <RegisterForm />
      </main>
    </div>
  ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
