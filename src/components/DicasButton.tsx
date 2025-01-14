import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

interface IProps {
  data: {
    img: {
      src: string;
      alt: string;
    };
    name: string;
    content: string;
    contentLong: string;
  };
}

const TreinosButton = ({ data }: IProps) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="rounded-2xl shadow hover:scale-[1.01] transition-all bg-white hover:shadow-md hover:shadow-yellow ">
        <div className="grid items-center justify-center tablet:grid-cols-4 gap-6 p-4 bg-white rounded-2xl">
          <picture className="flex justify-start">
            <button onClick={() => setIsOpen(true)}>
              <img
                className="rounded-xl border-2 border-blue drop-shadow-2xl w-36"
                src={data.img.src}
                alt={data.img.alt}
              />
            </button>
          </picture>
          <div className="tablet:col-span-2 items-star justify-center text-blue ">
            <span className="font-bold text-2xl">{data.name}</span>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="hover:scale-105 transition-all"
          >
            <picture className="hidden tablet:flex justify-end">
              <img
                className="w-20"
                src="/img/icon_component/arrow2.png"
                alt="Icone seta para cima"
              />
            </picture>
          </button>
        </div>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="">
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="p-3 bg-blue-light rounded-2xl ">
            <div className="grid justify-center items-center desktop:grid-cols-6 bg-yellow text-blue rounded-2xl p-8 gap-2 ">
              <picture className=" tablet:col-span-2">
                <img
                  className="hidden desktop:flex rounded-xl border-2 border-blue-light  "
                  src={data.img.src}
                  alt={data.img.alt}
                />
              </picture>
              <div className="col-span-4 items-start h-full">
                <div className="hidden laptop:flex items-center justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="hover:scale-105 transition-all"
                  >
                    <picture>
                      <img
                        className="hidden desktop:flex w-20 "
                        src="/img/icon_component/icone-x.fw.png"
                        alt="Botão x com pesos de academia"
                      />
                    </picture>
                  </button>
                </div>

                <div className="flex flex-col justify-center gap-5 ">
                  <p className=" flex items-center justify-center font-bold text-center text-2xl laptop:text-4xl 4k:text-7xl">
                    {data.content}
                  </p>
                  <p className=" text-justify p-2 font-medium desktop:text-3xl">
                    {data.contentLong}
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="hover:scale-105 transition-all"
                  >
                    <picture>
                      <img
                        className="w-16 desktop:hidden"
                        src="/img/icon_component/icone-x.fw.png"
                        alt="Botão x com pesos de academia"
                      />
                    </picture>
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default TreinosButton;
