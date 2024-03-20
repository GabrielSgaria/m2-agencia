import Image from "next/image";

export function CardGoogle() {
  return (
    <div className="w-96 h-56 flex flex-col gap-6 bg-neutral-800 p-4 rounded-lg">
      <div className="flex flex-row gap-2">
        <div className="w-14 h-14 rounded-full ">
          <Image
            width={900}
            height={400}
            alt="ImageGoogle"
            src="/image/sgaria.jpeg"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <div className="text-base text-neutral-50 font-bold">
              Gabriel dos Santos Sgaria
            </div>
            <div className="text-xs text-neutral-400">19-03-2024</div>
          </div>
          aqui vai o icone do google
        </div>
      </div>
    </div>
  );
}
