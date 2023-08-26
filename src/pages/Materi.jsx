import React, { useState } from 'react';
import S1 from '../components/BChain'
import S2 from '../components/JenisBlockchain'
import S3 from '../components/Kriptografi'
import S4 from '../components/SmartContract'
import S5 from '../components/StrukturBlockchain'
import S6 from '../components/Konsensus'

function Materi() {

  return (
    <div>
     
<div className="max-w-screen p-8 mx-auto bg-gray-950">
    <h2 className="mb-12 text-3xl font-extrabold leading-9 text-gray-100 border-b-2 border-gray-100">
        Edukasi
    </h2>
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
</div>

    </div>
  );
}

export default Materi;
