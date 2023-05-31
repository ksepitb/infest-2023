import React from 'react'

// import css
import './EquityBanner.css'

// import image
import Equity from '../../../assets/background/equity.png'

const EquityBanner = () => {
  return (
    <div className='equity-banner'>
        <img src={Equity} />
        <div className='eb-text' data-aos='fade-up'>
            <h1>Equity Research Competition</h1>
            <button><a target='__blank' href='https://docs.google.com/forms/d/1b3QKR9Z3RZnzvPG1waxggJ0aNE2fy7s-_fGtLUBz0IM/edit'>Daftar Sekarang</a></button>
        </div>
    </div>
  )
}

export default EquityBanner