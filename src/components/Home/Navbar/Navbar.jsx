import React, { useState } from 'react'

// import CSS 
import './Navbar.css'

// import Link
import { Link } from 'react-router-dom'

// import Logo
import Logo from '../../../assets/logo/LogoPersegi.png'

// import Icon
import { BiMenuAltRight } from 'react-icons/bi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen)
    window.scrollTo(0, 0)
  }

  return (
    <nav>
        <div>
            <Link to='/'><img src={Logo} /></Link>
        </div>
        <div className='path'>
            <Link to='/' onClick={() => window.scrollTo(0, 0)}><p>Home</p></Link>
            <Link to='/Main-Event' onClick={() => window.scrollTo(0, 0)}><p>Main Event</p></Link>
            <Link to='/Equity-Research-Competition' onClick={() => window.scrollTo(0, 0)}><p>Equity</p></Link>
            <Link to='Business-Case-Competition' onClick={() => window.scrollTo(0, 0)}><p>BCC</p></Link>
        </div>
        <div className='mobile-path' onClick={() => setIsOpen(!isOpen)}>
          <BiMenuAltRight className='menu-bar' />
        </div>
        {isOpen && (
        <div className='mobile-link'>
            <div>
              <Link to='/' onClick={openHandler}><p>Home</p></Link>
              <Link to='/Main-Event' onClick={openHandler}><p>Main Event</p></Link>
              <Link to='/Equity-Research-Competition' onClick={openHandler}><p>Equity Research</p></Link>
              <Link to='Business-Case-Competition' onClick={openHandler}><p>Business Case Competition</p></Link>
            </div>
        </div>
        )}
    </nav>
  )
}

export default Navbar