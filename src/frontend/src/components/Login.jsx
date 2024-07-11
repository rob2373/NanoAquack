// src/components/Login.js
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
    <div>
      <button onClick={handleLogin}>Login with Internet Identity</button>
    </div>
  );
};

export default Login;
