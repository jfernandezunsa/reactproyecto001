import React from 'react'
import images from '../Images'

const EnlaceRegistro = () => {
  return (
    <section className="text-white bg-[#03152D] font-bold lg:text-[20px] md:flex p-7 justify-between items-center">
    <div>
      <p>
        El registro de la postulación se realiza a través de la página web
        de:
      </p>
      <p className="mt-4 lg:mt-0">
        <a
          href="https://www.forwomeninscience.com/"
          target="_blank"
          className="text-[18px] md:text-[24px] lg:text-[40px]"
        >
          https://www.forwomeninscience.com/
        </a>
      </p>
    </div>
    <div className="flex items-center">
      <p>
      <a href="https://www.unsa.edu.pe/wp-content/uploads/2022/11/Gua-para-registro-de-la-propuesta-Premio-Nacional-LOral-UNESCO-2023-VF.pdf" target='_blank'>
        <img
          src={images.iconPDF}
          alt="for Women In Science"
          className="w-[50px]"
        />
        </a>
      </p>
      <p className="pl-4 text-balance md:w-[200px] leading-5">
        <a href="https://www.unsa.edu.pe/wp-content/uploads/2022/11/Gua-para-registro-de-la-propuesta-Premio-Nacional-LOral-UNESCO-2023-VF.pdf" target='_blank'>Guía para el registro y la postulación en la plataforma</a>
      </p>
    </div>
    <div className="flex items-center">
      <p>
      <a href="https://www.unsa.edu.pe/wp-content/uploads/2022/11/Gua-para-registro-de-la-propuesta-Premio-Nacional-LOral-UNESCO-2023-VF.pdf" target='_blank'>
        <img
          src={images.iconPDF}
          alt="for Women In Science"
          className="w-[50px]"
        />
        </a>
      </p>
      <p className="pl-4 text-balance md:w-[150px] leading-5">
        <a href="https://www.unsa.edu.pe/wp-content/uploads/2022/11/REGLAS-Y-REGULACIONES-CERAN-fwis.pdf" target='_blank'>Bases del Concurso 2024</a>
      </p>
    </div>
  </section>
  )
}

export default EnlaceRegistro