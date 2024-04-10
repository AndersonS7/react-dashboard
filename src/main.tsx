// import React from 'react'
// import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppRouter } from './router/index.tsx'
import { DataProvider } from './context/data.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DataProvider>
    <AppRouter />
  </DataProvider>
)
