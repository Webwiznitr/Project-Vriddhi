import React from "react";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <div className="bg-[#111a21] min-h-screen h-[100%] text-white flex flex-col content-evenly">
        <Navbar />

        <div className="flex justify-around landing">
          <div className="w-1/2 text flex flex-col p-1 lg:pl-2 lg:w-3/5 mt-20 mb-40 md:ml-3">
            <div className="text-2xl lg:text-4x sports">Sports Fest</div>
            <div className="text-4xl lg:text-6xl sports lg:mt-2">VRIDDHI'2022</div>
            <div className="text-md lg:text-xl sports lg:mt-2">
              E-sports is a place for all of you, so don't hold back. Embrace
              the gamer in you as you will have the most fantastic time during
              Vriddhi 2021 this year.
            </div>
          </div>
          <div className="w-1/2 img bg-gradient-to-r from-cyan-[rgb(26,26,50)] to-[rgb(26,33,83)] rounded-100 backdrop-opacity-5 h-[80vh] ">
            <img
              src="https://res.cloudinary.com/dcbco6i8s/image/upload/v1664966819/IMG_20221003_211203_621_beutqw.png"
              className="h-[100%] w-[80%] min-w-[250px]"
              alt="background"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
