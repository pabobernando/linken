import React from 'react';
import { Link } from 'react-router-dom'
import Blackrok from '../../img/blackrock.jpg'

function BeritaDetail() {
  return (
    <div className="bg-black min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl text-white font-bold mb-4">CEO BlackRock: Bitcoin Bakal Ubah Sistem Keuangan</h1>
        <p className="text-gray-600 mb-6">Dikutip dari</p>
        <img
          src={Blackrok}
          alt="News Thumbnail"
          className="rounded-lg w-1/2 object-cover mx-auto mb-6"
        />
        <p className="text-lg leading-relaxed mb-4 text-gray-400">
        Larry Fink, CEO BlackRock, menyatakan kripto khususnya Bitcoin akan bisa merevolusi sistem keuangan dalam interviewnya pada Fox Business hari Rabu.
"Kami percaya bahwa jika kami dapat membuat lebih banyak tokenisasi aset dan sekuritas, Bitcoin yang akan merevolusi keuangan," katanya. Sebelumnya, Fink dikenal skeptis terhadap crypto. Alasan Larry menolak penggunaan mata uang digital ini disebabkan "aktivitas terlarang."
        </p>
        <p className="text-lg leading-relaxed mb-4 text-gray-400">
        Di sisi lain, Fink pada dasarnya setuju dengan fundamental dari kripto. Koin dapat dianggap sebagai emas digital. Fink melanjutkan, "Alih-alih berinvestasi dalam emas sebagai lindung nilai terhadap inflasi, lindung nilai terhadap masalah berat di satu negara, atau devaluasi mata uang Anda di negara mana pun Anda berada, bitcoin adalah aset internasional, aset ini tidak didasarkan pada satu mata uang apa pun sehingga dapat mewakili aset yang dapat dimainkan sebagai alternatif."
        </p>
        <p className="text-lg leading-relaxed mb-6 text-gray-400">
        Sebagai informasi, Komisi Sekuritas dan Bursa AS (SEC) telah menolak berbagai manajer investasi untuk mendaftarkan ETF (Exchange Traded Fund) kripto, seperti ARK Invest, Fidelity, Invesco, WisdomTree, dan banyak lainnya.

BlackRock mengajukan dokumen ke Komisi Sekuritas dan Pertukaran AS (SEC) pada 16 Juni untuk ETF bitcoin. Sayangnya, BlackRock juga belum mendapat restu untuk memasarkan produk ETF Bitcoin. Komisi Bursa dan Sekuritas AS (SEC/Securities and Exchange Commission) mengatakan bahwa pengajuan ETF bitcoin saat ini "tidak memadai."

BlackRock memiliki historis yang cukup baik dalam mengajukan produk ETF pada SEC, sebab dari 576 pengajuan ETF, 575 diterima dan hanya sekali BlackRock mendapat penolakan (2014).
        </p>
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

export default BeritaDetail;
