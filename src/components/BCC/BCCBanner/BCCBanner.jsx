import React from 'react'

// import css
import './BCCBanner.css'

// import image
import Img from '../../../assets/background/business.png'

const BCCBanner = () => {
  return (
    <div className='bcc-banner'>
        <img src={Img} />
        <div className='bb-text' data-aos='fade-up'>
            <h1>Business Case Competition</h1>
            <button><a target='__blank' href='https://docs.google.com/forms/d/1b3QKR9Z3RZnzvPG1waxggJ0aNE2fy7s-_fGtLUBz0IM/edit?usp=drivesdk'>Daftar Sekarang</a></button>
        </div>
    </div>
  )
}

export default BCCBanner