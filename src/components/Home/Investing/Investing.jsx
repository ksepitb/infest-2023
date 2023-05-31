import React from 'react'

// import css
import './Investing.css'

// import image
import Img from '../../../assets/background/unsplash_qwtCeJ5cLYs.png'

const Investing = () => {
  return (
    <div className='investing' id='investing'>
        <div className='investing-illustration' data-aos='zoom-out-right'>
          <img src={Img} />
        </div>
        <div className='investing-title'>
            <p className='title-2023'>INFEST 2023</p>
            <h1>Investing in Indonesia's Future : <br /> A New Era of Opportunities</h1>
            <p className='economy'>
                Perekonomian Indonesia secara mayoritas disusun oleh sektor perbankan. 
                Namun, beberapa bank - bank besar di dunia sedang mengalami permasalahan besar dan collapse. 
                Walaupun mungkin tidak memberikan dampak langsung kepada Indonesia, 
                tapi peristiwa ini memberikan peringatan kepada masyarakat Indonesia bahwa sektor perbankan tidak seaman itu dan tetap memiliki 
                risiko untuk collapse. Kejadian itu memicu sebuah pertanyaan, apakah sudah saatnya investor Indonesia memberikan dana 
                kepada sektor lain selain perbankan dan apa sektor yang masih berpotensi di masa depan?
            </p>
            <button>Registrasi</button>
        </div>
    </div>
  )
}

export default Investing