import React from 'react'

// import Components
import Banner from '../components/Home/Banner/Banner'
import AfterMovie from '../components/Home/AfterMovie/AfterMovie'
import InfestMain from '../components/Home/InfestMain/InfestMain'
import Start from '../components/Home/Start/Start'
import Investing from '../components/Home/Investing/Investing'
import Event from '../components/Home/Event/Event'
import Timeline from '../components/Home/Timeline/Timeline'
import FAQ from '../components/Home/FAQ/FAQ'

const Home = () => {
  return (
    <div>
      <Banner />
      <AfterMovie />
      <InfestMain />
      <Start />
      <Investing />
      <Event />
      <Timeline />
      <FAQ />
    </div>
  )
}

export default Home