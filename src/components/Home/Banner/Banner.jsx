import React from 'react'

// import CSS
import './Banner.css'

// import image
import Trading from '../../../assets/background/1unsplash_s7gyjnH7Ulk.png'
import KSEP from '../../../assets/logo/LogoKSEP.png'

const Banner = () => {
  return (
    <div className='banner'>
      <img src={Trading} />
      <div>
        <img src={KSEP} data-aos='fade-right' data-aos-delay='100'/>
        <h1 data-aos='fade-right' data-aos-delay='200'>The Biggest Investment Festival Held By KSEP ITB</h1>
        <button data-aos='fade-right' data-aos-delay='300'><a>Daftar Sekarang</a></button>
      </div>
    </div>
  )
}

export default Banner