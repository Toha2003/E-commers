import  { useEffect, useState } from "react";

const webinarDates = [
  new Date("2025-10-30T20:30:00+05:00").getTime(),
];

 const SalesTimer = ()=> {
  // Vebinar sanalari ro'yxati

  const [now, setNow] = useState(Date.now());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index < webinarDates.length && now >= webinarDates[index]) {
      setIndex((prev) => prev + 1);
    }
  }, [now, index]);

  if (index >= webinarDates.length) {
    return (
      <div className="text-center p-4 rounded-xl bg-green-100">
        <h2 className="text-lg font-semibold">Vebinarlar tugadi ✅</h2>
      </div>
    );
  }

  const diff = webinarDates[index] - now;
  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="sm:max-w-md md:max-w-[70%] mx-auto ">
      <div className="flex justify-center gap-2">
        <TimeCard value={String(days)}  label="Day"  />
        <span className="text-[32px] pt-2 text-[rgba(219,_68,_68,_1)]">:</span>
        <TimeCard  value={pad(hours)} label="Hours"  />
        <span className="text-[32px] pt-2 text-[rgba(219,_68,_68,_1)]">:</span>
        <TimeCard value={pad(minutes)}  label="Minuts"  />
        <span className="text-[32px] pt-2 text-[rgba(219,_68,_68,_1)]">:</span>
        <TimeCard value={pad(seconds)}  label="Seconds"  />
      </div>
    </div>
  );
}

function TimeCard({ label, value }) {
  return (
    <div className=" flex gap- flex-col">
      <div className="text-xs">{label}</div>
      <div className="text-3xl font-semibold">{value}</div>
    </div>
  );
}

export default SalesTimer;