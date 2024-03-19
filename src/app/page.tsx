"use client";
import { AccordionRadix } from "@/components/accordion-radix";
import { NavBar } from "@/components/nav-bar";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div>
      <NavBar />
      <section className="bg-neutral-950">
        <div className="container mx-auto flex flex-col items-center justify-center relative z-10 h-[650px]">
          <div className="flex w-full flex-col items-center justify-center gap-8 ">
            <div className="flex flex-col items-center justify-center sm:items-start">
              <p className="bebasNeue text-2xl tracking-[0.2em] text-neutral-500 sm:mb-6 sm:text-3xl">
                SOBRE NÓS
              </p>
              <div className="text-center text-5xl font-semibold leading-tight text-neutral-100 mt-8 sm:text-start sm:text-8xl">
                <h1>M2 AGÊNCIA</h1>
                <span className="font-black"> DE MARKETING </span>
              </div>
              <p className="saira max-w-[400px] text-center text-xl text-neutral-200 mt-8 sm:max-w-[900px] sm:text-center sm:text-2xl mx-auto">
                Elevar Marcas com Autenticidade e Inovação Nossa missão é clara
                e ousada: criar autenticidade, ir além das expectativas e
                oferecer soluções inovadoras, personalizadas e criativas.
                Acreditamos que criatividade implica em fugir do óbvio para
                produzir algo novo. Estamos sempre preparados para novas
                gerações, tendências e formatos. A M2 tem como valores ser um
                agência Democrática, Acolhedora e Respeitosa, atingimos isso de
                forma clara e transparente para nossa equipe e clientes.
              </p>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </section>
      <section className="pb-96 bg-neutral-200">
        <div className="container mx-auto flex flex-col">
          <div className="">
            <div></div>
            <div></div>
          </div>
          <AccordionRadix />
        </div>
      </section>
    </div>
  );
}
