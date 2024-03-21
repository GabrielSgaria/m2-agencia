import Image from "next/image";

export function CardGoogle() {
  return (
    <div className="w-96 h-56 flex flex-col bg-neutral-800  p-4 rounded-lg">

      <div className="flex flex-row items-center w-full gap-4 justify-between ">
        <div className="w-14 h-12 rounded-full ">
          <Image
            width={900}
            height={400}
            alt="ImageGoogle"
            src="/image/sgaria.jpeg"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-1 w-full">
            <div className="text-base text-neutral-50 font-bold flex flex-row justify-between">
              Gabriel dos Santos Sgaria
              <div className="w-5 h-5 rounded-full">
                <Image
                  width={900}
                  height={400}
                  alt="ImageGoogle"
                  src="/svgs/icon-google.svg"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-xs text-neutral-400">19-03-2024</div>
          
          </div>
        </div>

      </div>
    </div>
  );
}
