import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// react   StrictMode 严格模式 执行一次 检验一遍
createRoot(document.getElementById('root')).render(
 
    <App />

)
