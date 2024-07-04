import React from 'react'

const Video = () => {
  return (
    <video className="h-[600px] w-[340px] rounded-lg mt-6 md:float-right md:ml-6 md:mb-6" controls autoPlay>
    <source src="https://www.unsa.edu.pe/wp-content/uploads/2022/11/video-villasis.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  )
}

export default Video