import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export function AccordionRadix() {
  return (
    <div className="w-full h-[440px]">
      <div className="relative flex justify-center items center container mx-auto mt-20 z-50">
        <Accordion.Root
          className="rounded-md w-full mx-1 sm:w-3/4 bg-neutral-950 text-neutral-100 shadow-xl text-center"
          type="single"
          collapsible
        >
          <Accordion.Item value="item-1">
            <Accordion.Trigger className="AccordionTrigger uppercase flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-neutral-900">
              <span className="font-black text-xl w-full text-start">
                Marketing para Negócios Locais e Delivery
              </span>
              <ChevronDownIcon
                className="AccordionChevron size-8"
                aria-hidden
              />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-neutral-900">
              Prestamos serviço para negocios locais e delivery Prestamos
              serviço para negocios locais e delivery Prestamos serviço para
              negocios locais e delivery Prestamos serviço para negocios locais
              e delivery
            </Accordion.Content>
            <div className="absolute top-0 right-0 transform -translate-x-20 translate-y-14 -z-50">
              <Image
                width={300}
                height={300}
                src="/svgs/elements/16.svg"
                alt="Mira"
              />
            </div>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Trigger className="AccordionTrigger uppercase flex flex-row justify-between w-full items-center  p-4 border-y rounded-md border-solid border-neutral-900">
              <span className="font-black text-xl w-full text-start">
                GERENCIAMENTO DE REDES SOCIAIS
              </span>
              <ChevronDownIcon
                className="AccordionChevron size-8"
                aria-hidden
              />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100  bg-neutral-900">
              Prestamos serviço para negocios locais e delivery Prestamos
              serviço para negocios locais e delivery Prestamos serviço para
              negocios locais e delivery Prestamos serviço para negocios locais
              e delivery
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3">
            <Accordion.Trigger className="AccordionTrigger uppercase flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-neutral-900">
              <span className="font-black text-xl w-full text-start">
                SITE PROFISSIONAL
              </span>
              <ChevronDownIcon
                className="AccordionChevron size-8"
                aria-hidden
              />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100  bg-neutral-900">
              Prestamos serviço para negocios locais e delivery Prestamos
              serviço para negocios locais e delivery Prestamos serviço para
              negocios locais e delivery Prestamos serviço para negocios locais
              e delivery
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-4">
            <Accordion.Trigger className="AccordionTrigger uppercase flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-neutral-900">
              <span className="font-black text-xl w-full text-start">
                BANNERS, E-MAIL MARKETING E IMPRESSOS
              </span>
              <ChevronDownIcon
                className="AccordionChevron size-8"
                aria-hidden
              />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 rounded-md bg-neutral-900">
              Prestamos serviço para negocios locais e delivery Prestamos
              serviço para negocios locais e delivery Prestamos serviço para
              negocios locais e delivery Prestamos serviço para negocios locais
              e delivery
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
}
