import React from 'react'

function StrukturBlockchain() {
  return (
    <>
<section>
    <div className="container p-4 mx-auto bg-black max-w-7xl sm:p-6 lg:p-8 dark:bg-gray-800">
        <div className="flex flex-wrap -mx-8">
            <div className="w-full px-8 lg:w-1/2">
                <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                    <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading text-white">
                        Struktur Blockchain
                    </h2>
                    <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                    Struktur dasar dari blockchain terdiri dari beberapa komponen utama yang bekerja bersama untuk menciptakan sistem yang terdesentralisasi dan aman. Berikut adalah komponen-komponen utama dari struktur blockchain:
                    </p>
                    <div className="w-full md:w-1/3">
                        <button type="button" className="py-2 px-4  bg-black border border-cyan-500 hover:bg-cyan-700 focus:ring-cyan-500 focus:ring-offset-cyan-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            See more
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full px-8 lg:w-1/2">
                <ul className="space-y-12">
                    <li className="flex -mx-4">
                        <div className="px-4">
                            <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white rounded-full font-heading bg-black border border-cyan-500">
                                1
                            </span>
                        </div>
                        <div className="px-4">
                            <h3 className="my-4 text-xl font-semibold text-white">
                            Blok (Block)
                            </h3>
                            <p className="leading-loose text-gray-500 dark:text-gray-300">
                            Blockchain terdiri dari serangkaian blok yang saling terhubung. Setiap blok berisi kumpulan transaksi yang telah diverifikasi. Blok pertama dalam blockchain disebut blok genesis, dan blok-blok selanjutnya ditambahkan secara berurutan.
                            </p>
                        </div>
                    </li>
                    <li className="flex -mx-4">
                        <div className="px-4">
                            <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white rounded-full font-heading border border-cyan-500">
                                2
                            </span>
                        </div>
                        <div className="px-4">
                            <h3 className="my-4 text-xl font-semibold text-white">
                            Hash
                            </h3>
                            <p className="leading-loose text-gray-500 dark:text-gray-300">
                            Setiap blok dalam blockchain memiliki hash yang unik. Hash adalah hasil dari fungsi hash kriptografis yang mengubah data dalam blok menjadi serangkaian karakter unik. Hash dari blok sebelumnya juga dimasukkan ke dalam blok saat ini, menciptakan keterhubungan antarblok.
                            </p>
                        </div>
                    </li>
                    <li className="flex -mx-4">
                        <div className="px-4">
                            <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white rounded-full font-heading border border-cyan-500">
                                3
                            </span>
                        </div>
                        <div className="px-4">
                            <h3 className="my-4 text-xl font-semibold text-white">
                            Transaksi (Transaction)
                            </h3>
                            <p className="leading-loose text-gray-500 dark:text-gray-300">
                            Transaksi adalah unit dasar dari informasi dalam blockchain. Setiap transaksi mencatat perubahan kepemilikan aset atau eksekusi kontrak pintar dalam jaringan. Transaksi-transaksi ini dikumpulkan dalam blok dan diverifikasi sebelum dimasukkan ke dalam blockchain.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default StrukturBlockchain