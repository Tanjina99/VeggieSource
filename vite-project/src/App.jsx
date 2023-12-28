import React from "react"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import { Routes, Route } from 'react-router-dom'
import Signin from "./pages/Signin"


function App() {

  return (
    <Routes>  
    <Route path="/" element={<Home />} /> 
    <Route path="/home" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Signin></Signin>}></Route>
    </Routes>
  )
}

export default App