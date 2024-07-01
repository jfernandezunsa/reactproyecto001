import React from 'react'

 interface Props{
  texto: string
  fecha: string
 }

const Calendario = ({texto, fecha}: Props) => {
  return (
    <>
    <span>{texto}</span>
    <span>{fecha}</span>
    </>
  )
}

export default Calendario