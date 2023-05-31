import React from 'react'
import { Link } from 'react-router-dom'

// import CSS
import './Footer.css'

// import icon
import { BsInstagram, BsLinkedin, BsLine } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

// import Logo
import LogoPersegi from '../../../assets/logo/LogoPersegi.png'
import LogoKSEP from '../../../assets/logo/LogoKSEP.png'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        {/* INFORMATION */}
        <div className='information'>
          <div className='title'>
            <h1>INFEST 2023</h1>
            <h3>by KSEP ITB</h3>
          </div>
          <div className='slogan'>
            <p>The Biggest Investment Festival Held by <br />KSEP ITB for Indonesia</p>
          </div>
          <div className='logo'>
            <img src={LogoPersegi} />
            <img src={LogoKSEP} />
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className='socials'>
            <h1>SOCIAL MEDIA</h1>
            <p>Follow us on social media to find out <br /> the latest updates on our event</p>
            <div>
              <Link to='https://www.instagram.com/infest.bdg/' target='__blank' className='socials-icon'><BsInstagram /></Link>
              <Link to='https://www.linkedin.com/company/ksepitb/mycompany/' target='__blank' className='socials-icon'><BsLinkedin /></Link>
              <Link to='https://www.tiktok.com/@ksep_itb' target='__blank' className='socials-icon'><FaTiktok /></Link>
            </div>
        </div>

        {/* CONTACT INFORMATION */}
        <div className='contact-information'>
          <h1>CONTACT INFORMATION</h1>
          <div className='main-event-contact'>
            <h6>Main Event</h6>
            <div className='contact-person'>
              <p>Angelica Clara</p>
              <div>
                <p>+62 81382518798</p>
                <p>Angelicaclarr<BsLine className='line-icon'/></p>
              </div>
            </div>
            <div className='contact-person'>
              <p>Audie Quisha</p>
              <div>
                <p>+62 895366452252</p>
                <p>audiejee<BsLine className='line-icon'/></p>
              </div>
            </div>
          </div>
          <div className='competition-contact'>
            <h6>Competition</h6>
            <div className='contact-person'>
              <p>Ardy Setia</p>
              <div>
                <p>+62 85256103205</p>
                <p>rlazure1527<BsLine className='line-icon'/></p>
              </div>
            </div>
            <div className='contact-person'>
              <p>FILBERT</p>
              <div>
                <p>+62 81360245435</p>
                <p>fuyoucheng<BsLine className='line-icon'/></p>
              </div>
            </div>
          </div>
        </div>

        {/* REGISTRATION */}
        <div className='registration'>
          <p>Investing With Us Is A Smart Move <br /> For Your Future</p>
          <Link><button>Daftar Sekarang</button></Link>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className='copyright'>
        <p>© 2023 INFEST KSEP ITB</p>
      </div>
    </div>
  )
}

export default Footer