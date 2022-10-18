import React, { useState, useEffect } from "react";
const Imc = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [isDisable, setDisable] = React.useState(false);
  let aux: number = 0;
  let a: number = 0;

  const handleClick = () => {
    if (peso <= 0) {
      alert("⚠️ insira um peso valido");
      return;
    }
    if (altura <= 0) {
      alert("insira uma altura valida");
      return;
    }
    aux = Number(peso) / Number(altura * altura);
    a = +aux.toFixed(2);
    setResultado(a);
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
          <div className="flex justify-between gap-3">
            <label className="text-white font-bold">PESO:</label>
            <input
              type="number"
              placeholder=" Kilos (80)"
              onChange={(e) => setPeso(e.target.valueAsNumber)}
            />
          </div>
          <div className="flex justify-between gap-3">
            <label className="text-white font-bold">ALTURA: </label>
            <input
              type="number"
              placeholder=" Metros (1.80)"
              onChange={(e) => setAltura(e.target.valueAsNumber)}
            />
          </div>
        </div>
        <div className="flex items-center">
          <button
            disabled={isDisable}
            className="flex items-center justify-center gap-4 py-5 px-12 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all focus:scale-105 focus:underline disabled:bg-gray-light disabled:hover:scale-100"
            onClick={handleClick}
          >
            Calcular IMC
          </button>
        </div>

        <p className="text-white font-bold">{resultado}</p>
      </div>
    </>
  );
};

export default Imc;
