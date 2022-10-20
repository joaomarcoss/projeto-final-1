import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        className="h-[34rem] tablet:h-[36rem] desktop:h-[32rem] justify-center items-center"
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className=" bg-blue p-6 m-6  rounded h-full flex flex-col gap-6">
            <div className="container w-auto">
              <img src="./img/personal/renato.png" alt="" />
            </div>

            <div className="flex flex-col text-white items-center">
              <span className="text-bold text-2xl">Renato Cariani</span>
              <span className="text-center">
                Atleta, Bodybuilder e Personal Trainer
              </span>
            </div>
            <button className="flex items-center justify-center gap-4 w-full py-5 px-8 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/renato_cariani/"
                target={"_blank"}
              >
                @Renato Cariani
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue p-6 m-6 w-auto rounded h-full flex flex-col gap-6">
            <div className="container w-auto">
              <img src="./img/personal/julio.png" alt="" />
            </div>

            <div className="flex flex-col text-white items-center">
              <span className="text-bold text-2xl">Julio Balestrin</span>
              <span className="text-center">
                Atleta, Bodybuilder e Personal Trainer
              </span>
            </div>
            <button className="flex items-center justify-center gap-4 w-full py-5 px-8 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/juliobalestrinoficial/"
                target={"_blank"}
              >
                @Julio Balestrin
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue p-6 m-6 w-auto rounded h-full flex flex-col gap-6">
            <div className="container w-auto">
              <img src="./img/personal/paulo.png" alt="" />
            </div>

            <div className="flex flex-col text-white items-center">
              <span className="text-bold text-2xl">Paulo Muzy</span>
              <span className="text-center">
                Atleta, Bodybuilder e Médico Esportivo
              </span>
            </div>
            <button className="flex items-center justify-center gap-4 w-full py-5 px-8 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/paulomuzy/"
                target={"_blank"}
              >
                @Paulo Muzy
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue p-6 m-6 w-auto rounded h-full flex flex-col gap-6">
            <div className="container w-auto">
              <img src="./img/personal/vivi.png" alt="" />
            </div>

            <div className="flex flex-col text-white items-center">
              <span className="text-bold text-2xl">Vivi Winkler</span>
              <span className="text-center">
                Atleta, Musa Wellness e Personal Trainer
              </span>
            </div>
            <button className="flex items-center justify-center gap-4 w-full py-5 px-8 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/viviwinkler/"
                target={"_blank"}
              >
                @Vivi Winkler
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue p-6 m-6 w-auto rounded h-full flex flex-col gap-6">
            <div className="container w-auto">
              <img src="./img/personal/ramon.png" alt="" />
            </div>

            <div className="flex flex-col text-white items-center">
              <span className="text-bold text-2xl">Ramon Dino</span>
              <span className="text-center">
                Atleta, Bodybuilder e Personal Trainer
              </span>
            </div>
            <button className="flex items-center justify-center gap-4 w-full py-5 px-8 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/ramondinopro/"
                target={"_blank"}
              >
                @Ramon Dino
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue p-6 m-6 w-auto rounded h-full flex flex-col gap-6">
            <div className="container w-auto">
              <img src="./img/personal/leo.png" alt="" />
            </div>

            <div className="flex flex-col text-white items-center">
              <span className="text-bold text-2xl">Leo Stronda</span>
              <span className="text-center">
                Atleta, Bodybuilder e Personal Trainer
              </span>
            </div>
            <button className="flex items-center justify-center gap-4 w-full py-5 px-8 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/leostronda/"
                target={"_blank"}
              >
                @Leo Stronda
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue p-6 m-6 w-auto rounded h-full flex flex-col gap-6">
            <div className="container w-auto">
              <img src="./img/personal/fabio.png" alt="" />
            </div>

            <div className="flex flex-col text-white items-center">
              <span className="text-bold text-2xl">Fabio Giga</span>
              <span className="text-center">
                Atleta, Bodybuilder e Personal Trainer
              </span>
            </div>
            <button className="flex items-center justify-center gap-4 w-full py-5 px-8 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/fabiogigapro/"
                target={"_blank"}
              >
                @Fabio Giga
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue p-6 m-6 w-auto rounded h-full flex flex-col gap-6">
            <div className="container w-auto">
              <img src="./img/personal/angela.png" alt="" />
            </div>

            <div className="flex flex-col text-white items-center">
              <span className="text-bold text-2xl">Angela Borges</span>
              <span className="text-center">
                Atleta, Musa Wellness e Personal Trainer
              </span>
            </div>
            <button className="flex items-center justify-center gap-4 w-full py-5 px-8 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/angelaborgeswellness/"
                target={"_blank"}
              >
                @Angela Borges
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue p-6 m-6 w-auto rounded h-full flex flex-col gap-6">
            <div className="container w-auto">
              <img src="./img/personal/carol.png" alt="" />
            </div>

            <div className="flex flex-col text-white items-center">
              <span className="text-bold text-2xl">Carol Saraiva</span>
              <span className="text-center">
                Atleta, Musa Wellness e Personal Trainer
              </span>
            </div>
            <button className="flex items-center justify-center gap-4 w-full py-5 px-8 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/carolsaraivafitness/"
                target={"_blank"}
              >
                @Carol Saraiva
              </a>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
