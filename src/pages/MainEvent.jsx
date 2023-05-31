import React from 'react'

// import components
import EventBanner from '../components/MainEvent/EventBanner/EventBanner'
import InvestmentFacts from '../components/MainEvent/InvestmentFacts/InvestmentFacts'
import JoinUs from '../components/MainEvent/JoinUs/JoinUs'
import Speaker from '../components/MainEvent/Speaker/Speaker'
import EventPrice from '../components/MainEvent/EventPrice/EventPrice'

const MainEvent = () => {
  return (
    <div>
      <EventBanner />
      <InvestmentFacts />
      <JoinUs />
      <Speaker />
      <EventPrice />
    </div>
  )
}

export default MainEvent