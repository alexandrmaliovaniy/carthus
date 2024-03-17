import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import reportWebVitals from "./reportWebVitals";

const arr = new Array(10000).fill(0);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)



// reportWebVitals(console.log);