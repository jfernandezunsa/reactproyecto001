import React from 'react'

interface Props {
  texto: string,
  fecha: string,
}

const CronogramaDatos = ({ texto = "", fecha = "" }: Props) => {
  return (
    <>
      <tr>
        <td className='py-3 pr-7'>{texto}</td>
        <td className='font-bold py-3'>{fecha}</td>
      </tr>
    </>
  )
}

export default CronogramaDatos
