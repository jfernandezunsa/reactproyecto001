import React from 'react'

const index = () => {
  return (
    <div className="bg-[#053252] [&>*]:pb-3">
      <h4 className="text-lg font-bold text-white">Contactanos:</h4>
      <p>
        Para cualquier pregunta relacionada con las regulaciones, consulte
        las preguntas frecuentes en línea en la plataforma
        <a
          href="www.forwomeninscience.com"
          target="_blank"
          className="block font-bold pt-3"
        >
          www.forwomeninscience.com
        </a>
        <a
          href="mailto:info@forwomeninscience.com"
          target="_blank"
          className="block font-bold py-0"
        >
          info@forwomeninscience.com
        </a>
        <a
          href="premilorealunesco@senacyt.gob.pa"
          target="_blank"
          className="block font-bold py-0"
        >
          premilorealunesco@senacyt.gob.pa
        </a>
      </p>
    </div>
  )
}

export default index
