import React from 'react'

// import css
import './JoinUs.css'

// import icon
import { MdLocationOn } from 'react-icons/md'
import { BsFillCalendarDateFill } from 'react-icons/bs'

const JoinUs = () => {
  return (
    <div className='join-us' data-aos='flip-up'>
        <h1>"With a good perspective on history, we can have a better understanding of the past and present, and thus a clear vision of the future." — Carlos Slim Helu</h1>
        <div className='ju-time'>
            <p><BsFillCalendarDateFill /> 2nd September</p>
            <p><MdLocationOn /> Multipurpose Hall CRCS Lt. III, ITB Ganesha</p>
        </div>
        <div className='ju-button'>
            <div></div>
            <button>Register <br /> (Coming Soon)</button>
            <div></div>
        </div>
    </div>
  )
}

export default JoinUs