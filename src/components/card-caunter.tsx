import CountUp from "react-countup";

export interface CardCounterProps {
  numberCardCounter: number;
  textCardCounter: string;
  andMoney: string;
}

export function CardCounter({
  numberCardCounter,
  textCardCounter,
  andMoney,
}: CardCounterProps) {
  return (
    <div className="bg-neutral-100 rounded-2xl w-[350px] h-[200px] sm:w-[400px] sm:h-[250px] flex flex-col justify-center items-center gap-8">
      <h1 className="sm:text-7xl text-5xl font-bold bebasNeue text-center">
        {andMoney}
        <CountUp
          duration={3}
          separator="."
          end={numberCardCounter}
          enableScrollSpy
        />
      </h1>
      <span className="uppercase sm:text-3xl text- max-w-[250px] bebasNeue text-center sm:max-w-[350px]">
        {textCardCounter}
      </span>
    </div>
  );
}
