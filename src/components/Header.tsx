import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-blue h-20 ">
      <div className=" flex items-center justify-between max-w-6xl w-full  ">
        <picture id="logo">
          <Link href="/">
            <img
              className="w-36 hover:scale-110 hover:transition-all hover:drop-shadow-2xl"
              src="./img/logo.fw.png"
              alt="Logo musculação"
            />
          </Link>
        </picture>

        <nav className="hidden tablet:flex gap-8 text-white text-2xl">
          <Link href="/">
            <a className="hover:text-yellow hover:scale-105 hover:transition-all">
              Inicío
            </a>
          </Link>

          <Link href="/treinos">
            <a className="hover:text-yellow hover:scale-105 hover:transition-all w-full">
              Treinos
            </a>
          </Link>

          <Link href="/dicas">
            <a className="hover:text-yellow hover:scale-105 hover:transition-all w-full">
              Dicas
            </a>
          </Link>

          <Link href="/FormContato">
            <a className="hover:text-yellow hover:scale-105 hover:transition-all w-full">
              Contato
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
