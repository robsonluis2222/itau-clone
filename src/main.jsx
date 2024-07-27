import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home/Home.jsx'
import FisicaMobile from './routes/FisicaMobile/FisicaMobile.jsx'
import JuridicaMobile from './routes/JuridicaMobile/JuridicaMobile.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import SenhaEletronica from './routes/SenhaEletronica/SenhaEletronica.jsx'
import EmailTelefone from './routes/EmailTelefone/EmailTelefone.jsx'
import Confirmacao from './routes/Confirmacao/Confirmacao.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contapf",
        element: <FisicaMobile />
      },
      {
        path: "/contapj",
        element: <JuridicaMobile />
      },
      {
        path: "/security",
        element: <SenhaEletronica />
      },
      {
        path: "/privacity",
        element: <EmailTelefone />
      },
      {
        path: "/confirm",
        element: <Confirmacao />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
