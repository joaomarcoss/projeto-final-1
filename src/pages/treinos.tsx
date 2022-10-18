import React from "react";

import TreinosButton from "../components/TreinosButton";

const treinos = () => {
  let participantData = [
    {
      img: { src: "./img/gifs/treino-1.gif", alt: "gif do treino" },
      name: "Prancha Frontal",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Deitada de bruços, apoie os pés e as mãos no solo, afastadas na linha dos ombros, e estenda os braços, erguendo o corpo. Contraia o abdômen e eleve uma das pernas, mantendo a posição pelo tempo determinado. Repita com a outra perna de forma alternada",
    },
    {
      img: { src: "./img/gifs/treino-2.gif", alt: "gif do treino" },
      name: "Prancha Frontal",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Deitada de bruços, apoie os pés e as mãos no solo, afastadas na linha dos ombros, e estenda os braços, erguendo o corpo. Contraia o abdômen e eleve uma das pernas, mantendo a posição pelo tempo determinado. Repita com a outra perna de forma alternada",
    },
    {
      img: { src: "./img/gifs/treino-3.gif", alt: "gif do treino" },
      name: "Prancha Frontal",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Deitada de bruços, apoie os pés e as mãos no solo, afastadas na linha dos ombros, e estenda os braços, erguendo o corpo. Contraia o abdômen e eleve uma das pernas, mantendo a posição pelo tempo determinado. Repita com a outra perna de forma alternada",
    },
    {
      img: { src: "./img/gifs/treino-4.gif", alt: "gif do treino" },
      name: "Prancha Frontal",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Deitada de bruços, apoie os pés e as mãos no solo, afastadas na linha dos ombros, e estenda os braços, erguendo o corpo. Contraia o abdômen e eleve uma das pernas, mantendo a posição pelo tempo determinado. Repita com a outra perna de forma alternada",
    },
    {
      img: { src: "./img/gifs/treino-5.gif", alt: "gif do treino" },
      name: "Prancha Frontal",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Deitada de bruços, apoie os pés e as mãos no solo, afastadas na linha dos ombros, e estenda os braços, erguendo o corpo. Contraia o abdômen e eleve uma das pernas, mantendo a posição pelo tempo determinado. Repita com a outra perna de forma alternada",
    },
    {
      img: { src: "./img/gifs/treino-6.gif", alt: "gif do treino" },
      name: "Prancha Frontal",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Deitada de bruços, apoie os pés e as mãos no solo, afastadas na linha dos ombros, e estenda os braços, erguendo o corpo. Contraia o abdômen e eleve uma das pernas, mantendo a posição pelo tempo determinado. Repita com a outra perna de forma alternada",
    },
    {
      img: { src: "./img/gifs/treino-7.gif", alt: "gif do treino" },
      name: "Prancha Frontal",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Deitada de bruços, apoie os pés e as mãos no solo, afastadas na linha dos ombros, e estenda os braços, erguendo o corpo. Contraia o abdômen e eleve uma das pernas, mantendo a posição pelo tempo determinado. Repita com a outra perna de forma alternada",
    },
    {
      img: { src: "./img/gifs/treino-8.gif", alt: "gif do treino" },
      name: "Prancha Frontal",
      content: "Prancha frontal alternando os pés",
      contentLong:
        "Deitada de bruços, apoie os pés e as mãos no solo, afastadas na linha dos ombros, e estenda os braços, erguendo o corpo. Contraia o abdômen e eleve uma das pernas, mantendo a posição pelo tempo determinado. Repita com a outra perna de forma alternada",
    },
  ];
  return (
    <>
      <div className="bg-gray-light p-4">
        <div className="p-10 ">
          <h1 className="flex items-center justify-center text-4xl font-bold text-blue p-4">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-2xl font-medium text-justify text-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            dolor velit laudantium! Quisquam harum sunt voluptates veritatis est
            laboriosam aspernatur dolorem! Itaque quibusdam natus libero quis
            quae ab minus vitae molestiae blanditiis sequi praesentium ullam
            corrupti pariatur accusantium, laborum deleniti ipsum. Aut officiis
            amet consequatur accusantium id. Natus, reiciendis earum.
          </p>
        </div>
        <div className="flex items-center justify-center bg-blue p-10 m-10 rounded-2xl">
          <div className="grid grid-cols-2 grid-rows-4 gap-4 w-full">
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
