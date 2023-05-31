import React from 'react'

// import css
import './InfestMain.css'

// import logo
import Logo from '../../../assets/logo/LogoPersegi.png'

const InfestMain = () => {
  return (
    <div className='infest-main'>

        {/* Logo */}
        <div className='infest-main_logo' data-aos='zoom-in-up' data-aos-offset='-200'>
            <img src={Logo}/>
        </div>
        
        {/* INFEST TITLE */}
        <div className='infest-main-title'>
          <div className='infest-main-title-text'>
            <h1>Apa itu INFEST?</h1>
            <p>
            <span>Investment Festival (INFEST)</span> adalah acara tahunan yang diselenggarakan oleh KSEP ITB. Dimeriahkan dengan lomba equity research, 
            business case competition (BCC), dan talkshow/seminar yang menjadi acara utama, INFEST 2023 ingin menyebarluaskan pengetahuan serta 
            mengasah kemampuan tentang investasi dan keuangan, ekonomi, dan pasar modal bagi para mahasiswa di Indonesia, khususnya di Bandung.
            </p>
            
          </div>
        </div>



    </div>
  )
}

export default InfestMain