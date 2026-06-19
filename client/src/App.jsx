import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './componentes/layout/Layout'
import Dashboard from './paginas/Dashboard'
import Dispositivos from './paginas/Dispositivos'
import Historico from './paginas/Historico'
import Usuarios from './paginas/Usuarios'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dispositivos" element={<Dispositivos />} />
          <Route path="historico" element={<Historico />} />
          <Route path="usuarios" element={<Usuarios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
