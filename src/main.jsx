import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import CaptainContext from './context/CaptainContext.jsx'
import {BrowserRouter} from "react-router-dom";
createRoot(document.getElementById('root')).render(
    <CaptainContext>
      <UserContext>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </UserContext>
    </CaptainContext>
)
