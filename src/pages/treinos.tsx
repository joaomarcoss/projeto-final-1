import React from "react";

import TreinosButton from "../components/TreinosButton";

const treinos = () => {
  let participantData = [
    {
      img: { src: "./img/gifs/treino-1.gif", alt: "gif do treino" },
      name: "Prancha Frontal",
      content: "Prancha com elevação de perna",
      contentLong:
        "Deitada de bruços, apoie os pés e as mãos no solo, afastadas na linha dos ombros, e estenda os braços, erguendo o corpo. Contraia o abdômen e eleve uma das pernas, mantendo a posição pelo tempo determinado. Repita com a outra perna de forma alternada",
    },
    {
      img: { src: "./img/gifs/treino-2.gif", alt: "gif do treino" },
      name: "Polichinelo",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Em pé, com o corpo na horizontal junte as pernas e braços no corpo e depois abra as pernas e estenda seus braços até o topo da cabeça. Repetindo o movimento de forma síncrona.",
    },
    {
      img: { src: "./img/gifs/treino-3.gif", alt: "gif do treino" },
      name: "Estrela em pé",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Em pé, com as pernas abertas faça um movimento em X levando o braço esquerdo esticado até a perna direita e depois o braço direito até a perna esquerda.",
    },
    {
      img: { src: "./img/gifs/treino-4.gif", alt: "gif do treino" },
      name: "Abdominal supra curto",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Deitado com as pernas dobradas num ângulo de 45º coloque as duas mãos na parte de trás da cabeça para auxiliar o movimento e levantar lentamente forçado a parte superior do abdômen",
    },
    {
      img: { src: "./img/gifs/treino-5.gif", alt: "gif do treino" },
      name: "Escalada rotacional",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Deitado de bruços para o chão apoie as mãos com os braços esticados de forma que você se sinta estável e levante as pernas como um movimento de subir escadas alternando entre as pernas.",
    },
    {
      img: { src: "./img/gifs/treino-6.gif", alt: "gif do treino" },
      name: "Flexão de braços",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Deitado de bruços para o chão apoie as mãos com os braços esticados de forma que seus braços fiquem retos em relação ao chão e flexione os braços forçando o tríceps.",
    },
    {
      img: { src: "./img/gifs/treino-7.gif", alt: "gif do treino" },
      name: "Passada",
      content: "Passada junto com afundo unilateral",
      contentLong:
        "Estando em pé se posicione de forma que consiga dobrar os joelhos sem forçar as articulações dobrando os joelhos de forma que cada um fique num ângulo de 90º.",
    },
    {
      img: { src: "./img/gifs/treino-8.gif", alt: "gif do treino" },
      name: "Abdominal infra rotacional",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Deitado no chão, abra seus braços na horizontal para ganhar estabilidade, dobre e levante suas pernas de forma que fiquem sobre o seu abdômen e gire as duas pernas para a esquerda e depois volte para a direita e repita o movimento.",
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-t to-gray-light from-gray-dark p-4 4k:h-screen">
        <div className="p-10 ">
          <h1 className="flex items-center justify-center text-center text-xl font-bold text-blue p-4">
            TREINE HOJE MESMO EM CASA!
          </h1>
          <p className="text-2xl font-medium text-justify text-blue">
            Treinar em casa é, sem dúvida nenhuma, uma excelente atividade para
            quem busca movimentar o corpo mesmo em momentos de menos
            flexibilidade no dia a dia. Ou seja, para quem tem filhos ou mesmo
            precisa trabalhar até tarde, frequentar uma academia nem sempre é
            simples de encaixar na agenda. Abaixo listamos alguns exercicios que
            pode ser praticado em casa.
          </p>
        </div>
        <div className="flex items-center justify-center bg-blue p-10 m-10 rounded-2xl">
          <div className="grid grid-cols-1 laptop:grid-cols-2 grid-rows-4 gap-4 w-full">
            {participantData.map((participant, key) => (
              <TreinosButton key={key} data={participant} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default treinos;
