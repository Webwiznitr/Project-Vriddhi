import React from 'react'
import Navbar from '../components/Navbar'
function Tournament() {
  return (
    <>
    <div  className="bg-[#111a21] h-full min-h-screen text-white flex flex-col content-evenly">
        <div className='flex flex-col w-full h-screen'>
        <Navbar/>
            <div className='w-full h-1/6 flex justify-center items-center'>
                <div className='w-1/2 h-[90%] border border-white text-[70px] tracking-widest text-center mt-0 flex justify-center items-center'> TOURNAMENT </div>
            </div>
            <div className='w-full h-5/6 flex flex-row'>
                <div className='w-2/3 h-full flex justify-center items-center' >
                    <div className='w-[80%] h-[97%] border border-white' >
                        
                    </div>
                </div>
                <div className='w-1/3 h-full flex justify-center items-center' >
                    <div className='w-[90%] h-[90%] border border-white' ></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tournament;