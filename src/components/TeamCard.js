import React from 'react';


const TeamCard = ({name,img,team}) => {
  
  
  return (
    <div className=' text-white p-4 flex flex-col items-center'>
         <div className='flex justify-center mt-[8px] text-[24px] lg:text-[26px] text-yellow-400 mb-4 capitalize'>{team}</div>
         <div className='w-[240px] h-[240px] color'><img src={img}/></div>
         <div className='flex justify-center mt-[12px] text-[24px] lg:text-[24px] text-orange-400 capitalize'>{name}</div>

    </div>
  )
}

export default TeamCard;
