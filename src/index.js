import App from './App';
import ContextProvider from './ContextProvider'
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
  <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

