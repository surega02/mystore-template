import Icon from "../components/Icon";

export default function Marquee({ items, tone = "light", speed = 40 }) {
  const isDark = tone === "dark";
  return (
    <div
      className={`overflow-hidden py-5 ${isDark ? "bg-foreground text-background" : "bg-lemon text-foreground"}`}
      aria-hidden="true"
    >
      <div
        className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap"
        style={{ "--marquee-speed": `${speed}s` }}
      >
        {[0, 1].map((loop) => (
          <div key={loop} className="flex items-center gap-8">
            {items.map((item, i) => (
              <span key={`${loop}-${i}`} className="flex items-center gap-8">
                <span className={`heading text-2xl md:text-3xl uppercase ${isDark ? "" : "text-foreground"}`}>
                  {item}
                </span>
                <Icon name="sparkles" className="w-5 h-5 opacity-70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}