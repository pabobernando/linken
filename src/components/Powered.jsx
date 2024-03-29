import React from 'react'
import Desolator from '../img/desolator.png'
import Kewr from '../img/kewr.png'
import Yosemite from '../img/yosemite.png'

function Powered() {
  return (
    <div className='bg-gray-950'>
    <div className='grid grid-cols-1  mt-10 pr-20 pl-20 w-full'>
    <h1 className='text-2xl sm:text-sm text-center text-white font-medium'>Powered</h1>
</div>
    <div className='grid grid-cols-3 text-white '>
  <div className='text-white flex justify-end items-center my-4'>
  <img src={Desolator} className='w-3/4 sm:w-1/2 md:w-1/3 h-auto' alt='Desolator' />
  </div>
  <div className='text-white flex justify-center items-center my-4'>
  <img src={Kewr} className='w-3/4 sm:w-1/2 md:w-1/3 h-auto' alt='Kewr' />
  </div>
  <div className='text-white flex justify-start items-center my-4'>
  <img src={Desolator} className='w-3/4 sm:w-1/2 md:w-1/3 h-auto' alt='Desolator' />
  </div>
</div>
    </div>
  )
}

export default Powered