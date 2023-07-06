import React, { useState } from 'react';

function Materi() {

  return (
    <div>
     
<div className="max-w-screen p-8 mx-auto bg-black">
    <h2 className="mb-12 text-3xl font-extrabold leading-9 text-white border-b-2 border-gray-100">
        Edukasi
    </h2>
    <ul className="flex flex-wrap items-start gap-8">
        <li className="w-2/5">
            <p className="text-2xl font-medium leading-6 text-cyan-400">
                Apa itu Web3 ?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-300">
                mengacu pada evolusi dari Web saat ini (Web 2.0) ke generasi berikutnya yang bertujuan untuk menghadirkan pengalaman yang lebih terdesentralisasi, aman, transparan, dan memungkinkan kolaborasi peer-to-peer tanpa perlu bergantung pada pihak ketiga.
                 Web 3 bertujuan untuk mengatasi beberapa kelemahan yang ada dalam Web 2.0, seperti kendali data yang terpusat, privasi yang lemah, dan ketergantungan pada perusahaan besar.
                 Web 3.0 didasarkan pada teknologi blockchain dan konsep-konsep terkait, seperti kontrak pintar (smart contracts), token digital, dan desentralisasi. Dalam lingkungan Web 3, pengguna memiliki kontrol yang lebih besar atas data pribadi mereka dan dapat berpartisipasi secara langsung dalam ekonomi digital menggunakan kripto-mata uang, melakukan transaksi aman, serta membangun dan menggunakan aplikasi terdesentralisasi (dApps) di atas platform blockchain.
                </p>
            </p>
        </li>
        <li className="w-2/5">
            <p className="text-2xl font-medium leading-6 text-cyan-400">
                Apa itu Blockchain ?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-300">
                Blockchain adalah sebuah teknologi yang digunakan untuk menciptakan dan mengelola database terdesentralisasi yang aman, transparan, dan tidak dapat diubah. Blockchain dapat digunakan untuk merekam transaksi atau catatan lainnya dengan cara yang aman dan terverifikasi.

Pada dasarnya, blockchain adalah rangkaian blok data yang saling terkait. Setiap blok dalam blockchain berisi serangkaian transaksi atau informasi lainnya. Ketika blok baru ditambahkan ke blockchain, blok tersebut dihubungkan secara kronologis dengan blok sebelumnya melalui kriptografi, menciptakan rantai data yang tak terputus.

Salah satu karakteristik utama blockchain adalah desentralisasi. Database blockchain tidak dipegang atau dikontrol oleh satu pihak sentral, melainkan didistribusikan di seluruh jaringan komputer yang disebut "node"
                </p>
            </p>
        </li>
        <li className="w-2/5">
            <p className="text-2xl font-medium leading-6 text-cyan-400">
                Sejarah Blockchain
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-300">
                Sejarah blockchain dimulai pada tahun 2008 ketika seseorang atau sekelompok orang yang menggunakan nama samaran "Satoshi Nakamoto" menerbitkan makalah berjudul "Bitcoin: A Peer-to-Peer Electronic Cash System". Makalah ini memperkenalkan konsep Bitcoin dan teknologi blockchain yang menjadi dasar untuk cryptocurrency pertama.

Berikut adalah perjalanan sejarah blockchain:

2008: Whitepaper Bitcoin
Pada Oktober 2008, Satoshi Nakamoto menerbitkan whitepaper Bitcoin yang merinci konsep dan mekanisme yang digunakan dalam sistem mata uang digital ini. Whitepaper ini menjelaskan konsep dasar blockchain sebagai teknologi yang mendasari transaksi Bitcoin.

2009: Peluncuran Bitcoin
Pada Januari 2009, Bitcoin secara resmi diluncurkan sebagai jaringan blockchain pertama yang beroperasi. Bitcoin memanfaatkan teknologi blockchain untuk mencatat dan memverifikasi transaksi mata uang digital secara terdesentralisasi.

2011: Pengembangan Blockchain Alternatif
Setelah Bitcoin, proyek-proyek blockchain alternatif mulai berkembang. Salah satu contohnya adalah Namecoin, yang menggunakan blockchain untuk menciptakan sistem domain terdesentralisasi. Selain itu, juga muncul proyek seperti Litecoin, yang memperkenalkan variasi pada algoritma konsensus dan waktu blok yang lebih cepat.

2013: Munculnya Ethereum
Pada tahun 2013, Vitalik Buterin memperkenalkan konsep Ethereum, sebuah platform blockchain yang memungkinkan pembangunan aplikasi terdesentralisasi. Ethereum memperkenalkan kontrak pintar (smart contracts) yang memungkinkan pemrograman aplikasi terdesentralisasi yang kompleks.

2015: Peluncuran Ethereum
Pada Juli 2015, jaringan Ethereum diluncurkan secara resmi. Ethereum menyediakan lingkungan yang kuat untuk pengembangan dan pelaksanaan kontrak pintar, yang memungkinkan aplikasi terdesentralisasi yang lebih kompleks dan beragam.

2017: Lonjakan Minat dan ICO
Pada tahun 2017, blockchain dan cryptocurrency menjadi sangat populer, diikuti oleh lonjakan minat dan nilai pasar yang tinggi. Selama periode ini, Initial Coin Offerings (ICO) menjadi populer, di mana proyek-proyek baru mengumpulkan dana dengan menjual token mereka kepada investor.

2019: Pertumbuhan Industri Blockchain
Industri blockchain terus berkembang dengan adopsi yang semakin luas di berbagai sektor. Banyak perusahaan besar mulai menjelajahi dan menguji teknologi blockchain untuk berbagai aplikasi, seperti rantai pasokan, keuangan, asuransi, logistik, dan lainnya.

2020: DeFi dan NFT
Pada tahun 2020, terjadi ledakan DeFi (Decentralized Finance) yang memanfaatkan kontrak pintar untuk menciptakan produk keuangan terdesentralisasi. Selain itu, popularitas Non-Fungible Token (NFT) meningkat, yang menggunakan teknologi blockchain untuk menciptakan token unik yang dapat mewakili kepemilikan aset digital seperti karya seni, musik, dan lainnya
                </p>
            </p>
        </li>
        <li className="w-2/5">
            <p className="text-2xl font-medium leading-6 text-cyan-400">
                POW (Proof Of Work)
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-300">
                POW adalah singkatan dari Proof of Work (Bukti Kerja). Ini adalah salah satu mekanisme konsensus yang digunakan dalam blockchain untuk memvalidasi transaksi, mencapai kesepakatan, dan mengamankan jaringan. Proof of Work awalnya diperkenalkan oleh Bitcoin dan digunakan dalam banyak jaringan blockchain lainnya.

Dalam sistem Proof of Work, para penambang (miners) berkompetisi untuk menyelesaikan tugas komputasi yang rumit dan memakan waktu, yang dikenal sebagai "proof of work". Tugas ini dirancang untuk membutuhkan daya komputasi yang signifikan dan mengkonsumsi energi yang besar. Penambang yang berhasil menyelesaikan tugas pertama kali akan dapat menambahkan blok baru ke blockchain dan menerima imbalan dalam bentuk koin atau token.

Proses penambangan Proof of Work melibatkan komputasi yang berulang dan intensif, seperti mencari nilai hash yang sesuai dengan kriteria tertentu. Para penambang menggunakan daya komputasi mereka untuk memecahkan teka-teki kriptografis yang rumit ini. Setelah penambang berhasil menyelesaikan tugas, bukti kerja tersebut diverifikasi oleh jaringan, dan blok baru ditambahkan ke blockchain.

Keuntungan dari Proof of Work adalah keamanan yang tinggi dan resiliensi terhadap serangan. Karena penambang harus menggunakan daya komputasi yang signifikan untuk menyelesaikan tugas, sulit bagi penyerang untuk mengendalikan jaringan dengan menguasai mayoritas daya komputasi. Selain itu, Proof of Work juga memberikan insentif kepada penambang untuk menjaga keamanan jaringan, karena mereka dapat memperoleh imbalan dalam bentuk koin atau token.

Namun, Proof of Work juga memiliki beberapa kekurangan. Salah satu kelemahannya adalah penggunaan energi yang tinggi. Proses penambangan yang intensif mengkonsumsi daya yang besar, sehingga mempengaruhi efisiensi energi dan dampak lingkungan. Selain itu, Proof of Work juga membutuhkan waktu yang relatif lama untuk menyelesaikan tugas komputasi, yang dapat membatasi throughput atau kecepatan transaksi dalam jaringan.

Dalam beberapa tahun terakhir, ada upaya untuk mencari mekanisme konsensus alternatif yang lebih efisien energi, seperti Proof of Stake (POS) yang telah disebutkan sebelumnya.
                </p>
            </p>
        </li>
    </ul>
</div>

    </div>
  );
}

export default Materi;
