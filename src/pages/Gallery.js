import React,{useState} from "react";
import Footer from "../components/Footer";
import Galleryphotos from "../components/Galleryphotos";
import Navbar from '../components/Navbar';

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
    {loading?(
      <>
      <div className="w-screen h-screen flex justify-center items-center bg-[#172027]">
          <img alt="loader" className="h-fit w-fit" src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1666186569/0_U2RiSXJx8U9K4thZ_vsmfww.gif" />
        </div>
      </>
    ):(<>
    <div className="bg-[#111a21] w-screen h-fit">
      <Navbar/>
      <Galleryphotos />
      <Footer/>
    </div></>)}
    </>
  );
};

export default Gallery;
