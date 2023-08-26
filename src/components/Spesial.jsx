import React from 'react'
import Github from '../img/github.png'
import Secure from '../img/secure.png'
import Private from '../img/private.png'

function Spesial() {
  return (
    <div>
<div className="flex flex-wrap items-center justify-center gap-8 text-center">
      <div className="w-full px-4 py-4 mt-6 bg-gray-950 rounded-lg shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4 border border-cyan-500">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
                <img src={Private} alt="private" />
            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-white sm:text-xl">
        PRIVATE
        </h3>
        <p className="py-4 text-gray-500 text-md dark:text-gray-300">
        Sepenuhnya anonim dan tanpa jejak,
Tidak ada email, tidak ada nomor telepon,
Melangkah di dunia yang tak terlacak.
        </p>
    </div>
    <div className="w-full px-4 py-4 mt-6 bg-gray-950 border border-cyan-500 rounded-lg shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4 ">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
                <img src={Secure} alt="secure" />
            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-white sm:text-xl">
        SECURE
        </h3>
        <p className="py-4 text-gray-500 text-md">
        Dalam dunia digital yang tak terduga, Keamanan adalah prioritas utama, Rahasia kita tetap aman dan terjaga.
        </p>
    </div>
    <div className="w-full px-4 py-4 mt-6 bg-gray-950 border border-cyan-500 rounded-lg shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4 ">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
            <img src={Github} alt="github" />
            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-white sm:text-xl">
        OPEN SOURCE
        </h3>
        <p className="py-4 text-gray-500 text-md dark:text-gray-300">
        Berkontribusi dengan tiada henti,
Linken terbuka untukmu, Code, Desain, atau apapun yang terbaik
        </p>
    </div>
</div>

    </div>
  )
}

export default Spesial