import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-gray-dark text-white gap-2 p-3  ">
      <h2 className="text-2xl">Desenvolvido por Bryan Müller e João Marcos</h2>
      <p>Todos direitos reservados.</p>
      <div className="flex items-center justify-center gap-3 pb-4">
        <a href="http://intagram.com/byron.solutions" target={"_blank"}>
          <picture>
            <img
              className="w-16 hover:scale-105 hover:transition-all hover:bg-yellow hover:rounded-full"
              src="./img/icone-instagram.fw.png"
              alt="icone instagram"
            />
          </picture>
        </a>
        <a href="http://intagram.com/byron.solutions" target={"_blank"}>
          <picture>
            <img
              className="w-16 hover:scale-105 hover:transition-all hover:bg-yellow hover:rounded-full"
              src="./img/icone-facebook.fw.png"
              alt="icone facebook"
            />
          </picture>
        </a>
        <a href="http://intagram.com/byron.solutions" target={"_blank"}>
          <picture>
            <img
              className="w-16 hover:scale-105 hover:transition-all hover:bg-yellow hover:rounded-full"
              src="./img/icone-twitter.fw.png"
              alt="icone twitter"
            />
          </picture>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
