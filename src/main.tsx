import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './global.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>,
)