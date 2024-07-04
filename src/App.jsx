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
import Video from "./components/custom/Video";
import RotativeImg from "./components/Carousel";

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
              <li>Home</li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="slider">
      <RotativeImg />
      </section>
      <main className="bg-white ">
        <section className="py-10 px-4 lg:px-44 [&>*]:pb-4">
          <h4 className="text-xl font-bold text-[#053252]">
            Convocatoria abierta en Perú para el programa “Premio Regional
            L'Oréal- Unesco Para las Mujeres en la Ciencia Centroamérica y
            Región Andina” 2024
          </h4>
          <div>
          <Video />
          </div>
          <p className="italic">
            Solo un tercio de las mujeres graduadas en STEM avanzan a obtener un
            doctorado. Los datos reflejan que las mujeres con hijos tienden a
            tener empleos menos estables en áreas científicas en comparación con
            los hombres
          </p>
          <p>
            <span className="font-bold">Lima, julio de 2024.</span> Con el
            objetivo de impulsar y reconocer el trabajo realizado por las
            científicas de Colombia, Ecuador, Panamá y Perú, L’Oréal Groupe
            Centroamérica y región Andina anuncia, junto con aliados
            estratégicos, la apertura de la convocatoria al programa “Para las
            Mujeres en la Ciencia” para el año 2024 en dichos países. Este
            programa, abierto desde el 05 de julio hasta 15 de agosto 13:00
            horas Bogotá, Quito, Lima y Ciudad de Panamá, tiene como objetivo
            promover y fomentar la participación de las mujeres en la ciencia en
            estos cuatro países dada la gran brecha de género que sigue
            existiendo (Solo 3 de cada 10 científicos son mujeres según informe
            científico publicado por la Unesco). El programa regional busca
            identificar y recompensar a investigadoras talentosas en disciplinas
            STEM, que incluyen ciencia, tecnología, ingeniería y matemáticas.
          </p>
          <p>
            En la edición de 2024 para Centroamérica y región Andina,{" "}
            <span className="font-bold">
              se reconocerá a cuatro mujeres investigadoras: una colombiana, una
              ecuatoriana, una panameña y una peruana,
            </span>{" "}
            destacadas a nivel nacional e internacional por su trayectoria y
            producción científica. Este reconocimiento busca incentivar sus
            carreras científicas, otorgando un subsidio de USD $10.000 a cada
            una, para que estos fondos se destinen a financiar los proyectos de
            investigación que tengan en marcha o sigan su formación académica.
          </p>
          <p>
            El programa cuenta con el apoyo de la Secretaría Nacional de
            Ciencia, Tecnología e Innovación de la República de Panamá
            (SENACYT), el Colegio Mayor de Nuestra Señora del Rosario
            (Universidad del Rosario), la Universidad Nacional de San Agustín de
            Arequipa (UNSA) y la Universidad Técnica Particular de Loja (UTPL),
            destacándose su compromiso en promover la participación de las
            mujeres en el ámbito científico.
          </p>
          <p>
            En un estudio realizado junto con IPSOS Napoleón Franco en 2023
            sobre las brechas de género en STEM (Ciencia, Tecnología, Ingeniería
            y Matemáticas) en Colombia, Perú y Panamá destaca varios desafíos
            para las mujeres en este campo. A pesar de que a nivel mundial hay
            más mujeres graduadas en STEM, solo un tercio avanza hacia el
            doctorado, y en el mercado laboral, las mujeres con hijos tienen
            trabajos menos estables en comparación con los hombres. Además, las
            mujeres perciben menos paridad e igualdad laboral y tienen menos
            oportunidades de crecimiento y representación en altos mandos.
          </p>
          <p>
            <span className="italic">
              {" "}
              “Estamos comprometidos con el apoyo a las mujeres en la ciencia y{" "}
              <span className="font-bold">
                creemos firmemente en el potencial de las científicas en la
                región.
              </span>
            </span>{" "}
            Este programa no solo reconoce su trabajo, sino que también promueve
            la igualdad de género en el ámbito científico”, comentó Alberto
            Mario Rincón, director general de L’Oréal Groupe para Centroamérica
            y Región Andina. <span className="italic"><span className="font-bold">“Es fundamental crear espacios que permitan a las
            mujeres avanzar en sus carreras científicas y superar las barreras
            que aún existen.</span> Nos emociona ver los proyectos de investigación de
            este año y estamos seguros de que tendrán un impacto significativo
            en el desarrollo científico del país.”</span>{" "}
          </p>
          <p>
            Conscientes de los retos existentes en materia de género en el campo
            de la ciencia, la UNSA convoca a todas las científicas del país a
            postularse a la décima versión del Premio en Perú. “La mujer formó
            parte de la ciencia desde el inicio de la historia dando paso a
            significativos descubrimientos que, sin embargo, fueron ignorados
            por mucho tiempo. Por ello, el premio "Para las Mujeres en la
            Ciencia" busca reconocer la labor científica de la mujer y alentarla
            a encontrar soluciones que mejoren el bienestar de toda la
            sociedad”, dice Ileana Monti, directora de la Cátedra UNESCO
            ‘Participación de la Mujer en Ciencia, Tecnología e Innovación’ de
            la UNSA. La Representante de la UNESCO, Guiomar Alonso, agrega que,
            “en Perú, un total de 27 científicas han sido reconocidas con el
            Premio L'Oréal UNESCO Para las Mujeres en la Ciencia. Estas mujeres
            han realizado aportes en diversos campos de la investigación
            científica e inspiran a las generaciones más jóvenes. Debemos seguir
            uniendo esfuerzos para promover el acceso igualitario a la educación
            científica y la financiación estratégica de oportunidades para
            mujeres en ciencia, especialmente en campos subrepresentados
            vinculados a la inteligencia artificial y a la acción ambiental".{" "}
          </p>
          <h4 className="font-bold text-lg">Sobre la convocatoria</h4>
          <p>
            Desde el 05 de julio y hasta las 13:00 horas Bogotá, Quito, Lima y
            Ciudad de Panamá del 15 de agosto de 2024, las científicas
            interesadas en participar podrán postularse a través de la
            plataforma https://www.forwomeninscience.com/{" "}
          </p>
          <p>
            <span className="font-bold">Las candidatas deben cumplir con los siguientes requisitos para que
            la aplicación sea efectiva:</span>
            <ul className="list-disc ml-5 mt-3">
              <li>
                Tener la nacionalidad por nacimiento o naturalización de
                Colombia, Ecuador, Panamá o Perú.
              </li>
              <li>
                Ser reconocidas con sexo mujer en su DNI o cédula de ciudadanía.
              </li>
              <li>
                Haber cursado o estar cursando un programa de estudio de
                doctorado en algunos de estos países o en el extranjero. Para
                las candidatas cursando el doctorado, deben estar al menos en el
                segundo año del programa de estudio. Para las candidatas que han
                terminado el doctorado, deben haber obtenido el título en un
                máximo de 8 años al momento de postularse. Nota: Se tomará la
                fecha de cierre de la convocatoria.
              </li>
              <li>
                La candidata debe ser la investigadora principal de un proyecto
                de investigación científica en una de las disciplinas STEM, que
                contribuya al avance de la ciencia en los países de este
                programa regional.
              </li>
              <li>
                Estar realizando su proyecto de investigación en un centro de
                investigación o universidad de Colombia, Ecuador, Panamá o Perú.
              </li>
            </ul>
          </p>
          <h4 className="font-bold text-lg">Datos de la región sobre la brecha de género en STEM:</h4>
          <p>
            L´Oréal Groupe e IPSOS Napoleón Franco presentaron un estudio sobre
            las brechas de género en Colombia, Perú y Panamá relacionadas con
            las mujeres en STEM durante el evento de premiación de “Para las
            Mujeres en la Ciencia 2023”. Este estudio encuestó a 740 mujeres y
            hombres con formación o estudios en STEM, revelando los desafíos
            clave que enfrentan las mujeres en la región en su entrada,
            permanencia y avance profesional en este campo. Los resultados
            subrayan disparidades significativas en el ingreso al mercado
            laboral, la percepción de igualdad en el ambiente laboral, y las
            oportunidades de crecimiento, proporcionando una guía crucial para
            la creación de entornos más inclusivos y equitativos en STEM.
          </p>
          <h4 className="font-bold text-lg">Acerca del programa “Para las Mujeres en la Ciencia”</h4>
          <p>
            El premio “Para las Mujeres en la Ciencia” nació en 1998 con el
            objetivo de reconocer internacionalmente la labor de la mujer en las
            áreas científicas. Desde su creación, ha premiado a más de 3,900
            mujeres (laureadas y becarias de doctorado y posdoctorado) en 52
            programas nacionales y regionales en 116 países. Actualmente, cuenta
            con más de 50 instituciones científicas de alto nivel involucradas
            en todo el mundo y más de 500 científicos participan en el proceso
            de selección de los programas nacionales y regionales,
            consolidándose como una de las grandes acciones al servicio de la
            vocación y del trabajo de la investigación científica femenina de
            todos los continentes.
          </p>
          <ul>
          <li className="font-bold">Contacto de prensa Kreab Colombia: </li>
          <li>Camila Vergara - cvergara@kreab.com</li>
          <li>Fernanda González - fgonzalez@kreab.com</li>
          </ul>
        </section>

        <div className="grid lg:grid-cols-3 text-white [&>*]:p-7">
          <Contactanos />
          <div className="bg-[#33556E] lg:col-span-2">
            <h4 className="text-xl font-extrabold text-white">
              Calendario 2024:
            </h4>
            <div>
              <table className="table-auto divide-y divide-gray-200 text-lg leading-5">
                {cronograma.map((texto, indice) => (
                  <CronogramaDatos
                    key={indice}
                    texto={texto.texto}
                    fecha={texto.fecha}
                  />
                ))}
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
