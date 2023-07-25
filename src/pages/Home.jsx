import React from 'react';
import Footer from '../components/Footer';
import Logo from '../img/linken.png';
import Robot from '../img/robot.png';
import { Link } from 'react-router-dom';
import Team from '../components/Team';
import Powered from '../components/Powered';
import Spesial from '../components/Spesial';
import BoxEdukasi from '../components/BoxEdukasi';

function Home() {
  return (
    <div className='bg-black'>
      <div className="relative z-20 flex flex-col items-center overflow-hidden bg-black">
        <div className="container flex flex-col px-6 py-16 mx-auto sm:flex-row sm:justify-between sm:items-center sm:px-10">
          <div className="flex flex-col text-center sm:text-left sm:w-2/5">
            <span className="w-20 h-2 mb-12 bg-cyan-500"></span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-white uppercase font-bebas-neue sm:text-8xl">
              Melangkah Maju Era Revolusi
              <span className="text-5xl sm:text-7xl text-cyan-500">
                Digital
              </span>
            </h1>
            <p className="text-sm text-gray-500 sm:text-base">
              keamanan dan privasi telah menjadi aspek krusial dalam menjaga integritas. Dengan bangga kami persembahkan Linken, sebuah platform edukasi Blockchain, yang berkomitmen penuh untuk menjadikan
               keamanan dan privasi Anda sebagai prioritas utama.
               Yang membuat Linken begitu istimewa adalah, selain menjadi solusi andal untuk keamanan dan privasi, Linken juga merupakan proyek opensource yang terbuka bagi semua orang. Artinya, siapa saja yang tertarik dan bersemangat dalam dunia teknologi dapat berkontribusi untuk meningkatkan kualitas dan keamanan platform ini
            </p>
            <div class="flex mt-8">
               <Link to='/materi'> <a href="#" className="px-4 py-2 mr-4 text-white uppercase bg-cyan-500 border-2 border-transparent rounded-lg text-md hover:bg-cyan-400">
                    Mulai Belajar
                </a>
                </Link>
                <Link to='/dokumentasi'><a href="#" className="px-4 py-2 text-white uppercase bg-transparent border-2 border-cyan-500 rounded-lg hover:bg-cyan-500 text-md">
                    Dokumentasi
                </a>
                </Link>
            </div>
          </div>
          <div className="relative mt-8 sm:mt-0 sm:w-3/5 animate-pulse">
          <img
  src={Robot}
  className="w-full"
  alt="Robot"
/>
          </div>
        </div>
      </div>
      < Spesial />

      <Powered />
      <Footer />
    </div>
  );
}

export default Home;
