import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { TeamsContextProvider } from "./context/TeamsContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TeamsContextProvider>
      <App />
    </TeamsContextProvider>
  </React.StrictMode>
)
