/* eslint-disable react/no-unescaped-entities */
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export function AccordionRadix() {
  return (
    <div className="w-full h-auto">
      <div className="relative flex justify-center items center container mx-auto mt-20 z-50">
        <Accordion.Root
          className="rounded-md w-full mx-4 sm:mx-1 sm:w-3/4 bg-neutral-950 text-neutral-100 shadow-2xl text-center"
          type="single"
          collapsible
        >
          <Accordion.Item value="item-1">
            <Accordion.Trigger className="AccordionTrigger uppercase flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-neutral-900">
              <span className="font-black text-lg sm:text-xl w-full text-start">
                Produção de Conteúdo Criativo
              </span>
              <ChevronDownIcon
                className="AccordionChevron size-8"
                aria-hidden
              />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-neutral-900">
              <p>
                Desenvolvemos conteúdo original e envolvente que captura a
                essência da sua marca e ressoa com seu público-alvo. Desde
                artigos e posts de blog até vídeos e infográficos, criamos
                materiais que inspiram, educam e engajam.
              </p>
            </Accordion.Content>
            <div className="absolute top-0 right-0 transform translate-x-0 translate-y-16 sm:-translate-x-20 sm:translate-y-44 -z-50">
              <Image
                width={300}
                height={300}
                src="/svgs/elements/16.svg"
                alt="Mira"
              />
            </div>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Trigger className="AccordionTrigger uppercase flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-neutral-900">
              <span className="font-black text-lg sm:text-xl w-full text-start">
                Social Midia
              </span>
              <ChevronDownIcon
                className="AccordionChevron size-8"
                aria-hidden
              />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-neutral-900">
              <p>
                Gerenciamos suas redes sociais com estratégias eficazes de
                conteúdo, interação com a comunidade e análise de dados.
                Construímos uma presença digital autêntica e envolvente para sua
                marca, aumentando o alcance e o engajamento dos seguidores
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3">
            <Accordion.Trigger className="AccordionTrigger uppercase flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-neutral-900">
              <span className="font-black text-lg sm:text-xl w-full text-start">
                Tráfego Pago
              </span>
              <ChevronDownIcon
                className="AccordionChevron size-8"
                aria-hidden
              />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-neutral-900 rounded-md">
              <p>
                Implementamos campanhas de publicidade online altamente
                direcionadas e otimizadas para gerar tráfego qualificado para o
                seu site. Utilizamos plataformas como Google Ads, Facebook Ads e
                LinkedIn Ads para alcançar seu público-alvo e maximizar o
                retorno sobre o investimento.
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-4">
            <Accordion.Trigger className="AccordionTrigger uppercase flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-neutral-900">
              <span className="font-black text-lg sm:text-xl w-full text-start">
                Google
              </span>
              <ChevronDownIcon
                className="AccordionChevron size-8"
                aria-hidden
              />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-neutral-900 rounded-md">
              <p>
                Utilizamos estratégias avançadas de otimização de mecanismos de
                busca (SEO) e marketing de conteúdo para aumentar a visibilidade
                orgânica da sua marca online. Criamos conteúdo relevante e
                otimizado para atrair tráfego qualificado e melhorar seu
                posicionamento nos resultados de pesquisa.
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-5">
            <Accordion.Trigger className="AccordionTrigger uppercase flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-neutral-900">
              <span className="font-black text-lg sm:text-xl w-full text-start">
                SITE PROFISSIONAL
              </span>
              <ChevronDownIcon
                className="AccordionChevron size-8"
                aria-hidden
              />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-neutral-900">
              <p>
                Criamos sites personalizados e responsivos que não apenas
                impressionam visualmente, mas também oferecem uma experiência de
                usuário excepcional. Desde a arquitetura da informação até o
                design e a funcionalidade, construímos sites que refletem a
                identidade da sua marca e impulsionam resultados tangíveis.
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-6">
            <Accordion.Trigger className="AccordionTrigger uppercase flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-neutral-900">
              <span className="font-black text-lg sm:text-xl w-full text-start">
                Planejamento Estratégico
              </span>
              <ChevronDownIcon
                className="AccordionChevron size-8"
                aria-hidden
              />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-neutral-900 rounded-md">
              <p>
                Desenvolvemos planos de marketing abrangentes e estratégias
                personalizadas para impulsionar o crescimento do seu negócio.
                Com uma abordagem orientada por dados e focada em resultados,
                ajudamos a definir metas claras, identificar oportunidades de
                mercado e alcançar o sucesso a longo prazo.
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
}
