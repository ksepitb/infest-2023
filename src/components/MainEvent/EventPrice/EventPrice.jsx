import React from 'react'

// import css
import './EventPrice.css'

const EventPrice = () => {
  return (
    <div className='event-price' data-aos='fade-right'>
      <h1>Price</h1>
      <div className='ep-price'>
        <p>To Be Announce!</p>
      </div>
      <div className='ep-button'>
        <p>Interested In Our Main Event?</p>
        <div className='ep-button-s'>
          <div></div>
          <button>Register <br />(Coming Soon)</button>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default EventPrice