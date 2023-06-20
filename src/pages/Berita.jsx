import React,{useState} from 'react'
import Kewr from '../img/kewr.png'
import Uwong from '../img/pabober.jpg'
import Binance from '../img/binance.jpeg'
import { Link } from 'react-router-dom'
import Blockchain from '../img/blockchain1.jpg'

function Berita() {

    const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log("berhasil di")
  };

  return (
    <div>
<div className="w-full p-12 bg-black">
<div className="flex items-center justify-between mb-12 header ">
  <p className="mb-4 text-4xl font-bold text-white flex items-center">
    Berita Terkait Blockchain
  </p>
  <Link to="/addBerita">
  <button className="border border-cyan-500 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ margin: '0', padding: '0' }}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
  </button>
  </Link>
</div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        <div
      className={`m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 ${isClicked ? 'w-full' : ''}`}
      onClick={handleClick}
    >
      <Link to="/berita1">
      <a className="block w-full h-full">
        <img alt="blog photo" src={Binance} className="object-cover w-full max-h-40" />
        <div className="w-full p-4 bg-black border border-yellow-500">
          <p className="font-bold text-yellow-500 text-md">Binance Menghadapi Penyelidikan Terkait Sigma Chain yang Berbasis di Swiss dalam Laporan Terbaru SEC</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">Work at home</p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
          Dalam laporan pengadilan terbaru oleh US Securities and Exchange Commission (SEC) terhadap Binance, perusahaan perdagangan aset kripto yang terdaftar di Swiss, Sigma Chain menjadi sorotan.</p>
          <div className="flex items-center mt-4">
            <a className="relative block">
              <img alt="profil" src={Uwong} className="mx-auto object-cover rounded-full h-10 w-10" />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-white">Pabo Bernando</p>
              <p className="text-gray-400 dark:text-gray-300">20 mars 2029 - 6 min read</p>
            </div>
          </div>
        </div>
      </a>
      </Link>
    </div>
    <div
      className={`m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 ${isClicked ? 'w-full' : ''}`}
      onClick={handleClick}
    >
      <Link to="/berita2">
      <a  className="block w-full h-full">
        <img alt="blog photo" src={Blockchain} className="object-cover w-full max-h-40" />
        <div className="w-full p-4 bg-black border border-cyan-400">
          <p className="font-bold text-cyan-500 text-md">Binance Menghadapi Penyelidikan Terkait Sigma Chain yang Berbasis di Swiss dalam Laporan Terbaru SEC</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">Work at home</p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
          Dalam laporan pengadilan terbaru oleh US Securities and Exchange Commission (SEC) terhadap Binance, perusahaan perdagangan aset kripto yang terdaftar di Swiss, Sigma Chain menjadi sorotan.</p>
          <div className="flex items-center mt-4">
            <a  className="relative block">
              <img alt="profil" src={Uwong} className="mx-auto object-cover rounded-full h-10 w-10" />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-white">Pabo Bernando</p>
              <p className="text-gray-400 dark:text-gray-300">20 mars 2029 - 6 min read</p>
            </div>
          </div>
        </div>
      </a>
      </Link>
    </div>
    {/* berita no 3 */}
    <div
      className={`m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 ${isClicked ? 'w-full' : ''}`}
      onClick={handleClick}
    >
      <Link to="/berita3">
      <a className="block w-full h-full">
        <img alt="blog photo" src={Binance} className="object-cover w-full max-h-40" />
        <div className="w-full p-4 bg-black border border-yellow-500">
          <p className="font-bold text-yellow-500 text-md">Binance Menghadapi Penyelidikan Terkait Sigma Chain yang Berbasis di Swiss dalam Laporan Terbaru SEC</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">Work at home</p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
          Dalam laporan pengadilan terbaru oleh US Securities and Exchange Commission (SEC) terhadap Binance, perusahaan perdagangan aset kripto yang terdaftar di Swiss, Sigma Chain menjadi sorotan.</p>
          <div className="flex items-center mt-4">
            <a className="relative block">
              <img alt="profil" src={Uwong} className="mx-auto object-cover rounded-full h-10 w-10" />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-white">Pabo Bernando</p>
              <p className="text-gray-400 dark:text-gray-300">20 mars 2029 - 6 min read</p>
            </div>
          </div>
        </div>
      </a>
      </Link>
    </div>
    <div
      className={`m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 ${isClicked ? 'w-full' : ''}`}
      onClick={handleClick}
    >
      <Link to="/berita4">
      <a className="block w-full h-full">
        <img alt="blog photo" src={Kewr} className="object-cover w-full max-h-40" />
        <div className="w-full p-4 bg-black border border-cyan-400">
          <p className="font-bold text-cyan-500 text-md">Binance Menghadapi Penyelidikan Terkait Sigma Chain yang Berbasis di Swiss dalam Laporan Terbaru SEC</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">Work at home</p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
          Dalam laporan pengadilan terbaru oleh US Securities and Exchange Commission (SEC) terhadap Binance, perusahaan perdagangan aset kripto yang terdaftar di Swiss, Sigma Chain menjadi sorotan. Laporan tersebut mengklaim bahwa Changpeng Zhao (CZ), CEO Binance, adalah pemilik sebenarnya dari Sigma Chain, dengan beberapa karyawan Binance yang mengoperasikan perusahaan tersebut.

Laporan tersebut juga menyebutkan bahwa manajer back office Binance memiliki peran ganda, sebagai presiden Sigma Chain dan memiliki hak tanda tangan atas rekening bank BAM Trading. Sigma Chain digambarkan sebagai trader aktif di dua platform Binance, yang mengklaim diri sebagai "market maker utama untuk bursa Binance."
          </p>
          <div className="flex items-center mt-4">
            <a className="relative block">
              <img alt="profil" src={Uwong} className="mx-auto object-cover rounded-full h-10 w-10" />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 dark:text-white">Pabo Bernando</p>
              <p className="text-gray-400 dark:text-gray-300">20 mars 2029 - 6 min read</p>
            </div>
          </div>
        </div>
      </a>
      </Link>
    </div>
    <div
      className={`m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 ${isClicked ? 'w-full' : ''}`}
      onClick={handleClick}
    >
      <Link to="/berita5">
      <a className="block w-full h-full">
        <img alt="blog photo" src={Kewr} className="object-cover w-full max-h-40" />
        <div className="w-full p-4 bg-black border border-cyan-400">
          <p className="font-bold text-cyan-500 text-md">Binance Menghadapi Penyelidikan Terkait Sigma Chain yang Berbasis di Swiss dalam Laporan Terbaru SEC</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">Work at home</p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
          Dalam laporan pengadilan terbaru oleh US Securities and Exchange Commission (SEC) terhadap Binance, perusahaan perdagangan aset kripto yang terdaftar di Swiss, Sigma Chain menjadi sorotan. Laporan tersebut mengklaim bahwa Changpeng Zhao (CZ), CEO Binance, adalah pemilik sebenarnya dari Sigma Chain, dengan beberapa karyawan Binance yang mengoperasikan perusahaan tersebut.

Laporan tersebut juga menyebutkan bahwa manajer back office Binance memiliki peran ganda, sebagai presiden Sigma Chain dan memiliki hak tanda tangan atas rekening bank BAM Trading. Sigma Chain digambarkan sebagai trader aktif di dua platform Binance, yang mengklaim diri sebagai "market maker utama untuk bursa Binance."
          </p>
          <div className="flex items-center mt-4">
            <a className="relative block">
              <img alt="profil" src={Uwong} className="mx-auto object-cover rounded-full h-10 w-10" />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 dark:text-white">Pabo Bernando</p>
              <p className="text-gray-400 dark:text-gray-300">20 mars 2029 - 6 min read</p>
            </div>
          </div>
        </div>
      </a>
      </Link>
    </div>
    <div
      className={`m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 ${isClicked ? 'w-full' : ''}`}
      onClick={handleClick}
    >
      <Link to="/berita6">
      <a  className="block w-full h-full">
        <img alt="blog photo" src={Kewr} className="object-cover w-full max-h-40" />
        <div className="w-full p-4 bg-black border border-cyan-400">
          <p className="font-bold text-cyan-500 text-md">Binance Menghadapi Penyelidikan Terkait Sigma Chain yang Berbasis di Swiss dalam Laporan Terbaru SEC</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">Work at home</p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
          Dalam laporan pengadilan terbaru oleh US Securities and Exchange Commission (SEC) terhadap Binance, perusahaan perdagangan aset kripto yang terdaftar di Swiss, Sigma Chain menjadi sorotan. Laporan tersebut mengklaim bahwa Changpeng Zhao (CZ), CEO Binance, adalah pemilik sebenarnya dari Sigma Chain, dengan beberapa karyawan Binance yang mengoperasikan perusahaan tersebut.

Laporan tersebut juga menyebutkan bahwa manajer back office Binance memiliki peran ganda, sebagai presiden Sigma Chain dan memiliki hak tanda tangan atas rekening bank BAM Trading. Sigma Chain digambarkan sebagai trader aktif di dua platform Binance, yang mengklaim diri sebagai "market maker utama untuk bursa Binance."
          </p>
          <div className="flex items-center mt-4">
            <a  className="relative block">
              <img alt="profil" src={Uwong} className="mx-auto object-cover rounded-full h-10 w-10" />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 dark:text-white">Pabo Bernando</p>
              <p className="text-gray-400 dark:text-gray-300">20 mars 2029 - 6 min read</p>
            </div>
          </div>
        </div>
      </a>
      </Link>
    </div>
        </div>
    </div>
    </div>
  )
}

export default Berita