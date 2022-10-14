import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      {/* Inicio da Tela Inicial  */}
      <section className="bg-gray-ligth">
        <div className="flex justify-between">
          <div className="text-blue">
            <h2 className="text-3xl">First I wanted to be a musculation</h2>
            <p>
              Lorem Ipsum available but the majority have suffered alteration in
              some form, by injected humour randomised words.
            </p>
            <div className="flex gap-6">
              <button className="bg-yellow">a</button>
              <button className="bg-blue">a</button>
            </div>
          </div>
          <div className="">
            <picture>
              <img src="./img/img-musc.png" alt="" />
            </picture>
          </div>
        </div>
      </section>
      {/* Fim da Tela Inicial  */}
    </>
  );
};

export default Home;
