import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header/Header.jsx'
import Hero from './components/hero/Hero.jsx'
import Home from './pages/home/Home.jsx'
import Menu from './pages/menu/Menu.jsx'
import Game from './pages/game/Game.jsx'
import Checkbox from './components/checkbox/Checkbox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
