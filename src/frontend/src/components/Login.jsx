import React, { useState, useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';

const Login = ({ onLogin }) => {
  const [authClient, setAuthClient] = useState(null);

  useEffect(() => {
    const initAuthClient = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);
      if (await client.isAuthenticated()) {
        onLogin(client.getIdentity());
      }
    };
    initAuthClient();
  }, [onLogin]);

  const handleLogin = async () => {
    await authClient.login({
      identityProvider: 'https://identity.ic0.app/#authorize',
      onSuccess: () => {
        onLogin(authClient.getIdentity());
      }
    });
  };

  return (
    <div style={{ backgroundColor: '#A6E1FA', padding: '10px 0', textAlign: 'center', color: '#ffffff' }}>
      <h1>Mi Sitio Web</h1>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login with Internet Identity
      </button>
    </div>
  );
};

export default Login;




