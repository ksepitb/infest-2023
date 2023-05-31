import React from 'react'


// import components
import BCCBanner from '../components/BCC/BCCBanner/BCCBanner'
import BCCAbout from '../components/BCC/BCCAbout/BCCAbout'
import EquityKetentuan from '../components/Equity/EquityKetentuan/EquityKetentuan'
import BCCPrice from '../components/BCC/BCCPrice/BCCPrice'
import BCCTimeline from '../components/BCC/BCCTimeline/BCCTimeline'

const BCC = () => {
  return (
    <div>
      <BCCBanner />
      <BCCAbout />
      <EquityKetentuan />
      <BCCPrice />
      <BCCTimeline />
    </div>
  )
}

export default BCC