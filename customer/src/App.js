import React from "react"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./common/layout/Layout"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route  path='/' element={<Home />} /> 
          </Route>   
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
