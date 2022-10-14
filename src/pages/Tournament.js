import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Tourcard from "../components/Tourcard";
import Tourdata from "../components/Tourdata";
import Footer from "../components/Footer";
function Tournament() {
  const [selected, setselected] = useState(false);
  const [data, setdata] = useState({});
  const Selected = (props) => {
    setselected(true);
    setdata(props);
    console.log(data);
  };
  return (
    <>
      <div className="bg-[#111a21] min-h-screen h-[100%] text-white flex flex-col content-evenly">
        <div className="flex flex-col w-full h-screen">
          <Navbar />
          <div className="w-full h-[10%] flex justify-center items-center">
            <div className=" font-serif   w-1/2 h-[90%]  text-[50px] tracking-widest text-center mt-0 flex justify-center items-center">
              {" "}
              TOURNAMENT{" "}
            </div>
          </div>
          <div className="w-full h-[90%] flex flex-row">
            <div className="w-[60%] h-full flex justify-center items-center">
              <div className="w-[80%] h-[97%] border border-white grid grid-cols-3 gap-[5px] p-1">
                {Tourdata.map((tour) => {
                  return (
                    <Tourcard
                      name={tour.name}
                      img={tour.img}
                      info={tour.info}
                      select={Selected}
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-[40%] h-full flex justify-center items-center">
              <div className="w-[90%] h-[90%] border border-white flex justify-center items-center">
                {selected ? (
                  <>
                    <div className="w-[98%] h-[98%] border-[8px] border-white relative">
                      {/* <div className='flex'> */}
                      <div className="flex justify-center items-center">
                        <img
                          src={data.img}
                          alt="sport"
                          // className="relative -top-5 -left-5 w-[50%] h-[50%]"
                          className=" w-[40%] h-[40%]"
                        />

                        {/* <div>
                          <p>DATE: TBA</p>
                        </div> */}
                      </div>

                      <div className="mb-4 text-center">
                        <h1 className="text-3xl font-serif ">{data.name}</h1>
                      </div>
                      <div
                        className="text-sm flex justify-center items-center font-serif border-red-900  "
                        // style={{ height: "80px", overflow: "scroll" }}
                      >
                        <p style={{ height: "70px", overflowY: "scroll" }}>
                          {data.info}
                        </p>
                      </div>
                      {/* <div className='w-[50%] h-1/2 relative -top-5 -right-0'>
                                DATE: TBA
                            </div> */}
                      {/* </div> */}

                      <div className="flex justify-center text-center w-full absolute bottom-0 ">
                        <a href="https://docs.google.com/forms/d/1mflQg2fDYrMzgBlJY68I_3AJ9poyNGxSipkZ7O173dY/viewform?ts=6345b7f3&edit_requested=true">
                          <button className="text-[rgb(111,243,63)] border-[0.5px] rounded-2xl p-2 px-4 border-[rgb(111,243,63)]">
                            Register
                          </button>
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src="https://res.cloudinary.com/dcbco6i8s/image/upload/v1665694530/Untitled-1_z9peww.png"
                    alt="background"
                    className="w-[90%] h-[90%]"
                  ></img>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Tournament;
