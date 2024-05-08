// import React from 'react'
// import App from './App.tsx'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
