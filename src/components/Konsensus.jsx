import React from 'react'
import Blockchain from '../img/konsensus.png'
import Atom from '../img/atom.png'


function Konsensus() {
  return (
    <div>
        <div className="relative p-4 bg-gray-950">
    <div className="container mx-auto lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-2">
            <img src={Blockchain} alt="illustration" className="relative w-1/2 mx-auto rounded shadow-lg"/>
        </div>
        <div className="lg:col-start-1 md:pr-20">
            <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-white dark:text-white sm:leading-9">
                Konsensus
            </h4>
            <p className="mt-4 text-lg leading-6 text-gray-400 dark:text-gray-300">
            Konsensus dalam konteks blockchain merujuk pada kesepakatan yang dicapai oleh partisipan jaringan tentang keadaan yang sah atau valid dalam sistem. Konsensus diperlukan untuk memverifikasi transaksi, menentukan urutan blok, dan menjaga keamanan serta integritas blockchain. Berikut adalah beberapa mekanisme konsensus yang umum digunakan dalam teknologi blockchain:
                </p>
            <ul className="mt-10">
                <li>
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 bg-black text-white">
                                <img src={Atom} />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                            PoW 
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            POW adalah singkatan dari "Proof of Work" (Bukti Kerja). Ini adalah salah satu mekanisme konsensus yang paling terkenal dan umum digunakan dalam teknologi blockchain, terutama dikenal sebagai metode yang digunakan dalam jaringan Bitcoin.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 bg-black  text-white rounded-md">
                            <img src={Atom} />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                               PoS 
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            POS adalah singkatan dari "Proof of Stake" (Bukti Kepemilikan). Ini adalah salah satu mekanisme konsensus yang digunakan dalam teknologi blockchain. Berbeda dengan Proof of Work (POW), di mana penambang bersaing untuk menyelesaikan tugas komputasi yang berat, Proof of Stake mengandalkan konsep kepemilikan koin kripto sebagai dasar pemilihan blok dan validasi transaksi.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 bg-black  text-white rounded-md">
                            <img src={Atom} />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                             DPoS 
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            DPOS adalah singkatan dari "Delegated Proof of Stake" (Bukti Kepemilikan yang Didelegasikan). DPOS adalah salah satu variasi dari mekanisme konsensus Proof of Stake (POS) yang digunakan dalam teknologi blockchain.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 bg-black  text-white rounded-md">
                            <img src={Atom} />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                             PoA 
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            POA adalah singkatan dari "Proof of Authority" (Bukti Otoritas). Ini adalah jenis mekanisme konsensus lain yang digunakan dalam teknologi blockchain. POA dirancang untuk memberikan tingkat keamanan yang tinggi dan efisiensi transaksi yang baik, terutama cocok untuk jaringan blockchain swasta atau berizin yang dijalankan oleh pihak-pihak yang telah ditentukan.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-md">
                            <img src={Atom} />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                            PBFT 
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            PBFT adalah singkatan dari "Practical Byzantine Fault Tolerance" (Toleransi Kesalahan Byzantine yang Praktis). PBFT adalah salah satu mekanisme konsensus yang digunakan dalam teknologi blockchain, terutama di jaringan yang memerlukan keamanan tinggi dan ketahanan terhadap serangan oleh pihak yang tidak dapat dipercaya (Byzantine Fault).
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
    </div>
  )
}

export default Konsensus