import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.css";

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-n3m8z2s3le8ld0ta.us.auth0.com"
    clientId="dqzucPjmiVKKiRO2Msw3ps8SUE1APTEL"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);