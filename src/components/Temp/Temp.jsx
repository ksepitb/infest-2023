import React, { useState } from 'react'

// import css
import './Temp.css'

const Temp = () => {
  const [time, setTime] = useState('00 : 00 : 00 : 00');

  let launchDate = new Date("June 1, 2023 12:00:00").getTime();
  let timer = setInterval(tick, 1000);

  function tick () {
    let now = new Date().getTime();

    let t = launchDate - now;

    if (t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));

        if (days < 10) { days = "0" + days; }
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }

        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }

        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) { secs = "0" + secs; }

        let time =`${days} : ${hours} : ${mins} : ${secs}`

        setTime(time);
    }
}

  return (
    <div className='temp'>
        <h1>INFEST 2023</h1>
        <h3>Launching on 1st June</h3>
        <div className='countdown'>{time}</div>
    </div>
  )
}

export default Temp