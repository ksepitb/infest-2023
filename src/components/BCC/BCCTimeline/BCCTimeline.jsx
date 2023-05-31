import React from 'react'

// import css
import '../../Equity/EquityTimeline/EquityTimeline.css'

const BCCTimeline = () => {
  return (
    <div className='equity-timeline' data-aos='flip-down'>
      <div className='et-header'>
        <div className='et-line'></div>
        <h1>COMPETITION TIMELINE</h1>
        <div className='et-line'></div>
      </div>
      <div className='et-timeline'>
        <p>⇒ Early-Bid Registration: 10 - 18 Juni 2023</p>
        <p>⇒ Normal Registration: 19 - 26 Juni 2023</p>
        <p>⇒ Case Distribution: 27 Juni 2023</p>
        <p>⇒ Pengerjaan Paper: 27 Juni - 11 Juli 2023</p>
        <p>⇒ Pemeriksaan Oleh Juri: 12 - 22 Juli</p>
        <p>⇒ Pengumuman Finalis: 23 Juli</p>
        <p>⇒ Pengerjaan Presentasi: 23 Juli - 13 Agustus 2023</p>
        <p>⇒ Pitching: 19 Agustus 2023</p>
      </div>
      <button><a target='__blank' href='https://docs.google.com/forms/d/1b3QKR9Z3RZnzvPG1waxggJ0aNE2fy7s-_fGtLUBz0IM/edit?usp=drivesdk'>Daftar Sekarang</a></button>
    </div>
  )
}

export default BCCTimeline