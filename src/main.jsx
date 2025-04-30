import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ResultProvider } from './context/ResultContext';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResultProvider>
      <App />
    </ResultProvider>
  </StrictMode>,
)
