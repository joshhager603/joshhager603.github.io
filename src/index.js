import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// inspo:
// https://andy8647.com/
// https://protfolio-woad.vercel.app/#work
// https://amberlai.com/
// https://ventuar.com/

/* 
  Sections:
    About Me
    Skills
    Work Experience
    Portfolio
    Contact
*/


// deploy with npm run deploy


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
