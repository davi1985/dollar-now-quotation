import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { GlobalStyle } from './commons/styles/global';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
      <ToastContainer />
      <GlobalStyle />
    </React.StrictMode>,
  );
}
