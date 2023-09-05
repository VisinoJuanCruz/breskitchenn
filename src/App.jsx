import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Publicity from './components/Publicity/Publicity.jsx'
import SobreMi from './components/SobreMi/SobreMi.jsx'
import {Routes,Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
 

  return (
    
    
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Publicity />}/>
        <Route path="/sobre-mi" element={<SobreMi/>}/>
      </Routes>
      
    </div>
    
  )
}

export default App
