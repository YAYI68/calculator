import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CalcProvider from './components/Context/CalcContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalcProvider><App/></CalcProvider>
  </React.StrictMode>,
)
