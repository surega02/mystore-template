import Icon from "./Icon";

export default function Rating({ value = 5, className = "text-star" }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= Math.round(value) ? "" : "opacity-30"}>
        <Icon name="star" className="w-4 h-4" />
      </span>,
    );
  }
  return <span className={`inline-flex items-center gap-0.5 ${className}`}>{stars}</span>;
}