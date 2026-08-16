import Icon from "../components/Icon";
import PlaceholderImage from "../components/PlaceholderImage";

export default function VideoBanner() {
  return (
    <section className="relative bg-foreground text-background">
      <div className="relative aspect-[3/2] md:aspect-[21/9] overflow-hidden">
        <PlaceholderImage seed={7} className="w-full h-full opacity-50" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="page-width">
            <div className="max-w-xl">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-lemon">Discover</p>
              <h2 className="heading text-title-lg">Sound that moves with you</h2>
              <p className="mt-4 text-base leading-7 text-background/80">
                Engineered for the moments that matter &mdash; from morning commutes to midnight
                listening sessions.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#best-sellers" className="btn--white">
                  Shop now
                </a>
                <a href="#collections" className="btn border-2 border-background/40 text-background hover:border-background hover:bg-background hover:text-foreground">
                  Explore the collection
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-background text-foreground"
          aria-label="Play video"
        >
          <Icon name="play" className="w-5 h-5 translate-x-0.5" />
        </button>
      </div>
    </section>
  );
}