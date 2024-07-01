import React from 'react'
import images from '../Images'


const Footer = () => {
  return (
    <footer className='bg-white'>
    <h4 className='font-bold text-[#053252] pt-7 px-7'>Auspician</h4>
    <img src={images.auspicios} alt="for Women In Science" className='p-3 min-w-[160px] ' />
  </footer>
  )
}

export default Footer