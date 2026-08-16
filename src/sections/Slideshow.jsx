import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PlaceholderImage from "../components/PlaceholderImage";
import { SLIDES } from "../data/store";

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const timer = useRef(null);

  const go = useCallback((i) => {
    setCurrent((i + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    timer.current = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <section className="relative bg-foreground text-background overflow-hidden" aria-label="Featured slides">
      <div className="relative aspect-[4/3] md:aspect-[21/9]">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== current}
          >
            <PlaceholderImage seed={i + 1} className="w-full h-full opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
            <div className="absolute inset-0 flex items-end md:items-center">
              <div className="page-width pb-14 md:pb-0">
                <div className="max-w-2xl">
                  <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-lemon">
                    <Icon name="sparkles" className="w-4 h-4" /> New Collection 2026
                  </p>
                  <h2 className="heading text-title-lg md:text-title-xl">{slide.title}</h2>
                  <p className="mt-5 max-w-lg text-base leading-7 text-background/80">
                    Immersive sound, premium materials, and a design built to disappear into your day.
                  </p>
                  <Link to={slide.to} className="btn--white mt-8">
                    {slide.cta} <Icon name="arrowRight" className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 p-3 text-background/70 transition-colors hover:text-background md:block"
          aria-label="Previous slide"
          onClick={() => go(current - 1)}
        >
          <Icon name="chevronLeft" className="w-6 h-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 p-3 text-background/70 transition-colors hover:text-background md:block"
          aria-label="Next slide"
          onClick={() => go(current + 1)}
        >
          <Icon name="chevronRight" className="w-6 h-6" />
        </button>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${i === current ? "w-8 bg-background" : "w-1.5 bg-background/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}