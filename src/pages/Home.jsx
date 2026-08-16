import BestSellers from "../sections/BestSellers";
import BlogPosts from "../sections/BlogPosts";
import BundleSection from "../sections/BundleSection";
import CollectionList from "../sections/CollectionList";
import CountdownTimer from "../sections/CountdownTimer";
import FeaturedProduct from "../sections/FeaturedProduct";
import ImageComparison from "../sections/ImageComparison";
import Marquee from "../sections/Marquee";
import RichText from "../sections/RichText";
import ShopTheFeed from "../sections/ShopTheFeed";
import ShopTheLook from "../sections/ShopTheLook";
import Slideshow from "../sections/Slideshow";
import Testimonials from "../sections/Testimonials";
import VideoBanner from "../sections/VideoBanner";

const MARQUEE_ITEMS = [
  "Play anything",
  "Day-long comfort",
  "Shop new drops",
  "Free shipping over Rp 2.000.000",
  "Refer a friend",
];

export default function Home() {
  return (
    <>
      <Slideshow />
      <RichText
        eyebrow="Welcome to My Store"
        title={<>Audio gear built for <span className="bg-highlight px-2">every day</span>.</>}
        subtitle="From studio-grade headphones to pocket-sized speakers — curated for how you actually listen, wherever you are."
      />
      <CollectionList />
      <VideoBanner />
      <FeaturedProduct />
      <ImageComparison />
      <BundleSection />
      <Marquee items={MARQUEE_ITEMS} tone="light" />
      <ShopTheFeed />
      <CountdownTimer />
      <ShopTheLook />
      <Testimonials />
      <BestSellers />
      <Marquee items={MARQUEE_ITEMS} tone="dark" speed={55} />
      <BlogPosts />
    </>
  );
}