export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className = "" }) {
  return (
    <div className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}>
      {eyebrow && <p className="text-2xs uppercase tracking-[0.2em] font-medium text-foreground/60">{eyebrow}</p>}
      <h2 className="heading text-title-sm">{title}</h2>
      {subtitle && <p className="max-w-xl text-base leading-7 text-foreground/60">{subtitle}</p>}
    </div>
  );
}