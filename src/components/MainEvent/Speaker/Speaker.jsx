import React from 'react'

// import css
import './Speaker.css'

// speakers akan mengarah ke linkedin mereka

const Speaker = () => {
  return (
    <div className='event-speaker'>
        <h1>Our Speakers</h1>
        <div className='ep-speakers' data-aos='zoom-in' data-aos-delay='0' data-aos-duration='500'>
            <div className='ep-wrapper'>
                <div className='ep-speaker'>
                    <p>TBA</p>
                </div>
            </div>
            <div className='ep-wrapper' data-aos='zoom-in' data-aos-delay='500'  data-aos-duration='700'>
                <div className='ep-speaker'>
                    <p>TBA</p>
                </div>
            </div>
            <div className='ep-wrapper' data-aos='zoom-in' data-aos-delay='1000'  data-aos-duration='900'>
                <div className='ep-speaker'>
                    <p>TBA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Speaker