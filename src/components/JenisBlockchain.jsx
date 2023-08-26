import React from 'react'
import Block from '../img/block.png'

function JenisBlockchain() {
  return (
    <>
    <div className="container p-6 px-6 mx-auto bg-gray-950">
    <div className="mb-16 text-center">
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white  sm:text-4xl">
            Jenis-jenis BLOCKCHAIN
        </p>
    </div>
    <div className="flex flex-wrap my-12 ">
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 border-cyan-400">
            <div className="flex items-center mb-6">
            <img src={Block} className="w-1/6" />
                <div className="ml-4 text-xl text-white">
                    BLOCKCHAIN Pribadi
                </div>
            </div>
            <p className="leading-loose text-gray-400 text-md">
            Blockchain pribadi adalah jaringan terbatas yang diakses dan dioperasikan oleh entitas atau organisasi tertentu. Hanya pihak yang diotorisasi yang dapat menjadi anggota jaringan dan berpartisipasi dalam validasi transaksi. Blockchain pribadi digunakan dalam lingkungan bisnis atau perusahaan untuk keperluan internal, seperti manajemen rantai pasokan atau pelacakan aset.
            </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r border-cyan-400">
            <div className="flex items-center mb-6">
                <img src={Block} className="w-1/6" />
                <div className="ml-4 text-xl text-white">
                    BLOCKCHAIN Public
                </div>
            </div>
            <p className="leading-loose text-gray-400  text-md">
            Blockchain publik, seperti Bitcoin dan Ethereum, adalah jaringan terbuka yang dapat diakses oleh siapa saja tanpa memerlukan izin. Semua orang dapat berpartisipasi dalam validasi transaksi, menambahkan blok baru, dan menjalankan aplikasi terdesentralisasi. Blockchain publik biasanya memiliki mekanisme konsensus terdesentralisasi, seperti Proof of Work (PoW) atau Proof of Stake (PoS), dan transparansi yang tinggi.
            </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 border-cyan-400">
            <div className="flex items-center mb-6">
            <img src={Block} className="w-1/6" />
                <div className="ml-4 text-xl text-white">
                BLOCKCHAIN Konsorsium
                </div>
            </div>
            <p className="leading-loose text-gray-400  text-md">
            Blockchain konsorsium adalah jaringan yang dioperasikan oleh sekelompok organisasi atau institusi yang bekerja bersama dalam ekosistem yang terbatas. Partisipan jaringan telah ditentukan sebelumnya dan bertanggung jawab atas validasi transaksi. Blockchain konsorsium digunakan dalam konteks kolaborasi bisnis atau proyek bersama, seperti industri asuransi, logistik, atau kesehatan.
            </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 border-cyan-400">
            <div className="flex items-center mb-6">
            <img src={Block} className="w-1/6" />
                <div className="ml-4 text-xl text-white">
                Blockchain Hibrida
                </div>
            </div>
            <p className="leading-loose text-gray-400  text-md">
            Blockchain hibrida menggabungkan karakteristik dari blockchain publik dan pribadi. Ini memungkinkan adanya bagian terdesentralisasi yang terbuka untuk umum, namun juga ada bagian yang terbatas dan diatur oleh entitas tertentu. Hal ini memungkinkan kombinasi antara transparansi dan keamanan yang diperlukan dalam konteks yang berbeda.            </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 border-cyan-400">
            <div className="flex items-center mb-6">
            <img src={Block} className="w-1/6" />
                <div className="ml-4 text-xl text-white">
                Blockchain Otoritas Terpusat
                </div>
            </div>
            <p className="leading-loose text-gray-400  text-md">
            Blockchain dengan otoritas terpusat adalah jaringan yang menggunakan teknologi blockchain untuk keperluan tertentu, tetapi memiliki satu atau beberapa entitas yang mengendalikan dan mengatur kegiatan dalam jaringan. Ini dapat digunakan dalam lingkungan yang membutuhkan validasi transaksi yang terpercaya dan pengawasan yang ketat.
            </p>
        </div>
        <div className="w-full p-8 md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-6">
            <img src={Block} className="w-1/6" />
                <div className="ml-4 text-xl text-white">
                  Sidechain
                </div>
            </div>
            <p className="leading-loose text-gray-400 text-md">
            Sidechain adalah blockchain yang terhubung dengan blockchain utama (mainchain) dan memungkinkan transfer aset atau data antara keduanya. Sidechain dapat digunakan untuk meningkatkan skalabilitas, kecepatan transaksi, atau mengimplementasikan fitur-fitur khusus yang tidak tersedia di mainchain.
            </p>
        </div>
    </div>
</div>
    </>
  )
}

export default JenisBlockchain