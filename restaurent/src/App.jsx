import { createContext, useState } from "react";

import "./App.css";

import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./assets/components/Navbar";

export const Menus = createContext([])

function App() {

  const menus = useLoaderData()
  console.log(menus)

  return (
    <div className="App">
      <Menus.Provider value={menus}>
     
     <Outlet />
     </Menus.Provider>
    </div>
  );
}

export default App;
