import React from 'react'
import Blockchain from '../img/blockchain.jpeg'
import Code from '../img/code.png'

function BChain() {
  return (
    <>
<div className="relative p-4 bg-black">
    <div className="container mx-auto lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="lg:col-start-2 md:pl-20">
            <h4 className="text-2xl text-white font-extrabold leading-8 tracking-tight  dark:text-white sm:leading-9">
                Apa itu BLOCKCHAIN ?
            </h4>
            <h1 className='text-gray-400'>Blockchain adalah sebuah teknologi yang memungkinkan pengiriman, penyimpanan, dan verifikasi transaksi digital secara terdesentralisasi, aman, dan transparan</h1>
            <h4 className="text-2xl text-white font-extrabold leading-8 tracking-tight  dark:text-white sm:leading-9">
                Kenapa memilih BLOCKCHAIN ?
            </h4>
            <ul className="mt-5">
                <li>
                    <div className="flex">
                        <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 ">
                        <img src={Code} />
</div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                                Keamanan
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            Blockchain menggunakan kriptografi yang kuat untuk melindungi transaksi dan data yang dicatat dalam blok. Setiap blok terhubung dengan blok sebelumnya melalui tanda tangan kriptografi, sehingga setiap perubahan atau manipulasi pada blok sebelumnya akan dengan cepat terdeteksi, menjadikannya sulit untuk melakukan pemalsuan atau penipuan.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 ">
                        <img src={Code} />
</div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                            Terdesentralisasi
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                            Salah satu keunggulan utama blockchain adalah tidak adanya otoritas pusat. Sebagai gantinya, data dan transaksi disimpan di berbagai node yang tersebar di seluruh jaringan. Hal ini mengurangi risiko kegagalan sistem tunggal dan menjadikan sistem lebih tahan terhadap serangan dan gangguan. 
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12">
                            <img src={Code} />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                            Transparansi
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            Setiap transaksi yang dicatat dalam blockchain dapat dilihat oleh semua pihak yang berpartisipasi dalam jaringan. Hal ini menciptakan tingkat transparansi yang tinggi, yang dapat membantu mengatasi masalah kepercayaan dan memverifikasi asal-usul data dengan mudah.
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