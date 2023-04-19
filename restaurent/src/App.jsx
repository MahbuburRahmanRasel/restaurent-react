import { useState } from "react";

import "./App.css";
import { Button } from "flowbite-react";

import { Outlet } from "react-router-dom";
import Navbar from "./assets/components/Navbar";


function App() {
  return (
    <div className="App">
     <Navbar />
     <Outlet />
    </div>
  );
}

export default App;
