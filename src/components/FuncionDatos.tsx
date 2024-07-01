import React from 'react'

interface Props {
  titulo: string;
  numeroVeces: number;
  resultadoEjercicio?: boolean;

}
/* puedes colocar valors iniciales */
const FuncionDatos = ({ titulo="Este es un titulo", numeroVeces=1, resultadoEjercicio }: Props) => {
  return (
    <>
      <div>Sabia que lo lograrias {titulo}</div>
      <div>lo hiciste en {numeroVeces} intentos</div>
      <div>{resultadoEjercicio ? <p>bien hecho</p> : null}</div>
    </>
  )
}

export default FuncionDatos
