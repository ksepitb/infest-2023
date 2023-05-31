import React from 'react'

// import css
import './BCCPrice.css'

const BCCPrice = () => {
  return (
    <div className='bcc-price'>
        <div className='bp-biaya' data-aos='flip-left'>
            <div className='bp-wrapper'>
                <h3>BIAYA PENDAFTARAN</h3>
                <p>Early Bird Registration (tanggal 10 - 18 Juni 2023)	: Rp 150.000,00.</p>
                <p>Normal Registration (tanggal 19 - 26 Juni 2023)	: Rp 200.000,00.</p>
            </div>
        </div>
        <div className='bp-hadiah' data-aos='flip-right'>
            <div className='bp-wrapper'>
                <h3>HADIAH</h3>
                <p>Juara 1 : Rp5.000.000,00 + e-sertifikat</p>
                <p>Juara 2 : Rp3.000.000,00 + e-sertifikat</p>
                <p>Juara 3 : Rp2.000.000,00 + e-sertifikat </p>
            </div>
        </div>
    </div>
  )
}

export default BCCPrice