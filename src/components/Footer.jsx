import React from 'react'
import Teams from './Teams'

const Footer = () => {
  return (
    <>

    
    <Teams/>

    <div className='bg-footer'>
      <ul className='flex justify-end p-5 gap-3'>
        <li className='font-medium text-white text-md'>Contact Microsoft</li>
        <li className='font-medium text-white text-md'>Privacy</li>
        <li className='font-medium text-white text-md'>Terms of use</li>
        <li className='font-medium text-white text-md'>Trademarks</li>
        <li className='font-medium text-white text-md'>About our ads</li>
        <li className='font-medium text-white text-md'> Microsoft 2023</li>
      </ul>
    </div>
    </>
  )
}

export default Footer