import React from 'react';
import Footer from '../components/Footer';
import Logo from '../img/linken.png';
import { Link } from 'react-router-dom';
import Team from '../components/Team'
import Powered from '../components/Powered';
import SmartContract from '../components/SmartContract';
import Konsensus from '../components/Konsensus';
import Kriptografi from '../components/Kriptografi';
import JenisBlockchain from '../components/JenisBlockchain';
import BChain from '../components/BChain';

function Home() {
  const click = () => {
    console.log("kepencet")
  }

  return (
    <div>
      <div className="relative z-20 h-full bg-black dark:bg-black flex items-center">
  <div className="container grid grid-cols-1 place-items-center px-6 mx-auto mt-11">
    <div className="max-w-xs m-auto md:max-w-6xl animate-pulse">
      <img src={Logo} alt="Logo" />
    </div>
    <h2 className="w-full py-8 mx-auto text-xl font-light text-center text-gray-500 dark:text-white">
      Jadilah bagian dari perubahan positif dengan bergabung bersama Linken, yang mendorong inovasi dan pengembangan teknologi yang
      berkelanjutan dan menjadi pelaku utama dalam transformasi digital di era blockchain. Dengan bergabung bersama Linken, Anda akan memiliki kesempatan untuk mempelajari, mengembangkan, dan menerapkan teknologi blockchain yang revolusioner ini. Bersama-sama, kita dapat menciptakan solusi yang aman, transparan, dan efisien untuk berbagai sektor, mulai dari keuangan hingga logistik, dari perawatan kesehatan hingga pendidikan. Mari bergabung sekarang dan menjadi bagian dari gerakan blockchain yang mengubah dunia menuju masa depan yang lebih baik.
    </h2>
    <div className="flex items-center justify-center mt-4">
      <Link to="/materi">
        <a href="#" className="px-4 py-2 mr-4 text-white uppercase rounded bg-cyan-500  border-2 border-transparent text-md hover:bg-cyan-400">
          Mulai
        </a>
      </Link>
      <a href="#" className="px-4 py-2 text-white-800 uppercase bg-transparent rounded border-2 border-cyan-500 dark:text-white hover:bg-cyan-500 hover:text-white text-md text-white">
        Dokumentasi
      </a>
    </div>
    <Powered />
<BChain />
<JenisBlockchain />
<Kriptografi />
<SmartContract />
<Konsensus />
<Team />
  </div>
</div>
      <Footer />
    </div>
  );
}

export default Home;
