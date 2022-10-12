import React from 'react'

function Tourcard(props) {
  const Select = () => {
    props.select({
      name: props.name,
      img: props.img,
      info: props.info,
    });
  }
  return (
    <div onClick={Select} className="tourcard w-full h-[100%] gradient flex flex-col justify-center items-center cursor-pointer">
        <img className='w-[70%]' alt="tourimg" src={props.img}/>
        <span className='tourname'>{props.name}</span>
    </div>
  )
}

export default Tourcard