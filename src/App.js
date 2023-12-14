import React, { useState } from "react";
import { publicRoutes } from './Routes/routes.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AvatarBar from "./components/avatar-bar/avatar-bar.jsx";


function App() {
  document.querySelector("body").setAttribute("data-theme", "dark");

  return (
     <AvatarBar>

     </AvatarBar>
  );
}

export default App;
