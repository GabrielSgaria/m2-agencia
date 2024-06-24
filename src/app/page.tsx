"use client";
import { AccordionRadix } from "@/components/accordion-radix";
import { CardGoogle } from "@/components/card-google";
import { NavBar } from "@/components/nav-bar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { Footer } from "@/components/footer";
import { ButtonWpp } from "@/components/button-wpp";
import { CardCollaborator } from "@/components/card-collaborator";
import { CardCounter } from "@/components/card-caunter";
import { ContactForm } from "@/components/form-contact";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { ButtonScrollTop } from "@/components/button-scroll-top";

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
      <section className="bg-neutral-950">
        <div className="container px-4 mx-auto flex flex-col  items-center justify-center relative z-10 h-[650px]">
          <div className="flex w-full flex-col items-center justify-center gap-8 ">
            <ButtonScrollTop />
            <div className="flex flex-col items-center justify-center sm:items-start">
              <p className="bebasNeue text-xl text-center w-full uppercase tracking-[0.2em] text-neutral-500 sm:mb-6 sm:text-3xl">
                Elevar Marcas com Autenticidade e Inovação
              </p>
              <div className="text-center text-4xl font-semibold leading-tight text-neutral-100 mt-8 sm:text-start sm:text-8xl w-full">
                <h1>M2 AGÊNCIA</h1>
                <span className="font-black"> DE MARKETING </span>
              </div>
              <p className="saira max-w-[350px] text-center text-xl text-neutral-200 mt-8 sm:max-w-[900px] sm:text-center sm:text-2xl mx-auto">
                Conheça a M2: Nossa missão é clara e ousada, criar
                autenticidade, ir além das expectativas e oferecer soluções
                inovadoras, personalizadas e criativas. Acreditamos que
                criatividade implica em fugir do óbvio para produzir algo novo.
                Estamos sempre preparados para novas gerações, tendências e
                formatos. A M2 tem como valores ser um agência Democrática,
                Acolhedora e Respeitosa, atingimos isso de forma clara e
                transparente para nossa equipe e clientes.
              </p>
            </div>
            <div>
              <ButtonWpp />
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </section>
      <section className="py-16 bg-neutral-200" id="services">
        <div className="container mx-auto flex flex-col">
          <div className="flex items-center justify-around gap-8 sm:gap-16 flex-col sm:flex-row">
            <div className="flex sm:text-5xl text-4xl  text-center sm:text-start font-semibold bebasNeue">
              O QUE <br /> FAZEMOS?
            </div>
            <div className="max-w-[350px] text-center sm:text-start sm:max-w-[550px] text-xl sm:text-2xl font-bold saira text-neutral-900">
              Cada projeto é uma chance única de impactar positivamente o seu
              negócio. Nossa equipe altamente capacitada busca constantemente
              ultrapassar limites criativos e de eficácia, sempre buscando
              superar expectativas e impulsionar o sucesso do cliente.
            </div>
          </div>
          <AccordionRadix />
          <div className="flex items-center justify-center mt-16">
            <ButtonWpp />
          </div>
        </div>
      </section>

      <div
        className="w-full flex mx-auto justify-center bg-neutral-200 h-full "
        id="results"
      >
        <p className=" border-b-[0.1rem] w-[450px] sm:w-[1020px] border-neutral-400" />
      </div>
      <section className="bg-neutral-950 py-16" id="counter">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex flex-col gap-16 sm:grid sm:grid-cols-2 sm:gap-x-60 sm:gap-y-20">
            <CardCounter
              andMoney=""
              numberCardCounter={18}
              textCardCounter="PROJETOS CONCLUÍDOS"
            />
            <CardCounter
              andMoney=""
              numberCardCounter={3}
              textCardCounter="anos de mercado"
            />
            <CardCounter
              andMoney="R$"
              numberCardCounter={80000}
              textCardCounter="investidos em ads em diversos canais"
            />
            <CardCounter
              andMoney="R$"
              numberCardCounter={1000000}
              textCardCounter="VENDAS FEITAS NA INTERNET COM NOSSAS ESTRATÉGIAS"
            />
          </div>
        </div>
      </section>

      <section className="bg-neutral-200 py-16" id="team">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex flex-col items-center justify-around gap-16 sm:flex-row w-full sm:mb-8">
            <div className="flex sm:text-5xl text-4xl  text-center sm:text-start font-semibold bebasNeue">
              CONHEÇA A <br /> NOSSA EQUIPE
            </div>
          </div>
          <div>
            <h1 className="text-center bebasNeue text-xl sm:text-2xl text-neutral-900 ">
              Para além de estereótipos, estilos de vestimenta ou preferências
              musicais, reunimos um time de mentes criativas e abertas.
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-x-20 sm:grid-cols-3">
              <CardCollaborator
                srcCollaborator="/image/collaborator/marcely1x1.jpg"
                altCollaborator="Marcely CEO"
                titleCardCollaborator="CEO E ESPECIALISTA GOOGLE MEU NEGÓCIO"
                textCardCollaborator="Marcely Granado Nied, 22 anos. Fotógrafa e especialista em posicionar marcas no Google."
              />
              <CardCollaborator
                srcCollaborator="/image/collaborator/nied.png"
                altCollaborator="Nied CEO"
                titleCardCollaborator="CEO E GROWTH MARKETING"
                textCardCollaborator="Mateus Nied, 26 anos.
            Especialista em Social Media e
            growth Marketing pela FSM."
              />
              <CardCollaborator
                srcCollaborator="/image/collaborator/andre1x1.jpg"
                altCollaborator="Andre Gestor de trafego"
                titleCardCollaborator="GESTOR DE TRÁFEGO"
                textCardCollaborator="André Granado, 33 anos. Especialista em anúncios patrocinados Instagram, Facebook e Google ADS."
              />
              <CardCollaborator
                srcCollaborator="/image/collaborator/sgaria.jpeg"
                altCollaborator="Gabriel Sgaria Dev"
                titleCardCollaborator="Desenvolvedor de sistemas"
                textCardCollaborator="Gabriel Sgaria, 26 anos. Desenvolvedor de Sistemas especialista em front-end."
              />
              <CardCollaborator
                srcCollaborator="/image/collaborator/maceno.jpeg"
                altCollaborator="Andre Gestor de trafego"
                titleCardCollaborator="Fernando Maceno"
                textCardCollaborator="Fernando Maceno, 23 anos, especialista em produção audiovisual."
              />
              <CardCollaborator
                srcCollaborator="/image/collaborator/robson.png"
                altCollaborator="Andre Gestor de trafego"
                titleCardCollaborator="Robson Correia"
                textCardCollaborator="Robson Correia, 29 anos, formado em Designer gráfico e atualmente também faz parte do time de marketing da Uniandrade."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-950" id="clients">
        <div className="container mx-auto flex flex-col">
          <div className="flex items-center justify-around gap-16 flex-col sm:flex-row">
            <div className="text-center sm:text-start">
              <div className="flex flex-col gap-16">
                <span className="sm:text-5xl text-4xl text-center font-semibold bebasNeue text-neutral-100">
                  Nossos <br /> Clientes
                </span>
                <p className="saira max-w-[350px] text-center text-xl sm:max-w-[500px] sm:text-2xl mx-auto text-neutral-100 ">
                  Apresentamos alguns dos nossos clientes que alcançaram sucesso
                  por meio da nossa colaboração e expertise. Ao trabalhar em
                  estreita parceria com eles, identificamos oportunidades,
                  desenvolvemos estratégias personalizadas e implementamos
                  soluções inovadoras que geraram resultados tangíveis
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden text-center justify-center text-4xl font-semibold bebasNeue text-neutral-100">
          <div>
            <Splide
              options={{
                type: "loop",
                focus: "center",
                autoPlay: "play",
                arrows: false,
                pagination: false,
                drag: "free",
                gap: 80,
                padding: 180,
                autoWidth: true,

                perPage: 1,
                autoScroll: {
                  speed: 1,
                  autoStart: true,
                },
              }}
              extensions={{ AutoScroll }}
              className="opacity-65"
            >
              <SplideSlide>
                <Image
                  width={200}
                  height={200}
                  alt=""
                  src="/image/clients/27.png"
                />
              </SplideSlide>
              <SplideSlide>
                <Image
                  width={200}
                  height={200}
                  alt=""
                  src="/image/clients/28.png"
                />
              </SplideSlide>
              <SplideSlide>
                <Image
                  width={200}
                  height={200}
                  alt=""
                  src="/image/clients/29.png"
                />
              </SplideSlide>
              <SplideSlide>
                <Image
                  width={200}
                  height={200}
                  alt=""
                  src="/image/clients/30.png"
                />
              </SplideSlide>
              <SplideSlide>
                <Image
                  width={200}
                  height={200}
                  alt=""
                  src="/image/clients/31.png"
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>
        <div className="flex mx-auto container">
          <div className=" mx-auto rounded-xl p-8 w-[350px] sm:max-w-[430px] h-auto bg-neutral-900 border-neutral-800 border-r-2 border-b-2 shadow-2xl text-center sm:text-start sm:w-[550px] text-xl sm:text-2xl saira text-neutral-100">
            <h1 className="text-neutral-100 text-center text-3xl sm:text-4xl font-semibold bebasNeue mb-5">
              Solicite seu orçamento
            </h1>
            <ContactForm />
          </div>
        </div>
        <div className="container mx-auto items-center justify-center flex mt-8">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              gap: slidesGap,
              padding: slidesPadding,
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
