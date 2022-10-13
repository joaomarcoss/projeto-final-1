import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-blue h-20">
      <div className="flex items-center justify-between max-w-6xl w-full ">
        <picture>
          <Link href="/">
            <img
              className="w-36 hover:scale-110 hover:transition-all hover:drop-shadow-2xl"
              src="./img/logo.fw.png"
              alt="Logo musculação"
            />
          </Link>
        </picture>

        <ul className="flex gap-8 text-white text-2xl">
          <Link href="">
            <button className="hover:text-yellow hover:scale-105 hover:transition-all">
              Inicío
            </button>
          </Link>

          <Link href="">
            <button className="hover:text-yellow hover:scale-105 hover:transition-all w-full">
              Planos
            </button>
          </Link>

          <Link href="">
            <button className="hover:text-yellow hover:scale-105 hover:transition-all w-full">
              Dicas
            </button>
          </Link>

          <Link href="">
            <button className="hover:text-yellow hover:scale-105 hover:transition-all w-full">
              Contato
            </button>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
