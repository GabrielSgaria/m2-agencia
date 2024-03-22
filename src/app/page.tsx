"use client";
import { AccordionRadix } from "@/components/accordion-radix";
import { CardGoogle } from "@/components/card-google";
import { NavBar } from "@/components/nav-bar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { Footer } from "@/components/footer";
import { ButtonWpp } from "@/components/buttonWpp";

export default function Home() {
  const windowSize = useWindowSize();
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  const [slidesGap, setSlidesGap] = useState(0);
  const [slidesPadding, setSlidesPadding] = useState(0);

  useEffect(() => {
    if (windowSize.width < 768) {
      setSlidesPerPage(1);
      setSlidesGap(0);
      setSlidesPadding(40);
    } else {
      setSlidesPerPage(3);
      setSlidesGap(20);
      setSlidesPadding(50);
    }
  }, [windowSize]);

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
        <div className="container mx-auto flex flex-col">
          <div className=" flex items-center justify-around gap-16 flex-col sm:flex-row">
            <div className="flex relative text-6xl font-semibold bebasNeue">
              O QUE <br /> FAZEMOS?
              <div className="absolute top-0 left-0 transform -translate-x-[130px] -translate-y-[40px] sm:-translate-x-[155px] sm:-translate-y-20 -rotate-[50deg] opacity-90 w-60 sm:w-80">
                <Image
                  width={400}
                  height={400}
                  src="/svgs/elements/18.svg"
                  alt="Fita adesiva"
                />
              </div>
            </div>
            <div className="max-w-[430px] text-center sm:text-start sm:max-w-[550px] text-xl sm:text-2xl font-bold saira z-20 text-neutral-900">
              Cada projeto é uma chance única de impactar positivamente o seu
              negócio. Nossa equipe altamente capacitada busca constantemente
              ultrapassar limites criativos e de eficácia, sempre buscando
              superar expectativas e impulsionar o sucesso do cliente.
            </div>
          </div>
          <AccordionRadix />
          <div>
            <ButtonWpp />
          </div>
        </div>
      </section>
      <section className="py-16 bg-neutral-950">
        <div className="container mx-auto flex flex-col">
          <div className="flex items-center justify-around gap-16 flex-col sm:flex-row">
            <div className="text-6xl text-center sm:text-start font-semibold bebasNeue text-neutral-100">
              Nossos <br /> Clientes
            </div>
            <div className="max-w-[430px] text-center sm:text-start sm:max-w-[550px] text-xl sm:text-2xl saira text-neutral-100">
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

        <div className="container mx-auto items-center justify-center flex ">
          <Splide
            options={{
              gap: slidesGap,
              padding: slidesPadding,
              autoplay: true,
              autoWidth: true,
              perPage: slidesPerPage,
              width: "100%",
              intersection: {
                inView: {
                  autoplay: true,
                },
                outView: {
                  autoplay: false,
                },
              },
            }}
          >
            <SplideSlide>
              <CardGoogle
                altImage="Gabriel Sgaria avaliação google"
                nameCard="Gabriel Sgaria"
                dataCard="22-03-2024"
                avatarGoogle="/image/av-google/gabriel-sgaria.png"
                text="Agência com profissionais que entendem do assunto, recomento muito!"
              />
            </SplideSlide>
            <SplideSlide>
              <CardGoogle
                altImage="Vl Imóveis avaliação google"
                nameCard="VL IMÓVEIS"
                dataCard="19-03-2024"
                avatarGoogle="/image/av-google/VL-imoveis.png"
                text=""
              />
            </SplideSlide>
            <SplideSlide>
              <CardGoogle
                altImage="Lorian veiga avaliação google"
                nameCard="Lorian Veiga"
                dataCard="09-2024"
                avatarGoogle="/image/av-google/lorian-veiga.png"
                text="Agência super comprometida, trabalho excelente."
              />
            </SplideSlide>
            <SplideSlide>
              <CardGoogle
                altImage="Bianca Souza Granado avaliação google"
                nameCard="Bianca Souza Granado"
                dataCard="09-2024"
                avatarGoogle="/image/av-google/bianca-souza-granado.png"
                text="Ótimo trabalho!"
              />
            </SplideSlide>
            <SplideSlide>
              <CardGoogle
                altImage="André Granado avaliação google"
                nameCard="André Granado"
                dataCard="09-2024"
                avatarGoogle="/image/av-google/andre-granado.png"
                text=""
              />
            </SplideSlide>
          </Splide>
        </div>
      </section>


      <Footer />
    </div>
  );
}
