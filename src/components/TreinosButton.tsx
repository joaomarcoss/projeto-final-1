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
        <div className="flex items-center justify-center gap-6 p-4 bg-white rounded-2xl">
          <picture>
            <button onClick={() => setIsOpen(true)}>
              <img
                className="rounded-xl border-2 border-blue drop-shadow-2xl w-36"
                src={data.img.src}
                alt={data.img.alt}
              />
            </button>
          </picture>
          <div className="flex flex-col items-start text-blue ">
            <span className="font-bold text-2xl">{data.name}</span>
            <span>{data.content}</span>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="hover:scale-105 transition-all"
          >
            <picture>
              <img className="w-20 " src="/img/arrow2.png" alt="Icone " />
            </picture>
          </button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-10"
      >
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="p-3 bg-blue-light rounded-2xl ">
            <div className="flex  p-4 gap-9 bg-yellow text-blue rounded-2xl ">
              <picture className="w-full">
                <img
                  className="rounded-xl border-2 border-blue-light w-full"
                  src={data.img.src}
                  alt={data.img.alt}
                />
              </picture>
              <div>
                <div className=" flex items-center justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="hover:scale-105 transition-all"
                  >
                    <picture>
                      <img
                        className="w-20 "
                        src="/img/icone-x.fw.png"
                        alt="Botão x com pesos de academia"
                      />
                    </picture>
                  </button>
                </div>

                <div className="flex flex-col justify-center gap-5 ">
                  <p className=" flex items-center justify-center font-bold text-4xl">
                    {data.content}
                  </p>
                  <p className="font-semibold text-justify p-2 text-xl">
                    {data.contentLong}
                  </p>
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
