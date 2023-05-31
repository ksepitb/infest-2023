import React from 'react'

// import Link
import { Link } from 'react-router-dom'

// import css
import './Event.css'

// import image

const Event = () => {
  return (
    <div className='infest-event'>
        <div className='event-title'>
            <h1>Acara Kami</h1>
        </div>
        <div className='event-category'>
            <Link data-aos-delay='0' data-aos-duration='1500' data-aos='flip-up' className='event-card-wrapper' to='/Main-Event' onClick={() => window.scrollTo(0, 0)}>
                <div className='event-card'>
                    <h3>Main Event</h3>
                    <p>
                        INFEST 2023 memiliki main event berupa talkshow//seminar yang akan dilaksanakan selama satu hari. 
                        Dalam acara ini, akan disampaikan topik yang menarik seputar investasi dan keuangan, ekonomi, 
                        dan pasar modal pada masa sekarang.
                    </p>
                </div> 
            </Link>
            <Link data-aos-delay='500' data-aos-duration='1500'  data-aos='flip-up' className='event-card-wrapper' to='/Equity-Research-Competition' onClick={() => window.scrollTo(0, 0)}>
                <div className='event-card'>
                    <h3>Equity Research</h3>
                    <p>
                        Acara kompetisi yang mengasah kemampuan peserta dalam menganalisis dan mengevaluasi emiten yang 
                        ditentukan oleh panitia untuk menghasilkan hasil riset yang komprehensif. 
                    </p>
                </div>
            </Link>
            <Link data-aos-delay='800' data-aos-duration='1500'  data-aos='flip-up' className='event-card-wrapper' to='/Business-Case-Competition' onClick={() => window.scrollTo(0, 0)} >
                <div className='event-card'>
                    <h3>Business Case Competition</h3>
                    <p>
                        Acara kompetisi yang melatih kemampuan para peserta (dalam bentuk kelompok) untuk dapat 
                        menganalisis dan menyelesaikan kasus bisnis yang ditentukan oleh panitia.
                    </p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Event