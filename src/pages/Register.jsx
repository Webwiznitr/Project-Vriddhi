import React from 'react'
import Navbar from '../components/Navbar'
function Register() {
  return (
    <>
        <div  className="bg-[#111a21] h-full min-h-screen text-white flex flex-col content-evenly">
            <div className='flex flex-col w-full h-screen'>
            <Navbar/>
            <div className='w-full flex justify-center items-center'>
            <div className='text-[60px] w-[60%] flex justify-center items-center text-center'>
                Registrations will begin on 12/10/2022 at 10:00 am IST
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register