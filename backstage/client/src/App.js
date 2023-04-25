import React from "react";
import './App.css';
import Orders from "./components/Orders";
import Products from "./components/Products";
import Inventory from "./components/Inventory";

function App() {
  return (
    <div>
      <Orders />
      <Products />
      <Inventory />
    </div>
    
  );
}

export default App;
