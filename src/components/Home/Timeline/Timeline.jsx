import React from 'react';

// import css
import './Timeline.css'

const Timeline = () => {
  return (
    <div className='infest-timeline' data-aos='zoom-in-up'>
        <h1>Our Timeline</h1>
        <div className='timeline-month'>
            <p>June</p>
            <p>July</p>
            <p>August</p>
            <p>September</p>
        </div>
        <div className='time-line'>
            <div className='line'>
                <div className='tl-circle circle-1'></div>
                <div className='tl-circle circle-2'></div>
                <div className='tl-circle circle-3'></div>
                <div className='tl-circle circle-4'></div>
                <div className='tl-circle circle-4'></div>
            </div>
        </div>
        <div className='timeline-agenda'>
            <div>10 - 26 Juni : Open Regustration BCC</div>
            <div>27 Juni : Distribusi Case BCC</div>
            <div>27 Juni - 11 Juli : Pengerjaan Paper</div>
            <div>12 - 22 Juli : Pemeriksaan oleh Juri</div>
            <div>23 Juli : Pengumuman Finalis</div>
            <div>23 Juli - 13 Agustus 2023 : Pengerjaan Presentasi</div>
            <div>19 Agustus : Pitching</div>
            <div>2 September : Main Event INFEST 2023</div>
        </div>
    </div>
  )
}

export default Timeline