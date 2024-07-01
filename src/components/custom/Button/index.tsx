import React from 'react'

interface Props {
  texto: string,
}

const Button = ({texto=""}:Props) => {
  return (
    <span className=' bg-red-300 p-3'>
      {texto}
    </span>
  )
}

export default Button