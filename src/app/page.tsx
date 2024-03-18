import { NavBar } from "@/components/nav-bar";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <AuroraBackground>
        <section>
          <div className="container mx-auto flex flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row sm:justify-between">
              <div className="flex flex-col items-center justify-center sm:items-start">
                <p className="bebasNeue text-2xl tracking-[0.2em] text-neutral-500 sm:mb-6 sm:text-3xl">
                  SOBRE NÓS
                </p>
                <div className="text-center text-5xl font-semibold leading-tight text-neutral-100 mt-8 sm:text-start sm:text-8xl">
                  <h1>M2 AGÊNCIA</h1>
                  <span className="font-black"> DE MARKETING DIGITAL</span>
                </div>
                <p className="saira max-w-[400px] text-center text-xl text-neutral-200 mt-8 sm:max-w-[900px] sm:text-center sm:text-2xl mx-auto">
                  Elevar Marcas com Autenticidade e Inovação Nossa missão é
                  clara e ousada: criar autenticidade, ir além das expectativas
                  e oferecer soluções inovadoras, personalizadas e criativas.
                  Acreditamos que criatividade implica em fugir do óbvio para
                  produzir algo novo. Estamos sempre preparados para novas
                  gerações, tendências e formatos. A M2 tem como valores ser um
                  agência Democrática, Acolhedora e Respeitosa, atingimos isso
                  de forma clara e transparente para nossa equipe e clientes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AuroraBackground>

      <section>

        
      </section>
    </div>
  );
}
