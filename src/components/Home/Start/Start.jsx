import React from 'react'

// import css
import './Start.css'

// import icons
import { AiOutlineArrowRight } from 'react-icons/ai'

const Start = () => {
  return (
    <div className='infest-start' data-aos='flip-left'>
        <div className='infest-start-scr'>
            <div></div>
            <p>Scroll To Explore <AiOutlineArrowRight /></p>
        </div>
        <div className='infest-start-title'>
            <p>Where to start?</p>
            <h1>Investing With Us Is A Smart <br /> Move For Your Future</h1>
            <a href='#investing'>Know More About INFEST</a>
        </div>
    </div>
  )
}

export default Start