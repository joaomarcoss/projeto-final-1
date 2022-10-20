import { Dialog } from "@headlessui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Carrossel from "../components/Carrossel";

import Imc from "../components/Imc";

const Home: NextPage = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-gray-light flex flex-col items-center justify-center ">
        <div className=" w-full ">
          {/* Inicio da Tela Inicial  */}
          <section className="bg-gray-light p-8 h-full items-center justify-center w-full ">
            <div className="flex justify-between items-center  w-full">
              <div className="flex flex-col items-center justify-center text-blue gap-4 w-full">
                <h2 className=" text-bold tablet:text-3xl text-center font-bold ">
                  SEJAM BEM-VINDOS AO CENTRO DE TREINAMENTO BYRON!
                </h2>
                <p className="flex w-3/4 text-justify ">
                  Do iniciante ao avançado! Do jovem a melhor idade! Homens e
                  Mulheres que desejam saúde, qualidade de vida e estética!
                  Agora vocês serão recebidos e treinados por personal trainers
                  qualificados e graduados para fazer você tirar a mão do seu
                  mouse e teclado e pegar um Halter!
                </p>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 p-6">
                  <Link href="/FormContato">
                    <button className="flex items-center justify-center gap-4 w-full py-5 px-8 text-xl text-white bg-blue rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
                      Contato
                    </button>
                  </Link>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center justify-center gap-4 py-5 px-8 text-xl bg-yellow rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all focus:scale-105 focus:underline "
                  >
                    Calcule seu IMC
                  </button>
                  <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="relative z-10"
                  >
                    <div
                      className="fixed inset-0 bg-black/60 backdrop-blur"
                      aria-hidden="true"
                    />
                    <div className="fixed inset-0 flex items-center justify-center">
                      <Dialog.Panel className="p-3 bg-blue-light rounded-2xl ">
                        <div className=" flex items-center justify-end">
                          <button
                            onClick={() => setIsOpen(true)}
                            className="hover:scale-105 transition-all"
                          >
                            <Imc></Imc>
                          </button>
                        </div>
                      </Dialog.Panel>
                    </div>
                  </Dialog>
                </div>
              </div>
              <div className="hidden items-center justify-center w-full tablet:flex max-w-6xl ">
                <picture>
                  <img className="w-76" src="./img/index/img-musc.png" alt="" />
                </picture>
              </div>
            </div>
          </section>
          {/* Fim da Tela Inicial  */}
          {/* Inicio exercite-se em casa */}
          <section className="bg-blue p-8 h-full items-center justify-center w-full ">
            <div className=" flex tablet:hidden justify-between items-center  w-full">
              <div className="flex flex-col items-center justify-center text-white gap-4 w-full">
                <h2 className="text-3xl text-center font-bold ">
                  Pratique exercícios em casa
                </h2>
                <p className="flex w-3/4 text-justify ">
                  A atividade física faz bem para a saúde, e fazer exercício
                  físico não deve ser deixado de lado. Ficar em casa pode gerar
                  um acúmulo de energia, que ao ser usada nas atividades físicas
                  é capaz de trazer benefícios para a saúde do praticante e,
                  inclusive, fortalecer o sistema imunológico. De acordo com
                  artigos científicos, a prática de exercícios físicos regular
                  reduz o strees e ansiedade.
                </p>
                <picture>
                  <img
                    className=" w-full h-46 border-yellow border-2"
                    src="./img/index/modelo-treino-casa.jpg"
                    alt=""
                  />
                </picture>

                <Link href="/treinos">
                  <button className="flex items-center justify-center gap-4 py-5 px-12 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
                    Treinos
                  </button>
                </Link>
              </div>
            </div>

            <div className="hidden tablet:flex justify-center items-center gap-20 ">
              <picture>
                <img
                  className="hidden tablet:flex  w-full h-96 border-yellow border-2"
                  src="./img/index/modelo-treino-casa.jpg"
                  alt=""
                />
              </picture>
              <div className="flex flex-col items-center justify-center text-white gap-4 w-full tablet:w-1/2">
                <h2 className="text-3xl text-center font-bold ">
                  Pratique exercícios em casa
                </h2>
                <p className="flex w-full text-justify">
                  A atividade física faz bem para a saúde, e fazer exercício
                  físico não deve ser deixado de lado. Ficar em casa pode gerar
                  um acúmulo de energia, que ao ser usada nas atividades físicas
                  é capaz de trazer benefícios para a saúde do praticante e,
                  inclusive, fortalecer o sistema imunológico. De acordo com
                  artigos científicos, a prática de exercícios físicos regular
                  reduz o strees e ansiedade.
                </p>
                <div className="flex items-center">
                  <Link href="/treinos">
                    <button className="flex items-center justify-center gap-4 py-5 px-12 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
                      Treinos
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* Fim exercite-se em casa */}
          {/*Inicio da seçao dicas */}
          <section className="bg-yellow p-8 h-full items-center justify-center w-full ">
            <div className=" flex tablet:hidden justify-between items-center  w-full">
              <div className="flex flex-col items-center justify-center text-blue gap-4 w-full">
                <h2 className="text-3xl text-center font-bold ">
                  Dicas de alimentos saudáveis
                </h2>
                <p className="flex w-3/4 text-justify ">
                  Uma alimentação saudável deve significar prazer e saúde. O
                  enforque deve ser sobre alimentos produzidos na região, in
                  natura e que possuam alto valor nutritivo.
                </p>
                <picture>
                  <img
                    className=" w-full h-46 border-blue border-2"
                    src="./img/index/ComidaSaudavel.jpg"
                    alt=""
                  />
                </picture>
                <Link href="/dicas">
                  <button className="flex items-center justify-center gap-4 py-5 px-12 text-xl text-white bg-blue rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
                    Dicas
                  </button>
                </Link>
              </div>
            </div>

            <div className="hidden tablet:flex justify-center items-center gap-20 ">
              <picture>
                <img
                  className="hidden tablet:flex  w-full h-96 border-blue border-2"
                  src="./img/index/ComidaSaudavel.jpg"
                  alt=""
                />
              </picture>
              <div className="flex flex-col items-center justify-center text-blue gap-4 w-full tablet:w-1/2">
                <h2 className="text-3xl text-center font-bold ">
                  Dicas de alimentos saudáveis
                </h2>
                <p className="flex w-full text-justify">
                  Uma alimentação saudável deve significar prazer e saúde. O
                  enforque deve ser sobre alimentos produzidos na região, in
                  natura e que possuam alto valor nutritivo.
                </p>
                <div className="flex items-center">
                  <Link href="/dicas">
                    <button className="flex items-center justify-center gap-4 py-5 px-12 text-xl text-white bg-blue rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
                      Dicas
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* Fim dicas */}
          {/* Inicio Carrossel */}
          <div className="p-12 h-max-36">
            <h1 className="flex justify-center text-center items-center text-blue text-4xl font-bold">
              Confira nossos Personal Trainers!
            </h1>
            <Carrossel></Carrossel>
          </div>
          {/* Fim Carrossel */}
          {/* Inico Mapas */}
          <section className="flex items-center justify-center bg-gradient-to-t to-blue from-gray-dark text-yellow py-16">
            <div className="flex flex-col p-4 items-center gap-8 max-w-6xl w-full">
              <h2 className="text-4xl font-bold drop-shadow">
                Venha nos visitar
              </h2>
              <iframe
                className=" w-full rounded-[48px] border-4 border-yellow shadow"
                width="100%"
                height="300"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=parque%20municipal%20de%20itajuba+(My%20Business%20Name)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/distance-area-calculator.html">
                  area maps
                </a>
              </iframe>
            </div>
          </section>
          {/* Fim Mapas */}
        </div>
      </div>
    </>
  );
};

export default Home;
