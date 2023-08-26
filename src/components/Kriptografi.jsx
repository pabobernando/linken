import React from 'react'
import Robot2 from '../img/robot2.png'
import Sucess from '../img/sucess.png'

function Kriptografi() {
  return (
    <>
    <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-gray-950 sm:px-6 lg:px-8 py-26 lg:mt-20">
    <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                <h4 className="mt-2 text-2xl font-extrabold leading-8 text-white dark:text-white sm:text-3xl sm:leading-9">
                    Kriptografi dalam BLOCKCHAIN
                </h4>
                <p className="mt-4 text-lg leading-6 text-gray-400 dark:text-gray-300">
                Kriptografi memainkan peran penting dalam teknologi blockchain untuk menjaga keamanan, integritas, dan privasi data. Berikut adalah beberapa aspek kriptografi yang digunakan dalam blockchain :
                </p>
                <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full">
                                <img src={Sucess} />
                            </span>
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Hashing
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-gradient-to-br text-white rounded-full">
                            <img src={Sucess} />
                            </span>
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Enkripsi
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-white  rounded-full">
                            <img src={Sucess} />
                            </span>
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Proof of Work (Pow)
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-white  rounded-full">
                            <img src={Sucess} />
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
                    <div className="flex items-end justify-center lg:justify-start">
                        <img className="rounded-lg shadow-lg md:w-64" src={Robot2} alt="2"/>
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