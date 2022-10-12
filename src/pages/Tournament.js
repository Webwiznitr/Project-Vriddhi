import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Tourcard from '../components/Tourcard';
import Tourdata from '../components/Tourdata';
function Tournament() {
    const [selected, setselected] = useState(false)
    const [data, setdata] = useState({})
    const Selected = (props) => {
        setselected(true);
        setdata(props);
        console.log(data);
    }
  return (
    <>
    <div  className="bg-[#111a21] h-fit min-h-screen text-white flex flex-col content-evenly">
        <div className='flex flex-col w-full h-screen'>
        <Navbar/>
            <div className='w-full h-[10%] flex justify-center items-center'>
                <div className='w-1/2 h-[90%] border border-white text-[70px] tracking-widest text-center mt-0 flex justify-center items-center'> TOURNAMENT </div>
            </div>
            <div className='w-full h-[90%] flex flex-row'>
                <div className='w-[60%] h-full flex justify-center items-center' >
                    <div className='w-[80%] h-[97%] border border-white grid grid-cols-3 gap-[5px] p-1' >
                        {Tourdata.map((tour)=>{
                            return(
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
                <div className='w-[40%] h-full flex justify-center items-center' >
                    <div className='w-[90%] h-[90%] border border-white flex justify-center items-center' >
                    {selected ? <>
                        <div className='w-[98%] h-[98%] border-[8px] border-white'>
                        {/* <div className='flex'> */}
                            <img src={data.img} alt="sport" className='relative -top-5 -left-5 w-[50%]'></img>
                            <div className='w-[50%] h-1/2 relative -top-5 -right-0'>
                                DATE: TBA
                            </div>
                        {/* </div> */}
                        </div>
                    </> : 
                        <img src="https://res.cloudinary.com/dcbco6i8s/image/upload/v1664966819/IMG_20221003_211203_621_beutqw.png" alt="background" className='w-[90%]'></img>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tournament;