import { useRef, useState } from "react";
import Icon from "../components/Icon";
import PlaceholderImage from "../components/PlaceholderImage";

export default function ImageComparison() {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);

  const onMove = (clientX) => {
    const rect = ref.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  };

  return (
    <section className="py-16 md:py-24" id="collections">
      <div className="page-width flex flex-col items-center gap-6 text-center">
        <p className="text-2xs uppercase tracking-[0.2em] text-foreground/50">Before / After</p>
        <h2 className="heading text-title-sm">Find your perfect sound</h2>
        <p className="max-w-xl text-base leading-7 text-foreground/60">
          Drag the slider to compare our studio design with the everyday alternative.
        </p>

        <div
          ref={ref}
          className="relative mt-4 aspect-[16/10] w-full max-w-4xl select-none overflow-hidden rounded-2xl cursor-ew-resize"
          onPointerDown={(e) => onMove(e.clientX)}
          onPointerMove={(e) => e.buttons === 1 && onMove(e.clientX)}
        >
          <div className="absolute inset-0">
            <PlaceholderImage seed={8} className="w-full h-full" />
            <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-1.5 text-xs font-medium">Everyday</span>
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <PlaceholderImage seed={9} className="w-full h-full" />
            <span className="absolute bottom-4 left-4 rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background">Studio grade</span>
          </div>
          <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
            <div className="absolute inset-y-0 -translate-x-1/2 border-l-2 border-white">
              <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-lg">
                <Icon name="chevronLeft" className="w-4 h-4" />
                <Icon name="chevronRight" className="w-4 h-4 -ml-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}