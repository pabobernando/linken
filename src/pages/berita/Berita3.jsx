import React from 'react';
import { Link } from 'react-router-dom'
import Game from '../../img/ethereum.jpg'


function Berita3() {
  return (
    <div className="bg-black min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl text-white font-bold mb-4">Panduan Regulasi untuk Mata Uang Kripto di Indonesia</h1>
        <p className="text-gray-600 mb-6">Published on 22-06-2023</p>
        <img
          src={Game}
          alt="News Thumbnail"
          className="rounded-lg w-1/2 object-cover mx-auto mb-6"
        />
        <p className="text-lg leading-relaxed mb-4 text-gray-400">
        Pertumbuhan mata uang kripto semakin populer, namun regulator Indonesia masih berupaya mengejar ketertinggalan. Oleh karena itu, para investor asing yang tertarik dengan pasar yang belum tergarap ini perlu memperhatikan lingkungan regulasi saat ini seputar mata uang kripto.
       </p>
        <h1 className="text-3xl leading-relaxed mb-4 text-white font-bold">
        Apakah Mata Uang Kripto Legal di Indonesia?
        </h1>
        <p className="text-lg leading-relaxed mb-6 text-gray-400">
        Mata uang Indonesia ditentukan oleh hukum, sesuai dengan Pasal 23B konstitusi negara, dan undang-undang mata uang tahun 2011 mengamanatkan bahwa hampir semua transaksi keuangan di Indonesia dilakukan dalam Rupiah, satu-satunya mata uang yang diakui di Indonesia. Hanya transaksi internasional, pengeluaran pemerintah, dan deposito bank yang dikecualikan.
        Pembelian dan penjualan mata uang kripto di Indonesia hanya diperbolehkan untuk alasan investasi atau untuk aset kripto yang ditentukan secara hukum, sesuai dengan undang-undang negara. Namun, bank sentral baru-baru ini menggarisbawahi bahwa mata uang kripto bukanlah metode pembayaran yang sah. Bank dilarang memfasilitasi penggunaan mata uang kripto sebagai bentuk pembayaran</p>
        <p className="text-lg leading-relaxed mb-6 text-gray-400">Indonesia Mengakui Mata Uang Kripto Hanya Sebagai Komoditas Perdagangan
Peraturan Menteri Perdagangan No. 99 tahun 2018 secara resmi mengesahkan perdagangan aset kripto dan menetapkannya sebagai komoditas perdagangan yang sah. Selain itu, Badan Pengawas Perdagangan Berjangka Komoditi Indonesia, atau Bappebti, menerbitkan Peraturan No. 5 tahun 2019 untuk memberikan kerangka kerja regulasi menyeluruh untuk masa depan aset kripto.

Menurut data dari Asosiasi Blockchain Indonesia, jumlah investor telah meningkat 280% sejak tahun 2020, dari 1,5 juta menjadi 4,2 juta, dengan volume perdagangan harian mencapai USD 117,4 juta.

Peraturan Bappebti di Indonesia ini telah membuat kemajuan yang signifikan untuk membangun kerangka hukum yang komprehensif yang akan menjamin sektor kripto berkembang di negara ini, meskipun belum dapat diterima sebagai alat pembayaran.</p>
<p>Existing Cryptocurrency Regulations in Indonesia
Key Regulations

Bappebti Regulation No. 7 (2020): Bappebti has compiled a list of 229 crypto assets that may be traded lawfully on future exchanges.
Bappebti Regulation No. 5 (2019): Bitcoin has been recognized as a commodity and the regulatory standards for cryptocurrency exchanges also has been classified.</p>
        <div className="flex justify-center items-center">
          <Link to="/berita">
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            Kembali ke halaman Berita
          </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Berita3;
