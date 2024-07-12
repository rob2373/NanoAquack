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
