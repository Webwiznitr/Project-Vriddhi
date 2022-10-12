import React from "react";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Tournament from "./pages/Tournament";
import Register from './pages/Register';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/tournament" element={<Tournament/>} />
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
