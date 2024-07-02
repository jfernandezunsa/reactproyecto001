import { useState } from "react";
import React from "react";
import "./App.css";
import images from "./components/Images";
import Calendario from "./components/Calendario";
import Footer from "./components/Footer";
import EnlaceRegistro from "./components/EnlaceRegistro";
import Button from "./components/custom/CronogramaDatos";
import CronogramaDatos from "./components/custom/CronogramaDatos";
import textos from "./api/calendarioDatos";
import cronograma from "./api/calendarioDatos";
import Contactanos from "./components/custom/Contactanos";


const App = () => {
  return (
    <>
      <header className="flex items-center text-white bg-[#03152D]">
        <div className="bg-[#EAE2E0]">
          <img
            src={images.fwics}
            alt="for Women In Science"
            className="p-3 min-w-[160px] lg:w-[200px]"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="bg-[#03152D] flex justify-between p-4  lg:px-7">
            <h1 className="text-balance md:text-xl lg:text-2xl font-bold">
              <span className="font-extrabold block">Convocatoria 2024</span>{" "}
              Premio regional L’oreal - UNESCO
            </h1>
            <img
              src={images.unsa}
              alt="Universidad Nacional de San Agustin de Arequips"
              className="w-[171px] hidden invisible md:block md:visible"
            />
          </div>
          <nav className="bg-[#053252] hidden invisible md:block md:visible">
            <ul className="flex items-center justify-between text-sm px-2 py-2 [&>*]:p-2 [&>*]:max-w-[150px] text-center text-balance leading-none">
              <li>Ganadores del Concurso</li>
              <li>Informate más</li>
              <li>Cronograma</li>
              <li>Bases del Concurso 2024</li>
              <li>Postula aquí</li>
              <li>Guía para el registro y Postulación</li>
              <li>Comité Evaluador</li>
              <li>Contactenos</li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="slider">
        <ul>
          <li>
            <img src={images.slider01} />
          </li>
          <li>
            <img src={images.slider02} />
          </li>
          <li>
            <img src={images.slider03} />
          </li>
          <li>
            <img src={images.slider04} />
          </li>
        </ul>
      </section>
      <main className="bg-white ">
        <section className="py-10 px-4 lg:px-44 [&>*]:pb-4">
          <h4 className="text-xl font-bold text-[#053252]">
            Acerca de L’Oréal
          </h4>

          <p>
            Durante más de 100 años, L’Oreal, el líder mundial en productos de
            belleza, se ha dedicado solamente a una cosa: cumplir con las
            aspiraciones de belleza de los consumidores en todo el mundo.
            Nuestro propósito, crear una belleza que mueva al mundo, define
            nuestro enfoque de la belleza como inclusivo, ético, generoso y
            comprometido con la sostenibilidad social y ambiental. Con nuestro
            amplio portafolio de 35 marcas internacionales y los ambiciosos
            compromisos de sostenibilidad de nuestro programa L’Oreal for the
            future, le ofrecemos a cada persona del mundo lo mejor en términos
            de calidad, eficacia, seguridad, sinceridad y responsabilidad al
            tiempo que celebramos la belleza en su infinita pluralidad.
          </p>

          <p>
            Con 85,400 empleados comprometidos, una huella geográfica
            equilibrada y ventas en todas las redes de distribución (comercio
            electrónico, mercado de masas, tiendas departamentales, farmacias,
            salones de belleza, comercios minoristas en sitios turísticos y
            comercios minoristas de marca) en 2021 el grupo generó ventas que
            alcanzaron los 32.28 mil millones de euros. Con 20 centros de
            investigación en 11 países alrededor del mundo, un equipo de
            investigación y desarrollo dedicado de 4,000 científicos y más de
            3,000 técnicos profesionales, L’Oreal se enfoca en inventar el
            futuro de la belleza y transformarse en una potencia de la
            tecnología de la belleza.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 text-white [&>*]:p-7">
          <Contactanos />
          <div className="bg-[#33556E] lg:col-span-2">
            <h4 className="text-xl font-extrabold text-white">
              Calendario 2024:
            </h4>
            <div>
              <table className="table-auto divide-y divide-gray-200 text-lg leading-5">
                {
                  cronograma.map( ( texto, indice ) => <CronogramaDatos key={indice} texto={texto.texto} fecha={texto.fecha} /> )
                }
              </table>
            </div>
          </div>
        </div>
        <EnlaceRegistro />
      </main>
      <Footer />
    </>
  );
};

export default App;
