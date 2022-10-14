import React from "react";
import Footer from "../components/Footer";
import Galleryphotos from "../components/Galleryphotos";
import Navbar from '../components/Navbar';

const Gallery = () => {
  return (
    <div className="bg-[#111a21] w-screen h-fit">
      <Navbar/>
      <Galleryphotos />
      <Footer/>
    </div>
  );
};

export default Gallery;
