export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Catalog", to: "/catalog" },
  { label: "Contact", to: "/contact" },
];

export const COLLECTIONS = [
  { id: "all", title: "All products", subtitle: "Check out all our products", featured: true },
  { id: "headphones", title: "Headphones", subtitle: "Surround yourself in sound" },
  { id: "earphones", title: "Earphones", subtitle: "Small design, great sound" },
  { id: "speakers", title: "Speakers", subtitle: "The world's most immersive sound" },
  { id: "accessories", title: "Accessories", subtitle: "Optimal condition for years" },
  { id: "wireless", title: "Wireless", subtitle: "Headphones to enchant instead of entangle" },
  { id: "gaming", title: "Gaming", subtitle: "Dive into the game with every sound" },
  { id: "limited", title: "Limited", subtitle: "Collection for the exceptional" },
];

export const PRODUCTS = [
  { id: "hp-900", title: "Aurora 900 Headphones", vendor: "Harmony", category: "headphones", price: 2490000, salePrice: null, rating: 4.8, reviews: 214, badge: "Best seller" },
  { id: "hp-900-nc", title: "Aurora 900 ANC", vendor: "Harmony", category: "headphones", price: 2999000, salePrice: 2499000, rating: 4.7, reviews: 96, badge: "-17%" },
  { id: "hp-lite", title: "Feather Lite Headphones", vendor: "Astraudio", category: "headphones", price: 1299000, salePrice: null, rating: 4.5, reviews: 301, badge: null },
  { id: "hp-retro", title: "Vintage Retro Over-Ear", vendor: "Harmony", category: "headphones", price: 1899000, salePrice: 1599000, rating: 4.6, reviews: 143, badge: "-16%" },
  { id: "ep-twist", title: "Twist Earbuds", vendor: "Astraudio", category: "earphones", price: 899000, salePrice: null, rating: 4.4, reviews: 512, badge: null },
  { id: "ep-pro", title: "Pulse Pro Earphones", vendor: "Harmony", category: "earphones", price: 1499000, salePrice: 1199000, rating: 4.9, reviews: 88, badge: "-20%" },
  { id: "ep-wireless", title: "Air buds True Wireless", vendor: "Astraudio", category: "earphones", price: 649000, salePrice: null, rating: 4.3, reviews: 760, badge: null },
  { id: "sp-echo", title: "Echo Elegance Speaker", vendor: "Harmony", category: "speakers", price: 3490000, salePrice: 2990000, rating: 4.8, reviews: 157, badge: "New" },
  { id: "sp-beat", title: "BeatBox Portable", vendor: "Astraudio", category: "speakers", price: 1999000, salePrice: null, rating: 4.6, reviews: 233, badge: null },
  { id: "sp-mini", title: "Mini Beat Speaker", vendor: "Harmony", category: "speakers", price: 549000, salePrice: 449000, rating: 4.4, reviews: 421, badge: "-18%" },
  { id: "acc-case", title: "Shield Hard Case", vendor: "Harmony", category: "accessories", price: 249000, salePrice: null, rating: 4.5, reviews: 99, badge: null },
  { id: "acc-cable", title: "Braided USB-C Cable 2m", vendor: "Astraudio", category: "accessories", price: 149000, salePrice: null, rating: 4.2, reviews: 305, badge: null },
];

export const vnd = (value) =>
  "Rp " +
  value
    .toLocaleString("id-ID")
    .replace(/\./g, ",")
    .replace(/\d+(,\d+)?$/, (m) => m.replace(/,/g, "."));

export const formatPrice = (value) => {
  const digits = value.toLocaleString("en-US").replace(/,/g, ".");
  return "Rp " + digits;
};

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export function useShopSafe() {
  const ctx = useContext(ShopContext);
  return ctx;
}

export const TESTIMONIALS = [
  {
    quote:
      "Harmony Sound's meticulous curation of premium audio tech truly stands out. Their offerings, from headphones to expansive home theaters, consistently raise the bar.",
    author: "Nathan Wright",
    source: "Rolling Stone",
  },
  {
    quote:
      "If there's one name synonymous with unparalleled audio experiences, it's Harmony Sound. They've managed to bridge the gap between luxury and functionality effortlessly.",
    author: "Clara Jefferson",
    source: "Billboard",
  },
  {
    quote:
      "Harmony Sound isn't just selling audio equipment; they're curating an experience. Their handpicked selections promise — and deliver — unparalleled sound quality.",
    author: "Rebecca Landon",
    source: "Pitchfork",
  },
];

export const FEATURE_BULLETS = [
  { icon: "truck", text: "In stock! Ships within 1-2 business days." },
  { icon: "headphone", text: "90-day risk-free trial" },
  { icon: "award", text: "2-Year Warranty" },
  { icon: "box", text: "Complimentary shipping & returns" },
];

export const TRUST_ICONS = [
  { icon: "support", title: "Customer service", text: "Layanan bantuan responsif 24/7 untuk semua kebutuhan belanja Anda." },
  { icon: "box", title: "Fast Free Shipping", text: "Get free shipping on orders of $150 or more" },
  { icon: "users", title: "Refer a friend", text: "Refer a friend and get 15% off each other." },
  { icon: "shield", title: "Secure payment", text: "Your payment information is processed securely" },
];

export const SOCIALS = [
  { id: "facebook", label: "My Store on Facebook", href: "https://www.facebook.com/" },
  { id: "twitter", label: "My Store on X (Twitter)", href: "https://twitter.com/" },
  { id: "instagram", label: "My Store on Instagram", href: "https://instagram.com/" },
  { id: "youtube", label: "My Store on YouTube", href: "https://www.youtube.com/" },
];

export const SLIDES = [
  { title: "EXPERIENCE UNPARALLELED AUDIO ELEGANCE", cta: "Shop Headphones", to: "/catalog" },
  { title: "UNIQUELY CRAFTED EARPHONES FOR YOUR STYLE", cta: "Shop Earphones", to: "/catalog" },
  { title: "DUST AND WATERPROOF", cta: "Shop Speakers", to: "/catalog" },
];

export const BLOG_POSTS = [
  { title: "How to choose the perfect headphones", category: "Guides", date: "Aug 2, 2026" },
  { title: "The science of high-resolution audio", category: "Stories", date: "Jul 21, 2026" },
  { title: "5 essentials for your listening room", category: "Inspiration", date: "Jul 8, 2026" },
];