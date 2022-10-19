import React, {useState} from "react";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Tournament from "./pages/Tournament";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Team from "./pages/Team";
function App() {
  const [loading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  return (
    <>
    {loading ? 
      (<>
        <div className="w-screen h-screen flex justify-center items-center bg-[#172027]">
          <img alt="loader" className="h-fit w-fit" src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1666186569/0_U2RiSXJx8U9K4thZ_vsmfww.gif" />
        </div>
      </>)
     : 
      (<Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<Team/>} />
      </Routes>)}
    </>
  );
}
export default App;
