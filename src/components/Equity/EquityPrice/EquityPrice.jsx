import React from 'react'

// import css
import './EquityPrice.css'

const EquityPrice = () => {
  return (
    <div className='equity-price'>
        <div className='ep-biaya' data-aos='flip-right'>
            <div className='ep-wrapper'>
                <h3>BIAYA PENDAFTARAN</h3>
                <p>Early Bird Registration (tanggal 10 - 18 Juni 2023)	: Rp 145.000,00.</p>
                <p>Normal Registration (tanggal 19 - 26 Juni 2023)	: Rp 195.000,00.</p>
            </div>
        </div>
        <div className='ep-hadiah' data-aos='flip-left'>
            <div className='ep-wrapper'>
                <h3>HADIAH</h3>
                <p>Juara 1 : Rp4.500.000,00 + e-sertifikat</p>
                <p>Juara 2 : Rp2.500.000,00 + e-sertifikat</p>
                <p>Juara 3 : Rp1.500.000,00 + e-sertifikat </p>
            </div>
        </div>
    </div>
  )
}

export default EquityPrice