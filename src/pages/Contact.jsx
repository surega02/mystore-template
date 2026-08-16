import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";
import { SOCIALS } from "../data/store";

const INFO = [
  { icon: "pin", label: "Address", value: "Jl. Sudirman No. 123, Jakarta Selatan, DKI Jakarta 12190, Indonesia" },
  { icon: "mail", label: "Email", value: "support@mystore.com" },
  { icon: "phone", label: "Phone", value: "+62 812-3456-7890" },
];

const SUBJECTS = ["General Inquiry", "Product Question", "Order Support", "Returns & Refunds", "Other"];

const inputClass =
  "w-full rounded-lg border border-foreground/15 bg-cream px-4 py-3 text-sm outline-none transition-colors placeholder:text-foreground/40 focus:border-foreground focus:bg-background";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="border-b border-foreground/5 bg-cream/50">
        <div className="page-width flex flex-col gap-4 py-12 md:py-16">
          <nav className="flex items-center gap-2 text-xs text-foreground/50" aria-label="Breadcrumb">
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
            <Icon name="chevronRight" className="w-3 h-3" />
            <span className="text-foreground">Contact</span>
          </nav>
          <h1 className="heading text-title-lg">Contact us</h1>
          <p className="max-w-xl text-base leading-7 text-foreground/60">
            Have a question about an order, a product, or something else? Our team usually replies
            within one business day.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-width grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Info column */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl bg-[#F2EFE8] p-8 lg:p-10">
              <SectionHeading align="left" eyebrow="Contact" title={<>Talk to a real <span className="bg-highlight px-1">human</span>.</>} />
              <p className="mt-5 max-w-sm text-base leading-7 text-foreground/60">
                Reach out for help choosing gear, tracking an order, or anything in between.
              </p>
              <ul className="mt-10 space-y-6">
                {INFO.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                      <Icon name={item.icon} className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground/70">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 border-t border-foreground/10 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">Follow us</p>
                <ul className="mt-3 flex items-center gap-2">
                  {SOCIALS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 transition-colors hover:bg-foreground hover:text-background"
                      >
                        <Icon name={s.id} className="w-4 h-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl bg-[#F2EFE8] p-8 lg:p-12">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success text-background">
                    <Icon name="check" className="w-7 h-7" />
                  </span>
                  <h2 className="heading text-2xl">Message sent!</h2>
                  <p className="max-w-sm text-sm leading-6 text-foreground/60">
                    Thanks {form.name || "there"} — we've received your message and will get back to
                    you at <span className="font-medium text-foreground">{form.email}</span> shortly.
                  </p>
                  <button className="btn--secondary mt-2" onClick={() => setSent(false)}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="grid gap-6" onSubmit={submit}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium">Your Name</span>
                      <input required className={inputClass} placeholder="Jane Doe" value={form.name} onChange={update("name")} />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium">Your Email</span>
                      <input required type="email" className={inputClass} placeholder="jane@example.com" value={form.email} onChange={update("email")} />
                    </label>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium">Your Phone</span>
                      <input type="tel" className={inputClass} placeholder="+62 812-3456-7890" value={form.phone} onChange={update("phone")} />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium">Subject</span>
                      <select className={inputClass} value={form.subject} onChange={update("subject")}>
                        <option value="">Please choose an option</option>
                        {SUBJECTS.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium">Your Message</span>
                    <textarea required rows={5} className={inputClass} placeholder="How can we help?" value={form.message} onChange={update("message")} />
                  </label>
                  <button type="submit" className="btn--primary w-full md:w-auto md:px-12">
                    Submit message <Icon name="arrowRight" className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}