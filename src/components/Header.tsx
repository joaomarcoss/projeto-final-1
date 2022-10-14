import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-blue h-20">
      <div className="flex items-center justify-between max-w-6xl w-full ">
        <picture>
          <img
            className="w-36 hover:scale-110 hover:transition-all"
            src="./img/logo.fw.png"
            alt="Logo musculação"
          />
        </picture>
        <ul className="flex gap-8 text-white text-2xl">
          <li className="hover:text-yellow hover:scale-105 hover:transition-all">
            Inicio
          </li>
          <li className="hover:text-yellow hover:scale-105 hover:transition-all w-full">
            Planos
          </li>
          <li className="hover:text-yellow hover:scale-105 hover:transition-all w-full">
            Dicas
          </li>
          <li className="hover:text-yellow hover:scale-105 hover:transition-all w-full">
            Contato
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
