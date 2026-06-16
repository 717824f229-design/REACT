
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React from 'react';
import Home from "./component/Home";
import Result from "./component/Result";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:regno" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
