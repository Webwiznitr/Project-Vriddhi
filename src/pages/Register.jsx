import React from "react";
import Navbar from "../components/Navbar";
function Register() {
  return (
    <>
      <div className="bg-[#111a21] h-full min-h-screen text-white flex flex-col content-evenly">
        <div className="flex flex-col w-full h-screen">
          <Navbar />
          <div className="w-full flex justify-center items-center flex-col">
            <div className="text-[60px] w-[60%] flex justify-center items-center text-center">
              Registrations will begin on 12/10/2022 at 10:00 am IST
            </div>
            <div className="w-full my-16 flex justify-evenly items-center">
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
        </div>
      </div>
    </>
  );
}

export default Register;
