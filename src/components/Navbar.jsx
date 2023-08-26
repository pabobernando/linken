import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAddress from '../store/address'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Linken from '../img/linken.png'

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { address, connectMetamask } = useAddress();

  // useEffect(() => {
  //   // Cek apakah pengguna sudah login saat komponen dimuat
  //   if (!address) {
  //     navigate('/'); // Jika belum login, arahkan ke halaman beranda atau halaman login
  //   }
  // }, [address, navigate]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-gray-950">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <span className="text-white font-bold max-w-xs">
                <img src={Linken} className='w-24' alt="Linken Logo" />
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/"><a className="text-gray-300 hover:bg-cyan-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a></Link>
              <Link to="/berita"><a className="text-gray-300 hover:bg-cyan-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Berita</a></Link>
              <Link to="/diskusi"><a className="text-gray-300 hover:bg-cyan-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Diskusi</a></Link>
              <button onClick={connectMetamask} className="border border-cyan-500 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded">
                {address ? null : 'Login Metamask'}
                <span>{address}</span>
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
          <button
  type="button"
  onClick={toggleMenu}
  className="bg-gray-950 inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
>
<FontAwesomeIcon icon={faBars} />
</button>

          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/"><a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a></Link>
            <Link to="/berita"><a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Berita</a></Link>
            <Link to="/diskusi"><a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Diskusi</a></Link>
            <Link to="/team"><a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a></Link>
            <button onClick={connectMetamask} className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
              {address ? null : 'Login Metamask'}
              <span>{address}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
