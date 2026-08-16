import SectionHeading from "../components/SectionHeading";

export default function RichText({ eyebrow, title, subtitle }) {
  return (
    <section className="py-16 md:py-24">
      <div className="page-width">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}