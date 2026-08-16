import { useEffect, useState } from "react";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";

const TARGET_MS = (() => {
  const d = new Date();
  d.setDate(d.getDate() + 6);
  d.setHours(23, 59, 59, 0);
  return d.getTime();
})();

function diff() {
  const ms = Math.max(0, TARGET_MS - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    mins: Math.floor((ms / 60000) % 60),
    secs: Math.floor((ms / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const cells = [
    { label: "Days", value: pad(t.days) },
    { label: "Hours", value: pad(t.hours) },
    { label: "Mins", value: pad(t.mins) },
    { label: "Secs", value: pad(t.secs) },
  ];

  return (
    <section className="bg-[#F8E7E1] py-16 md:py-24">
      <div className="page-width flex flex-col items-center gap-8 text-center">
        <p className="flex items-center gap-2 text-2xs uppercase tracking-[0.3em] text-foreground/60">
          <Icon name="fire" className="w-4 h-4 text-sale" /> Limited time offer
        </p>
        <h2 className="heading text-title-md">Best deal of the days</h2>
        <p className="max-w-md text-base leading-7 text-foreground/60">
          Take up to 20% off featured audio gear — before the timer runs out.
        </p>
        <div className="flex gap-3 sm:gap-4">
          {cells.map((c, i) => (
            <div key={c.label} className="flex items-center gap-3 sm:gap-4">
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-background px-5 py-4 shadow-sm sm:px-7 sm:py-6">
                <span className={`heading text-3xl sm:text-4xl ${i === 2 ? "text-sale" : ""}`}>{c.value}</span>
                <span className="text-2xs uppercase tracking-[0.2em] text-foreground/50">{c.label}</span>
              </div>
              {i < cells.length - 1 && <span className="heading text-2xl text-foreground/30">:</span>}
            </div>
          ))}
        </div>
        <a href="#best-sellers" className="btn--primary">
          Grab the deal <Icon name="arrowRight" className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}