import React from 'react'
import Blockchain from '../img/smartcontract.png'
import Code from '../img/iconcode.png'

function SmartContract() {
  return (
    <>
    <div className="relative p-4 bg-gray-950">
    <div className=" container mx-auto lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        
        <div className="lg:col-start-1 md:pr-20">
            <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-white  sm:leading-9">
                SmartContract
            </h4>
            <p className="mt-4 text-lg leading-6 text-gray-400 dark:text-gray-300">
            SmartContract adalah program komputer yang menjalankan dan mengeksekusi perjanjian atau kesepakatan antara dua pihak di dalam blockchain. Kontrak pintar ini secara otomatis mengeksekusi persyaratan yang telah ditentukan, menghilangkan kebutuhan akan pihak ketiga atau otoritas tengah untuk memvalidasi atau menegakkan kontrak tersebut.
            Berikut adalah beberapa poin penting tentang smart contract 
                </p>
            <ul className="mt-10">
                <li>
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12">
                                <img src={Code} alt="" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                            Kode Pemrograman
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            serangkaian instruksi yang ditulis dalam bahasa pemrograman oleh seorang pengembang atau programmer untuk menginstruksikan komputer atau sistem komputasi lainnya untuk melakukan tugas atau operasi tertentu.
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
                                Otonom
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            merujuk pada kemampuan SmartContract untuk beroperasi secara mandiri dan otomatis tanpa perlu campur tangan pihak ketiga atau otoritas pusat. Artinya, setelah SmartContract dibuat dan dijalankan di dalam blockchain,kontrak tersebut akan berfungsi dan mengeksekusi persyaratan yang telah ditetapkan tanpa perlu ada campur tangan manusia.
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
                            Keandalan dan Transparansi
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            Keandalan SmartContract berarti kontrak pintar dapat diandalkan untuk bekerja dengan benar sesuai dengan yang telah diprogramkan. Transparansi berarti semua pihak dapat melihat dan memverifikasi isi dan logika SmartContract karena informasi tersebut tersedia secara terbuka di blockchain.
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
                            Penghapusan Intermediari
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            konsep di mana SmartContract di dalam blockchain memungkinkan perjanjian atau transaksi antara dua pihak terjadi secara langsung tanpa perlu melibatkan pihak ketiga atau otoritas tengah. Dalam sistem konvensional, pihak ketiga atau intermediari seringkali berfungsi sebagai perantara untuk memvalidasi dan menegakkan kontrak atau transaksi, tetapi dengan adanya SmartContract, peran intermediari ini dapat dihilangkan.
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
                            Ketidakbisaan diubah ( immutability )
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            salah satu karakteristik kunci dari SmartContract di dalam blockchain. Ini berarti setelah SmartContract dibuat dan dijalankan, isi dan aturan kontrak tersebut tidak dapat diubah tanpa kesepakatan dari semua pihak yang terlibat. Sifat ini membantu menjaga integritas dan keandalan SmartContract karena tidak ada pihak yang dapat merubahnya sepihak atau mengubah syarat-syaratnya setelah perjanjian dibuat.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-2">
            <img src={Blockchain} alt="illustration" className="relative w-auto mx-auto rounded shadow-lg"/>
        </div>
    </div>
</div></>
  )
}

export default SmartContract