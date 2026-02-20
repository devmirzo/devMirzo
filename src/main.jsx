import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Mana buni import qiling
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <HelmetProvider>

    <BrowserRouter> 
      <App />
    </BrowserRouter>
    </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>,
)