import React, { useState, useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import logo from '../../public/log.png';
import logoo from '../../public/ic.png';
import nFondo from '../../public/logoo.png';
import utna from '../../public/utnaa.png';
import utma from '../../public/utmaa.png';
import icphub from '../../public/icphub.png';
import z3 from '../../public/z3.jpeg';
import df from '../../public/df.png';
import '../components/style.css';

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
    <div className="body-container">
      <img src={logo} alt="Logo" className="logo" />

      <div className="background-image-container">
        <div className="heading">
        <img src={nFondo} alt="Logo Overlay" className="logo-overlay"  />


        </div>
      </div>
      <br />
      <br />

      <button className="customb" onClick={handleLogin}>
        Login with Internet Identity
      </button>
      <div className="footer">
      <img className ="logoo" src={logoo} alt="Logo" />
      <img src={utna} alt="Logo" className="utna" />
  <img src={utma} alt="Logo" className="utma" />
  <img src={z3} alt="Logo" className="z3" />
  <img src={icphub} alt="Logo" className="icph" />
  <img src={df} alt="Logo" className="df" />
</div>
    </div>
  );
};

export default Login;
