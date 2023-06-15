import React from 'react';
import Footer from '../components/Footer';
import Logo from '../img/linken.png';
import { Link } from 'react-router-dom';
import Kewr from '../img/kewr.png'
import Desolator from '../img/desolator.png'
import Team from '../components/Team'
import Blockchain from '../img/blockchain1.jpg'
import Yosemite from '../img/yosemite.png'
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
{/* Konsensus */}
<div className="relative p-4 bg-black dark:bg-gray-800">
    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
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
                            <div className="flex items-center justify-center w-12 h-12 text-white bg-cyan-500 rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                            Proof of Work ( PoW )
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                                deskripsi
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 text-white bg-cyan-500 rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                                Proof of Stake ( PoS )
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                                Deskripsi
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 text-white bg-cyan-500 rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                            Delegated Proof of Stake ( DPoS )
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            Deskripsi
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 text-white bg-cyan-500 rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                            Proof of Authority ( PoA )
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            Deskripsi
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 text-white bg-cyan-500 rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-white dark:text-white">
                            Practical Byzantine Fault Tolerance ( PBFT )
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-400 dark:text-gray-300">
                            Deskripsi
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
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
