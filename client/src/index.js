import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './styles/main.scss'
import App from './App'

createRoot(document.getElementById('root')).render(<App />)