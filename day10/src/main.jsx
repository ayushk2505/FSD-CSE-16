import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import ImageSlider from './ImageSlider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter />
    <ImageSlider />
  </StrictMode>,
)
