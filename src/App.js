import React from "react";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Tournament from "./pages/Tournament";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/tournament" element={<Tournament/>} />
    </Routes>
    </>
  );
}

export default App;
