import React from 'react'
import Blockchain from '../img/ilustrasi3.png'

function Konsensus() {
  return (
    <div>
        <div className="relative p-4 bg-black">
    <div className="container mx-auto lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-2">
            <img src={Blockchain} alt="illustration" className="relative w-auto mx-auto rounded shadow-lg"/>
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
                            <div className="flex items-center justify-center w-12 h-12 bg-black border border-cyan-500 text-white">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
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
                            <div className="flex items-center justify-center w-12 h-12 bg-black border border-cyan-500 text-white rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
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
                            <div className="flex items-center justify-center w-12 h-12 bg-black border border-cyan-500 text-white rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
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
                            <div className="flex items-center justify-center w-12 h-12 bg-black border border-cyan-500 text-white rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
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
                            <div className="flex items-center justify-center w-12 h-12 bg-black border border-cyan-500 text-white rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
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