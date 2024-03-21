"use client";
import { AccordionRadix } from "@/components/accordion-radix";
import { CardGoogle } from "@/components/card-google";
import { NavBar } from "@/components/nav-bar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <section className="bg-neutral-950 ">
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
      <section className="py-16 bg-neutral-300">
        <div className="container  mx-auto flex flex-col">
          <div className=" flex justify-around gap-16">
            <div className="flex relative text-6xl font-semibold bebasNeue">
              O QUE <br /> FAZEMOS?
              <div className="absolute top-0 left-0 transform -translate-x-[155px] -translate-y-20 -rotate-[50deg] opacity-90 w-80">
                <Image
                  width={400}
                  height={400}
                  src="/svgs/elements/18.svg"
                  alt="Fita adesiva"
                />
              </div>
            </div>
            <div className="max-w-[550px] text-2xl font-bold saira z-20 text-neutral-900">
              Cada projeto é uma chance única de impactar positivamente o seu
              negócio. Nossa equipe altamente capacitada busca constantemente
              ultrapassar limites criativos e de eficácia, sempre buscando
              superar expectativas e impulsionar o sucesso do cliente.
            </div>
          </div>
          <AccordionRadix />
        </div>
      </section>
      <section className="py-16 bg-neutral-950">
        <div className="container mx-auto flex flex-col">
          <div className="flex justify-around gap-16">
            <div className="text-6xl font-semibold bebasNeue text-neutral-100">
              Nossos <br /> Clientes
            </div>
            <div className="max-w-[550px] text-2xl saira text-neutral-100">
              Apresentamos alguns dos nossos clientes que alcançaram sucesso por
              meio da nossa colaboração e expertise. Ao trabalhar em estreita
              parceria com eles, identificamos oportunidades, desenvolvemos
              estratégias personalizadas e implementamos soluções inovadoras que
              geraram resultados tangíveis
            </div>
          </div>
        </div>
        <div className="flex text-center justify-center mx-auto container my-16 text-neutral-100">
          CAROUSEL CLIENTES
        </div>
        <div className="container mx-auto items-center justify-center flex">
          <CardGoogle
            altImage="Vl Imóveis avaliação"
            nameCard="VL IMÓVEIS"
            dataCard="19-03-2024"
            avatarGoogle="/image/av-google/VL-imoveis.png"
            text="Obrigado por compartilhar sua experiência positiva conosco! Ficamos felizes em saber que nosso trabalho de Marketing nas redes sociais está gerando Resultados impressionantes. Seu feedback é muito importante para nós e nos motiva a continuar aprimorando nossos serviços. Estamos ansiosos para continuar colaborando e alcançando ainda mais sucesso juntos! 😊🚀"
          />
        </div>
      </section>
    </div>
  );
}
