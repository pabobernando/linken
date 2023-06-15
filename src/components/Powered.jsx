import React from 'react'
import Desolator from '../img/desolator.png'
import Kewr from '../img/kewr.png'
import Yosemite from '../img/yosemite.png'

function Powered() {
  return (
    <>
    <div className='grid grid-cols-1  mt-10 pr-20 pl-20 w-full'>
  <h1 className='text-3xl  text-center text-white'>Powered :</h1>
</div>
    <div className='grid grid-cols-3 text-white mt-5'>
  <div className='text-white flex justify-end items-center my-4'>
    <img src={Desolator} className='w-1/2 h-auto' />
  </div>
  <div className='text-white flex justify-center items-center my-4'>
    <img src={Kewr} className='w-1/2 h-auto' />
  </div>
  <div className='text-white flex justify-start items-center my-4'>
    <img src={Yosemite} className='w-1/2 h-auto' />
  </div>
</div>
    </>
  )
}

export default Powered