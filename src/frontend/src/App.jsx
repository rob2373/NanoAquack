// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';

const App = () => {
  const [identity, setIdentity] = useState(null);

  const handleLogin = (identity) => {
    setIdentity(identity);
  };

  return (
    <div>
      {identity ? (
        <div>
          <h1>Welcome, you are logged in!</h1>
          {/* Puedes utilizar la identidad del usuario para realizar acciones autenticadas */}
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
