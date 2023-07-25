import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function BoxEdukasi() {
  return (
      <div className="px-4 py-6 md:px-6 md:py-4 lg:px-8 lg:py-6 xl:flex xl:items-center mx-auto max-w-4xl bg-cyan-500">
        <div className="xl:w-0 xl:flex-1">
          <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
          jangan malu Belajar !
          </h2>
        </div>
        <div className="mt-6 sm:mt-0 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <div className="rounded-md shadow sm:flex-shrink-0">
            <Link to="/materi"><button className="w-full px-5 py-3 text-base font-medium leading-6 text-cyan-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:bg-cyan-300 hover:text-white">
              Mulai Belajar
            </button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default BoxEdukasi;
