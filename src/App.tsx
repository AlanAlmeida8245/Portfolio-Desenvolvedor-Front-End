import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRoutes from './components/Routes/AppRoutes'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <div className="App">
        <Navbar />
        <AppRoutes />
    </div>
  )
}

export default App
