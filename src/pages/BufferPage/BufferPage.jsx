import Header from 'components/Header'
import React from 'react'
import IndustryGrids from './IndustryGrids/IndustryGrids'

const BufferPage = () => {
  return (
    <div>

    <Header title={'All Data & AI Industry'} subtitle={'DAI Industry Assets & Resources to help you accelerate customer opportunities.'} />
    <IndustryGrids />
    </div>
  )
}

export default BufferPage