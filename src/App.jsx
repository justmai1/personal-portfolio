import { useState } from 'react'
import './App.css'
import "../css/style.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar, Showcase, Me, Experience, Footer } from './portfolio'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
         <div>
          <Navbar/>
          <Showcase/>
          <Me/>
          <Experience/>
          <Footer/>
         </div>
        }/>
      </Routes>
    </Router>
  )
}

export default App
