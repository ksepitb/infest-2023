import React, { useState } from 'react'

// import css
import './InvestmentFacts.css'

// import icons
import { AiFillCloseCircle } from 'react-icons/ai'

// import image
import Market from '../../../assets/background/stocks.png'
import Energy from '../../../assets/background/energy.png'
import Bank from '../../../assets/background/bank.png'

// text
const text1 = 'Untuk masuk ke pasar modal, memiliki pemahaman yang baik tentang diri sendiri (Know Yourself) dan membangun pola pikir yang tepat (Build the Right Mindset) sangat penting, terutama dalam pasar yang penuh ketidakpastian. Hal ini bertujuan agar mengetahui risk tolerance, tujuan dan waktu investasi, pemahaman mengenai emosi dan psikologi, dan rencana investasi.'
const text2 = 'Permasalahan global warming terus meningkat dari tahun ke tahun. Pemerintah dan perusahaan dari seluruh dunia berlomba- lomba untuk mengatasi permasalahan ini. Emiten sektor clean energy adalah perusahaan atau entitas yang berfokus pada produksi energi terbarukan atau energi hijau yang memiliki jejak karbon yang lebih rendah, seperti energi surya, angin, hidro, geotermal, dan biomassa. Apakah sektor clean energy dan pendukungnya dapat berpotensi di masa depan ? Mungkinkah kedepannya sektor clean energy dapat menggantikan posisi perbankan ?'
const text3 = 'Permasalahan besar bank- bank besar dunia yang baru- baru ini terjadi sangat tidak terprediksi. Hal ini memberikan peringatan kepada masyarakat Indonesia bahwa bisnis perbankan tetap memiliki risiko, sama seperti bisnis lainnya. Apakah sektor perbankan tetap menjadi pilihan investasi yang menarik atau sudah saatnya bagi investor untuk beralih kepada sektor lain yang lebih berpotensi di masa depan?'

const InvestmentFacts = () => {
    const [content, setContent] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const [isImg, setIsImg] = useState('');

    const firstHandler = () => {
        setContent(text1) 
        setIsOpen(true)
        setIsImg(Market)
    }

    const secondHandler = () => {
        setContent(text2) 
        setIsOpen(true)
        setIsImg(Energy)
    }

    const thirdHandler = () => {
        setContent(text3)
        setIsOpen(true)
        setIsImg(Bank)
    }

  return (
    <div className='investment-facts'>
        <h1>General Informations</h1>
        <div className='if-facts'>
            <div data-aos-delay='0' data-aos='flip-left' data-aos-duration='1500' className='if-wrapper'>
                <div className='if-facts-box' onClick={firstHandler}>
                    <p>Know Yourself to Build The Right Mindset in An Uncertainty Market</p>
                    <p>Click Me!</p>
                </div>
            </div>
            <div data-aos-delay='500' data-aos='flip-left' data-aos-duration='1500'  className='if-wrapper' onClick={secondHandler}>
                <div className='if-facts-box'>
                    <p>Unveiling Investment for Clean Energy Technology</p>
                    <p>Click Me!</p>
                </div>
            </div>
            <div data-aos-delay='1000' data-aos='flip-left' data-aos-duration='1500'  className='if-wrapper' onClick={thirdHandler}>
                <div className='if-facts-box'>
                    <p>The Banking Sector: Present, Prospect, and Alternative Industries</p>
                    <p>Click Me!</p>
                </div>
            </div>
        </div>
        {isOpen &&
        <div className='if-showbox-wrapper'>
            <div className='if-showbox'>
                <img src={isImg} />
                <div>
                    <p>{content}</p>
                    <button className='if-showbox-close' onClick={() => setIsOpen(false)}>Close</button>
                </div>
            </div>
        </div>
        }
    </div>
  )
}

export default InvestmentFacts