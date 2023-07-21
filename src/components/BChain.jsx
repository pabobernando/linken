import React from 'react'
import Blockchain from '../img/blockchain.jpeg'

function BChain() {
  return (
    <>
    <div className='grid grid-cols-1  text-white mt-10 pr-20 pl-20 w-full'>
  <h1 className='text-3xl border-b-2  border-cyan-400 text-center'>Edukasi </h1>
</div>
<div className="relative p-4 bg-black">
    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="lg:col-start-2 md:pl-20">
            <h4 className="text-2xl text-white font-extrabold leading-8 tracking-tight  dark:text-white sm:leading-9">
                Apa itu BLOCKCHAIN ?
            </h4>
            <h1 className='text-white'>Blockchain adalah sebuah teknologi yang memungkinkan pengiriman, penyimpanan, dan verifikasi transaksi digital secara terdesentralisasi, aman, dan transparan</h1>
            <h4 className="text-2xl text-white font-extrabold leading-8 tracking-tight  dark:text-white sm:leading-9">
                Kenapa memilih BLOCKCHAIN ?
            </h4>
            <ul className="mt-10">
                <li>
                    <div className="flex">
                        <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-black border border-cyan-400 text-white">
    <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
        </path>
    </svg>
</div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                                Inovasi Mendalam
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                                deskripsi
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-black border border-cyan-400 text-white">
    <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
        </path>
    </svg>
</div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                                Keamanan dan Transparansi
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                Deskripsi
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 bg-black border border-cyan-400 text-white rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                                Desentralisasi dan Ketahanan
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                                Deskripsi
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
            <img src={Blockchain} alt="illustration" className="relative w-auto mx-auto rounded shadow-lg"/>
        </div>
    </div>
</div></>
  )
}

export default BChain