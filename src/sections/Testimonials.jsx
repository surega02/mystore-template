import Icon from "../components/Icon";
import PlaceholderImage from "../components/PlaceholderImage";
import { TESTIMONIALS } from "../data/store";

export default function Testimonials() {
  return (
    <section className="relative bg-foreground text-background">
      <div className="absolute inset-0 opacity-20">
        <PlaceholderImage seed={18} className="w-full h-full" />
      </div>
      <div className="relative page-width py-16 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-2xs uppercase tracking-[0.3em] text-lemon">Testimonials</p>
          <h2 className="heading mt-3 text-title-md">Happy customers, guaranteed.</h2>
          <p className="mt-4 text-base leading-7 text-background/70">
            Trusted by audiophiles, creators, and first-time listeners alike.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.author} className="rounded-2xl bg-background p-7 text-foreground">
              <Icon name="quote" className="h-8 w-8 text-foreground/20" />
              <blockquote className="mt-4 text-sm leading-6 text-foreground/80">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-xs font-semibold uppercase">
                  {t.author.split(" ").map((w) => w[0]).join("")}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-foreground/50">{t.source}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}