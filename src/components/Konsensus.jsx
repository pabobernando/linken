import React from 'react'

function Konsensus() {
  return (
    <>
    <section>
    <div className="container p-4 mx-auto bg-black max-w-9xl sm:p-6 lg:p-8 dark:bg-gray-800">
        <div className="flex flex-wrap -mx-8">
            <div className="w-full px-8 lg:w-1/2">
                <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                    <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading text-white">
                        Judul
                    </h2>
                    <p className="mb-8 leading-loose text-gray-400 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                    </p>
                    <div className="w-full md:w-1/3">
                        <button type="button" className="py-2 px-4  bg-cyan-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Lihat Selengkapnya
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full px-8 lg:w-1/2">
                <ul className="space-y-12">
                    <li className="flex -mx-4">
                        <div className="px-4">
                            <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                1
                            </span>
                        </div>
                        <div className="px-4">
                            <h3 className="my-4 text-xl font-semibold text-white">
                                Judul
                            </h3>
                            <p className="leading-loose text-gray-400">
                                Deskripsi
                            </p>
                        </div>
                    </li>
                    <li className="flex -mx-4">
                        <div className="px-4">
                            <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                2
                            </span>
                        </div>
                        <div className="px-4">
                            <h3 className="my-4 text-xl font-semibold text-white">
                                Judul
                            </h3>
                            <p className="leading-loose text-gray-400">
                                Deskripsi
                            </p>
                        </div>
                    </li>
                    <li className="flex -mx-4">
                        <div className="px-4">
                            <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                3
                            </span>
                        </div>
                        <div className="px-4">
                            <h3 className="my-4 text-xl font-semibold text-white">
                                Judul
                            </h3>
                            <p className="leading-loose text-gray-400">
                                Deskripsi
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Konsensus