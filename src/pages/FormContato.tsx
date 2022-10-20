// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwkznowv");
  let [isOpen, setIsOpen] = useState<boolean>(false);
  if (state.succeeded) {
    return (
      <div className="h-screen bg-gradient-to-t to-gray-light from-gray-dark p-16 pt-40 ">
        <div className="flex flex-col justify-center items-center w-68 bg-blue gap-3 rounded-tl-3xl rounded-br-3xl mobile:p-2 tablet:p-4 laptop-p10 desktop:p-20">
          <h1 className="text-yellow text-center font-bold text-4xl">
            Sua mensagem foi enviada!
          </h1>
          <p className="text-yellow text-center">
            Sua mensagem foi recebido e em breve entraremos em contato pelo
            e-mail.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-t to-blue from-gray-dark p-3 gap-3 h-screen">
      <div className="max-w-7xl flex flex-col ">
        <h1 className="flex justify-center text-white font-bold text-3xl">
          Entre em contato conosco!
        </h1>
        <div className="flex flex-col gap-3 justify-between">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label className="text-white" htmlFor="email">
              E-mail:
            </label>
            <input
              className="flex items-center justify-center gap-4 py-2 px-6 text-xl rounded-xl"
              id="email"
              type="email"
              name="email"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-white" htmlFor="Nome">
                  Nome:
                </label>
                <input
                  className="flex items-center justify-center gap-4 py-2 px-6 text-xl rounded-xl"
                  id="nome"
                  type="nome"
                  name="nome"
                />
                <ValidationError
                  prefix="nome"
                  field="nome"
                  errors={state.errors}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white" htmlFor="Sobrenome">
                  Sobrenome:
                </label>
                <input
                  className="flex items-center justify-center gap-4 py-2 px-6 text-xl rounded-xl"
                  id="sobrenome"
                  type="sobrenome"
                  name="sobrenome"
                />
                <ValidationError
                  prefix="Sobrenome"
                  field="sobrenome"
                  errors={state.errors}
                />
              </div>
            </div>
            <label className="text-white" htmlFor="Assunto">
              Assunto:
            </label>
            <input
              className="flex items-center justify-center gap-4 py-2 px-6 text-xl rounded-xl"
              id="assunto"
              type="assunto"
              name="assunto"
            />
            <ValidationError
              prefix="Assunto"
              field="assunto"
              errors={state.errors}
            />
            <label className="text-white" htmlFor="Assunto">
              Mensagem:
            </label>
            <textarea
              className="flex items-center justify-center gap-4 py-2 px-6 w- text-xl rounded-xl text-blue"
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div className="flex justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center w-1/2 tablet:w-full py-5 px-8 text-xl bg-yellow rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all focus:scale-105 focus:underline "
                type="submit"
                disabled={state.submitting}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
