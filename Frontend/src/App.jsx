import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/NavBar';
import AddUser from './components/AddUser';
import GetUser from './components/GetUser';
import Home from './components/Home';

function App() {
  

  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<AddUser/>} />
      <Route path="/get" element={<GetUser/>} />
    </Routes>
  </Router>
  )
}

export default App
