import { useEffect, useState } from "react";

type TimeLeft = {
  d: number;
  h: number;
  m: number;
  s: number;
  ended: boolean;
};

export default function Countdown({
  endTime,
  onEnd,
}: {
  endTime: string;
  onEnd: () => void;
}) {
  const calculate = (): TimeLeft => {
    const diff = new Date(endTime).getTime() - Date.now();

    if (diff <= 0) {
      return { d: 0, h: 0, m: 0, s: 0, ended: true };
    }

    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / (1000 * 60)) % 60),
      s: Math.floor((diff / 1000) % 60),
      ended: false,
    };
  };

  const [time, setTime] = useState<TimeLeft>(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      const next = calculate();
      setTime(next);

      if (next.ended) {
        clearInterval(timer);
        onEnd();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, onEnd]);

  if (time.ended) {
    return (
      <div className="text-center text-white text-3xl font-semibold animate-pulse">
        🚀 We Are Live Now
      </div>
    );
  }

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-4 rounded-xl shadow-xl min-w-[90px] text-center transition-all duration-300 hover:scale-105">
      <div className="text-3xl font-bold tracking-wider">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs uppercase text-white/70 mt-1">
        {label}
      </div>

      {/* glow */}
      <div className="absolute inset-0 rounded-xl blur-xl bg-blue-500/20 -z-10"></div>
    </div>
  );

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      <Box value={time.d} label="Days" />
      <Box value={time.h} label="Hours" />
      <Box value={time.m} label="Minutes" />
      <Box value={time.s} label="Seconds" />
    </div>
  );
}
