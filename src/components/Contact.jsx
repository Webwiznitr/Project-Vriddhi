import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <div className="text-white bg-[#111a21] py-56">
      <h1 className="text-3xl text-center font-bold pb-3">CONTACT INFO</h1>
      <div className="w-24 mx-auto bg-white border-white border-2 mb-12"></div>

      <div className="mx-auto max-w-screen-md px-4 space-y-5">
        <div className="flex space-x-1">
          <LocationOnIcon />
          <p>
            National Insitute of Technology Rourkela, Jindal Colony, Udit Nagar,
            Rourkela, Odisha 769001
          </p>
        </div>
        <div className="flex space-x-1">
          <EmailIcon />
          <div>
            <a href="mailto:nitr.vriddhi@gmail.com">nitr.vriddhi@gmail.com</a>
          </div>
        </div>
        <div className="flex space-x-1">
          <CallIcon />
          <p>Subham Gourav Biswal: 9337067360</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://m.facebook.com/100054258680169/">
            <FacebookIcon />
          </a>
          <a href="/">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/vriddhi.nitr/?hl=en">
            <InstagramIcon />
          </a>
          <a href="/">
            <YouTubeIcon />
          </a>
          <a href="/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
