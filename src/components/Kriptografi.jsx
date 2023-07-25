import React from 'react'
import Blockchain from '../img/blockchain.jpeg'
import Kriptografi2 from '../img/kriptografi2.jpg'
import Kriptografi1 from '../img/kriptografi1.jpg'
import Kriptografi3 from '../img/robot.png'

function Kriptografi() {
  return (
    <>
    <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-black sm:px-6 lg:px-8 py-26 lg:mt-20">
    <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                <h4 className="mt-2 text-2xl font-extrabold leading-8 text-white dark:text-white sm:text-3xl sm:leading-9">
                    Kriptografi dalam BLOCKCHAIN
                </h4>
                <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Kriptografi memainkan peran penting dalam teknologi blockchain untuk menjaga keamanan, integritas, dan privasi data. Berikut adalah beberapa aspek kriptografi yang digunakan dalam blockchain :
                </p>
                <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-white border border-cyan-500 rounded-full">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Hashing
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-gradient-to-br text-white border border-cyan-500 rounded-full">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Enkripsi
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-white border border-cyan-500 rounded-full">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Proof of Work (Pow)
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-white border border-cyan-500 rounded-full">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Proof of Stake (PoS)
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                <div className="relative space-y-4">
                    <div className="flex items-end justify-center space-x-4 lg:justify-start">
                        <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={Kriptografi3} alt="1"/>
                        <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src={Kriptografi2} alt="2"/>
                    </div>
                    <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                        <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src={Blockchain} alt="3"/>
                        <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={Kriptografi1} alt="4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Kriptografi