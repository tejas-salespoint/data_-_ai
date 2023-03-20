import Header from 'components/Header'
import React from 'react'
import IndustryGrids from './IndustryGrids/IndustryGrids'

const BufferPage = () => {
  return (
    <div>

    <Header title={'Data & AI Hub'} subtitle={'We think these resources will be helpful as you work with your customers.'} />
    <IndustryGrids />
    </div>
  )
}

export default BufferPage