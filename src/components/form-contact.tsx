import { useForm, ValidationError } from "@formspree/react";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xeqyldzz");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    let loadingTimer: NodeJS.Timeout;
    if (isLoading) {
      loadingTimer = setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 1400);
    }

    return () => clearTimeout(loadingTimer);
  }, [isLoading]);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    await handleSubmit(e);
  };

  useEffect(() => {
    let submittedTimer: NodeJS.Timeout;
    if (isSubmitted) {
      submittedTimer = setTimeout(() => {
        setIsSubmitted(false);
        setShowForm(true);
      }, 4000);
    }

    return () => clearTimeout(submittedTimer);
  }, [isSubmitted]);

  return (
    <>
      {isLoading && (
        <div className="text-neutral-50 bebasNeue text-center mt-28 text-5xl items-center justify-center flex flex-col">
          Enviando...
          <VscLoading size="40" className="animate-spin mt-8 text-neutral-50" />
        </div>
      )}
      {isSubmitted && !isLoading && (
        <div className="text-neutral-50 bebasNeue text-center mt-28 text-5xl items-center justify-center flex flex-col">
          Obrigado por entrar em contato!
          <CheckCircledIcon className="animate-pulse text-lime-400 size-24 mt-8" />
        </div>
      )}
      {!isSubmitted && !isLoading && (
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-10">
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Digite o seu nome..."
            className="bg-neutral-800 transition-all hover:bg-neutral-700 placeholder-neutral-500 text-neutral-50 rounded-xl py-3 px-4 text-xl sm:text-2xl"
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Digite o seu email..."
            className="bg-neutral-800 transition-all hover:bg-neutral-700 placeholder-neutral-500 text-neutral-50 rounded-xl py-3 px-4 text-xl sm:text-2xl"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input
            id="telefone"
            type="telefone"
            name="telefone"
            placeholder="Digite o seu WhatsApp..."
            className="bg-neutral-800 transition-all hover:bg-neutral-700 placeholder-neutral-500 text-neutral-50 rounded-xl py-3 px-4 text-xl sm:text-2xl"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Digite a sua mensagem..."
            className="bg-neutral-800 transition-all hover:bg-neutral-700 text-neutral-50 placeholder-neutral-500 p-4 rounded-xl resize-y text-xl sm:text-2xl"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-neutral-960 py-4 text-xl sm:text-2xl rounded-xl hover:font-bold font-normal transition-all space-x-8 shadow-lg"
            disabled={state.submitting}
          >
            ENVIAR
          </button>
        </form>
      )}
    </>
  );
}
