import React, { useState, useEffect } from "react";

const Imc = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [isDisable, setDisable] = React.useState(false);
  const [message, setMessage] = useState(" ");
  const [img, setImg] = useState("./img/imc/imc-magreza.fw.png");
  let aux: number = 0;
  let a: number = 0;

  const handleClick = () => {
    aux = Number(peso) / Number(altura * altura);
    a = +aux.toFixed(2);
    setResultado(a);

    if (a <= 18.5) {
      return (
        setMessage("Voce está abaixo do peso"),
        setImg("./img/imc/imc-magreza.fw.png")
      );
    }
    if (a <= 24.99) {
      return (
        setMessage("Voce está com o peso normal"),
        setImg("./img/imc/imc-normal.fw.png")
      );
    }
    if (a <= 29.99) {
      return (
        setMessage("Voce está com sobrepeso"),
        setImg("./img/imc/imc-sobrepeso.fw.png")
      );
    } else {
      return (
        setMessage("Voce está com obesidade"),
        setImg("./img/imc/imc-obesidade.fw.png")
      );
    }
  };

  useEffect(() => {
    if (peso > 0 && altura > 0) {
      setDisable(false);
      setResultado(0);
    } else {
      setDisable(true);
    }
  }, [peso, altura]);
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-blue p-20 gap-3 rounded-tl-3xl rounded-br-3xl">
        <h1 className="text-white font-bold text-3xl">Calculadora de IMC</h1>
        <div className="flex flex-col gap-3 justify-between">
          <div className="flex justify-between items-center gap-3">
            <label className="text-white font-bold">PESO:</label>
            <input
              className="flex items-center justify-center gap-4 py-2 px-6 text-xl rounded-xl"
              type="number"
              placeholder=" Kilos (80)"
              onChange={(e) => setPeso(e.target.valueAsNumber)}
            />
          </div>
          <div className="flex justify-between gap-3 items-center">
            <label className="text-white font-bold">ALTURA: </label>
            <input
              className="flex items-center justify-center gap-4 py-2 px-6 text-xl rounded-xl"
              type="number"
              placeholder=" Metros (1.80)"
              onChange={(e) => setAltura(e.target.valueAsNumber)}
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            disabled={isDisable}
            className="flex items-center justify-center gap-4 py-4 px-8 w-full text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all focus:scale-105 focus:underline disabled:bg-gray-light disabled:hover:scale-100"
            onClick={handleClick}
          >
            Calcular IMC
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-white font-bold text-2xl">IMC:{resultado}</p>
          <div>
            <img className="w-32" src={img} alt=" " />
          </div>
          <p className="text-white font-bold text-xl">{message}</p>
        </div>
      </div>
    </>
  );
};

export default Imc;
