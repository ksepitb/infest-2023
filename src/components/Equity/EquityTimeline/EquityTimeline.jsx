import React from 'react'

// import css
import './EquityTimeline.css'

const EquityTimeline = () => {
  return (
    <div className='equity-timeline' data-aos='flip-up'>
      <div className='et-header'>
        <div className='et-line'></div>
        <h1>COMPETITION TIMELINE</h1>
        <div className='et-line'></div>
      </div>
      <div className='et-timeline'>
        <p>⇒ Early-Bid Registration: 10 - 18 Juni 2023</p>
        <p>⇒ Normal Registration: 19 - 26 Juni 2023</p>
        <p>⇒ Pengumpulan Paper: 9 Juli 2023</p>
        <p>⇒ Pengumuman Finalis: 23 Juli 2023</p>
        <p>⇒ Technical Meeting Finalis: Diumukan Kemudian</p>
        <p>⇒ Final dan Pengumuman Pemenang (offline): 2 September 2023</p>
      </div>
      <button><a target='__blank' href='https://docs.google.com/forms/d/1b3QKR9Z3RZnzvPG1waxggJ0aNE2fy7s-_fGtLUBz0IM/edit?usp=drivesdk'>Daftar Sekarang</a></button>
    </div>
  )
}

export default EquityTimeline