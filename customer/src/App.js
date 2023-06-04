import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./common/layout/Layout"
import Home from "./pages/home/Home"

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
