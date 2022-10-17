import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
function Register() {
  return (
    <>
      <div className="bg-[#111a21] h-fit text-white flex flex-col content-evenly">
        <div className="flex flex-col w-full h-fit min-h-screen">
          <Navbar />
          <div className="w-full flex justify-center items-center flex-col">
            <div className="text-[60px] w-[60%] flex justify-center items-center text-center">
              {/* Registrations started */}
              <img className="w-[60%] " alt="sport" src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1665768851/kindpng_5952-01_cdkxbx.png" />
            </div>
            <div className="w-full flex justify-evenly items-center">
              <a
                href="REGISTRATION GUIDELINES-FINAL.pdf"
                download="REGISTRATION GUIDELINES-FINAL.pdf"
              >
                <button className="text-[rgb(209,113,60)] border-[0.5px] rounded-2xl p-2 px-4 border-[rgb(209,113,60)]">
                  Read guidelines
                </button>
              </a>
              <a href="https://docs.google.com/forms/d/1mflQg2fDYrMzgBlJY68I_3AJ9poyNGxSipkZ7O173dY/viewform?ts=6345b7f3&edit_requested=true">
                <button className="text-[rgb(111,243,63)] border-[0.5px] rounded-2xl p-2 px-4 border-[rgb(111,243,63)]">
                  Register
                </button>
              </a>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default Register;
