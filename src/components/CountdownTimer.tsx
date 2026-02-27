import { useEffect, useState } from "react";
import { Hourglass } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
  label: string;
}

const CountdownTimer = ({ targetDate, label }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return (
      <div className="flex items-center gap-1.5 text-teal">
        <span className="text-xs font-body font-semibold uppercase tracking-wider">🚀 Live Now</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Hourglass className="w-3.5 h-3.5 text-saffron animate-pulse" />
      <div className="flex items-center gap-1.5">
        {[
          { val: timeLeft.days, unit: "d" },
          { val: timeLeft.hours, unit: "h" },
          { val: timeLeft.minutes, unit: "m" },
          { val: timeLeft.seconds, unit: "s" },
        ].map((t) => (
          <span
            key={t.unit}
            className="font-body text-xs font-semibold text-saffron tabular-nums"
          >
            {String(t.val).padStart(2, "0")}
            <span className="text-saffron/60">{t.unit}</span>
          </span>
        ))}
      </div>
      <span className="text-[10px] font-body text-muted-foreground uppercase tracking-wide hidden sm:inline">
        {label}
      </span>
    </div>
  );
};

function getTimeLeft(target: Date) {
  const total = target.getTime() - Date.now();
  if (total <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    total,
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export default CountdownTimer;
