import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PlaceholderImage from "../components/PlaceholderImage";
import SectionHeading from "../components/SectionHeading";
import { BLOG_POSTS } from "../data/store";

export default function BlogPosts() {
  const [feature] = BLOG_POSTS;
  const rest = BLOG_POSTS.slice(1);
  return (
    <section className="py-16 md:py-24">
      <div className="page-width">
        <SectionHeading eyebrow="The journal" title="From the journal" subtitle="Guides, stories, and inspiration from our team." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Link to="/" className="group relative overflow-hidden rounded-xl lg:col-span-2 lg:row-span-2">
            <div className="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[28rem]">
              <PlaceholderImage seed={19} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-background">
              <p className="text-xs uppercase tracking-[0.2em] text-background/70">{feature.category} &middot; {feature.date}</p>
              <h3 className="heading mt-2 text-2xl sm:text-3xl max-w-lg">{feature.title}</h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                Read article <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
          {rest.map((post, i) => (
            <Link key={post.title} to="/" className="group overflow-hidden rounded-xl bg-cream">
              <div className="aspect-[16/10] overflow-hidden">
                <PlaceholderImage seed={i + 20} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">{post.category} &middot; {post.date}</p>
                <h3 className="mt-2 text-lg font-medium leading-snug group-hover:underline underline-offset-4">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}