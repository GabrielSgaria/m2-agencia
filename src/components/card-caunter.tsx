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
    <div className="bg-neutral-100 rounded-2xl w-[500px] h-[300px] flex flex-col justify-center items-center gap-8">
      <h1 className="text-9xl font-bold bebasNeue text-center">
        {andMoney}
        <CountUp duration={3} separator="."  end={numberCardCounter} enableScrollSpy />
      </h1>
      <span className="uppercase text-3xl bebasNeue text-center max-w-[350px]">
        {textCardCounter}
      </span>
    </div>
  );
}
