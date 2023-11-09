import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './MainSection/routes/routes.jsx'
import AuthProvider from './MainSection/auth/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async';


const helmetContext = {};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
