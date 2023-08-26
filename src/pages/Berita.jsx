import React,{useState, useEffect} from 'react'
import Kewr from '../img/kewr.png'
import Uwong from '../img/pabober.jpg'
import Blackrock from '../img/blackrock.jpg'
import Game from '../img/game.jpg'
import { Link } from 'react-router-dom'
import useAddress from '../store/address';

function Berita() {
  const user = useAddress((state) => state.user);
    const [isClicked, setIsClicked] = useState(false);
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
      const getImage = async () => {
        try {
          const response = await fetch('https://ipfs.io/ipfs/QmPczREDrQrk7aWsibzQocrVpFwx7Wppvd1x6N9Pogmg7N?filename=ilustrasi.png');
          const data = await response.blob();
          const url = URL.createObjectURL(data);
          setImageURL(url);
        } catch (error) {
          console.log(error);
        }
      };
      getImage();
    }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log("berhasil di")
  };

  return (
    <div>
<div className="w-full h-screen p-12 bg-gray-950">
<div className="flex items-center justify-between mb-12 header ">
  <p className="mb-4 text-4xl font-bold text-white flex items-center">
    Berita
  </p>
  <Link to="/addBerita">
  {/* <button className="border border-cyan-500 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ margin: '0', padding: '0' }}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
  </button> */}
  </Link>
</div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        <div
      className={`m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 ${isClicked ? 'w-full' : ''}`}
      onClick={handleClick}
    >
      <Link to="/berita1">
      <a className="block w-full h-full">
        <img alt="blog photo" src={Blackrock} className="object-cover w-full max-h-40" />
        <div className="w-full p-4 bg-gray-950 border border-cyan-500">
          <p className="font-bold text-cyan-500 text-md">CEO BlackRock: Bitcoin Bakal Ubah Sistem Keuangan</p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
          Larry Fink, CEO BlackRock, menyatakan kripto khususnya Bitcoin akan bisa merevolusi sistem keuangan dalam interviewnya pada Fox Business<span className='text-blue-500'> Lebih Lanjut...</span></p>
          <div className="flex items-center mt-4">
            <a className="relative block">
              <img alt="profil" src={Uwong} className="mx-auto object-cover rounded-full h-10 w-10" />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-100">{user}</p>
              <p className="text-gray-400">26-07-2023 - 17:00</p>
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
      <a className="block w-full h-full">
        <img alt="blog photo" src={Game} className="object-cover w-full max-h-40" />
        <div className="w-full p-4 bg-gray-950 border border-cyan-500">
          <p className="font-bold text-cyan-500 text-md">Bagaimana Teknologi Blockchain Mengubah Dunia Gaming</p>
          <p className="font-light text-gray-400 text-md">
          Transformasi luar biasa dalam banyak industri terjadi berkat teknologi blockchain. Salah satu sektor yang mengalami revolusi adalah industri gaming, yang berhasil menarik minat sekitar 3,09 miliar pemain video aktif di seluruh dunia.<span className='text-blue-500'>Lebih Lanjut...</span></p>
          <div className="flex items-center mt-4">
            <a className="relative block">
              <img alt="profil" src={Uwong} className="mx-auto object-cover rounded-full h-10 w-10" />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-white">{user}</p>
              <p className="text-gray-400">22-06-2023 - 17:00</p>
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
      {imageURL && <img alt="blog photo" src={imageURL} className="object-cover w-full max-h-40" />}
        <div className="w-full p-4 bg-gray-950 border border-cyan-500">
          <p className="font-bold text-cyan-500 text-md">Panduan Regulasi untuk Mata Uang Kripto di Indonesia</p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
          Apakah Mata Uang Kripto Legal di Indonesia?
Mata uang Indonesia ditentukan oleh hukum, menurut Pasal 23B konstitusi negara, dan undang-undang mata uang tahun 2011 mengamanatkan bahwa hampir semua transaksi keuangan di Indonesia dilakukan dalam Rupiah</p>
          <div className="flex items-center mt-4">
            <a className="relative block">
              <img alt="profil" src={Uwong} className="mx-auto object-cover rounded-full h-10 w-10" />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-white">{user}</p>
              <p className="text-gray-400 dark:text-gray-300">22-06-2023 - 17:00</p>
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