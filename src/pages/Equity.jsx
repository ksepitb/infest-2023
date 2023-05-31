import React from 'react'

// import components
import EquityBanner from '../components/Equity/EquityBanner/EquityBanner'
import EquityAbout from '../components/Equity/EquityAbout/EquityAbout'
import EquityKetentuan from '../components/Equity/EquityKetentuan/EquityKetentuan'
import EquityPrice from '../components/Equity/EquityPrice/EquityPrice'
import EquityTimeline from '../components/Equity/EquityTimeline/EquityTimeline'
import EquityFAQ from '../components/Equity/EquityFAQ/EquityFAQ'

const Equity = () => {
  return (
    <div>
      <EquityBanner />
      <EquityAbout />
      <EquityKetentuan />
      <EquityPrice />
      <EquityTimeline />
      <EquityFAQ />
    </div>
  )
}

export default Equity