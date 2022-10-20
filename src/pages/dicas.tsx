import React from "react";
import { Tab } from "@headlessui/react";
import DicasButton from "../components/DicasButton";

const dicas = () => {
  let participantData = [
    {
      img: { src: "./img/comidas/cereais.fw.png", alt: "Imagem de cereais" },
      name: "Carboidratos",
      content: "Importância dos carboidratos",
      contentLong:
        "O grupo de cereais e derivados e tubérculos incluem milho, arroz, aveia, trigo, centeio, massas, farinhas, pães, inhame, batatas e mandioca. Estas são as suas principais fontes de energia. Os tubérculos são os mais requisitados por serem constituídos por vitamina B1 e C. Por outro lado, os cereais são ricos em vitaminas B1, B2, B5 e B6, de proteínas e dos minerais magnésio e ferro. Estas proteínas são maioritariamente de origem vegetal e precisam ser complementadas com proteínas provenientes das leguminosas.",
    },
    {
      img: {
        src: "./img//comidas/frutas.fw.png",
        alt: "Cesta com frutas e verduras",
      },
      name: "Frutas e Hortaliças",
      content: "Importância das Frutas e Hortaliças",
      contentLong:
        "Os benefícios pode ser até repetitivo, mas a verdade é que comer frutas, legumes e verduras todos os dias é fundamental para quem busca uma estilo de vida mais saudável. As frutas e as hortaliças são alimentos com um perfil nutricional muito interessante. Isso porque, possuem poucas calorias e bom aporte de vitaminas e minerais – nutrientes fundamentais para o bom funcionamento do corpo. Além disso, esses alimentos são muito versáteis e podem ser consumidos crus, cozidos, em forma de sucos, preparos salgados e doces.",
    },
    {
      img: { src: "./img/comidas/leite.fw.png", alt: "Derivados de Leite" },
      name: "Leite e Derivados",
      content: "Importância do leite e produtos lácteos",
      contentLong:
        "O leite e os seus derivados fazem parte da lista de alimentos essenciais para o nosso bem-estar. Durante toda a nossa vida, independente da idade, necessitamos da ingestão de alguns nutrientes e, dentre eles, o cálcio é um dos mais importantes. Por isso, o Conquiste sua Vida separou 8 dos melhores derivados do leite para completarem a sua alimentação saudável. Confira! O ser humano é o único mamífero que tem a necessidade de ingerir o leite durante toda a sua vida, isso porque no período da nossa infância, o leite materno é o alimento primordial para o crescimento e desenvolvimento da criança. Ossos e dentes, por exemplo, necessitam da ingestão do cálcio para progredir e permitir a construção de reservas necessárias para o futuro.",
    },
    {
      img: {
        src: "./img/comidas/carne.fw.png",
        alt: "Imagem com carnes e ovos",
      },
      name: "Carne e Ovos",
      content: "Importância da carne e ovos",
      contentLong:
        "Para que a dieta fique completa, também é importante consumir proteínas e vitaminas. Neste quesito, o quinto grupo alimentar é um dos melhores - carnes e ovos são fontes importantes desses nutrientes, auxiliando na saúde dos tecidos e ossos do corpo. A vitamina B12 (cobalamina), por exemplo, só pode ser encontrada em carnes (incluindo peixes), leite e ovos. Ela é importante para a saúde dos sistemas nervoso e cardiovascular. Por isso, esse grupo alimentar também é um dos mais importantes da pirâmide.",
    },
    {
      img: {
        src: "./img/comidas/legumes.fw.png",
        alt: "Imagem com leguminosas e oleaginosas",
      },
      name: "Leguminosas e Oleaginosas",
      content: "Importancia das Leguminosas e oleaginosas",
      contentLong:
        "Outro grupo alimentar que traz muitos benefícios à saúde é o das leguminosas e oleaginosas - composto por diferentes tipos de feijão, grão-de-bico, ervilha, lentilha, castanhas, nozes, avelãs, amendoins e por aí vai. Eles se destacam por serem fontes de ferro, um mineral que combate a anemia e auxilia no transporte de oxigênio pelo sangue. Uma boa dica é variar entre os tipos de leguminosas e oleaginosas, sempre incluindo-as à rotina de alimentação.",
    },
    {
      img: {
        src: "./img/comidas/oleos.fw.png",
        alt: "Imagem com produtos devirados de oleos e gorduras",
      },
      name: "Óleos e Gorduras ",
      content: "Importância dos Óleos e gorduras ",
      contentLong:
        "Os óleos e gorduras, por sua vez, fazem parte do topo da pirâmide alimentar. Eles têm alguns benefícios: auxiliam no transporte de vitaminas do complexo B, são fontes de energia e têm propriedades hidratantes (como o de coco). No entanto, eles devem ser consumidos com moderação, pois podem aumentar o colesterol ruim (LDL) e são mais calóricos.",
    },
    {
      img: { src: "./img/comidas/doces.fw.png", alt: "" },
      name: "Açúcares e Doces",
      content: "Importância dos Açúcares e doces",
      contentLong:
        "O último grupo da pirâmide alimentar é formado pelos açúcares e doces (chocolates, bolos, mousses, sorvetes etc.) - alimentos pouco nutritivos e que, em excesso, podem causar problemas à saúde, como o aumento da pressão arterial. O refinado, em especial, é um dos açúcares menos indicados, pois tem uma quantidade muito pequena de nutrientes. O ideal é que você consuma esse grupo de alimentos sempre com cuidado e moderação - e é por isso que eles estão no topo da pirâmide, já que ocupam um espaço muito menor que o da base na nossa dieta diária.",
    },
    {
      img: { src: "./img/comidas/verduras.fw.png", alt: "" },
      name: "Legumes, Verduras e Vegetais",
      content: "A importância dos legumes, verduras e vegetais",
      contentLong:
        "Outro grupo alimentar que merece destaque e que deve ser consumido em grandes quantidades é o de legumes e verduras - batata, cenoura, cebola, berinjela, beterraba, brócolis, alface, aipo, agrião, alho-poró e por aí vai. Eles são bem nutritivos, ricos em vitaminas, minerais, fibras e, por isso, contribuem para a saúde de todo o corpo - dos sistemas nervoso, cardiovascular, imunológico etc. Quem quer manter uma rotina de alimentação saudável não pode deixar de consumir esse grupo alimentar no dia a dia.",
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-t to-gray-light from-gray-dark p-4 4k:h-screen">
        <div className="p-10 ">
          <h1 className="flex items-center justify-center text-center text-xl font-bold text-blue p-4">
            SIGA AS DICAS E TENHA UMA ALIMENTAÇÃO SAUDÁVEL!
          </h1>
          <p className="text-2xl font-medium text-justify text-blue">
            A alimentação saudável é uma das melhores maneiras de garantir
            qualidade de vida, porque faz nosso corpo funcionar de forma
            adequada e também ajuda na prevenção de doenças. Abaixo listamos
            algumas categorias de alimentos e em que eles nos auxiliam.
          </p>
        </div>
        <div className="flex items-center justify-center bg-blue p-10 m-10 rounded-2xl">
          <div className="grid grid-cols-1 laptop:grid-cols-2 grid-rows-4 gap-4 w-full">
            {participantData.map((participant, key) => (
              <DicasButton key={key} data={participant} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default dicas;
