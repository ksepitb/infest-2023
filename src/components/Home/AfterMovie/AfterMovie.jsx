import React from 'react'

// import CSS
import './AfterMovie.css'

// import video
import Video from'../../../assets/dokumentasi-2022/videos/Aftermovie.mp4'

const AfterMovie = () => {
  return (
    <div className='after-movie'>
      <div className='video'>
        <video controls='controls' width="100%" height="100%">
          <source src={Video} type="video/mp4"/>
        </video>  
      </div>
      <p>After Movie INFEST 2022</p>
    </div>
  )
}

export default AfterMovie