import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { AuthProvider } from './contexts/AuthContext'
import { GameCardProvider } from './contexts/GameCardContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <GameCardProvider>
        <App />
      </GameCardProvider>
    </AuthProvider>
  </React.StrictMode>
)
