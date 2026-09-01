import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Services", to: "/", hash: "services" },
  { label: "Who we help", to: "/", hash: "audiences" },
  { label: "How it works", to: "/", hash: "process" },
  { label: "FAQs", to: "/", hash: "faqs" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-4 py-4 sm:px-6 lg:px-10 lg:py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-2 text-ink-foreground">
          <span className="flex size-9 items-center justify-center rounded-xl bg-saffron text-saffron-foreground transition-transform group-hover:rotate-6">
            <BriefcaseBusiness className="size-4" />
          </span>
          <span className="font-display text-xl tracking-tight">Shipxankit</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-ink-foreground/75 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={`${item.to}#${item.hash}`} className="story-link transition-colors hover:text-ink-foreground">
              {item.label}
            </a>
          ))}
          <Link to="/contact" className="story-link transition-colors hover:text-ink-foreground">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden rounded-full bg-ink px-5 text-ink-foreground hover:bg-primary lg:inline-flex">
            <Link to="/booking">Book a strategy call <ArrowUpRight className="size-4" /></Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="rounded-full bg-ink/10 text-ink-foreground hover:bg-ink/20 lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            className="mx-auto mt-4 max-w-7xl overflow-hidden rounded-2xl border border-ink-foreground/15 bg-ink/90 p-4 text-ink-foreground shadow-xl backdrop-blur-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a key={item.label} href={`${item.to}#${item.hash}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm hover:bg-ink-foreground/10">
                  {item.label}
                </a>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm hover:bg-ink-foreground/10">Contact</Link>
              <Button asChild className="mt-2 rounded-xl bg-saffron text-saffron-foreground hover:bg-saffron/90">
                <Link to="/booking" onClick={() => setOpen(false)}>Book a strategy call <ArrowUpRight className="size-4" /></Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-saffron text-saffron-foreground"><BriefcaseBusiness className="size-4" /></span>
              <span className="font-display text-xl">Shipxankit</span>
            </Link>
            <p className="mt-7 max-w-sm font-display text-3xl leading-tight text-ink-foreground sm:text-4xl">
              Turn AI curiosity into useful business momentum.
            </p>
            <Button asChild className="mt-8 rounded-full bg-saffron text-saffron-foreground hover:bg-saffron/90">
              <Link to="/contact">Start a conversation <ArrowUpRight className="size-4" /></Link>
            </Button>
          </div>
          <FooterColumn title="Explore" links={[{ label: "Services", to: "/#services" }, { label: "Who we help", to: "/#audiences" }, { label: "How it works", to: "/#process" }, { label: "Book a call", to: "/booking" }]} />
          <FooterColumn title="For business" links={[{ label: "AI for teams", to: "/#services" }, { label: "One-person business", to: "/#audiences" }, { label: "Implementation", to: "/#process" }, { label: "Support", to: "https://payhip.com/shipxankit" }]} />
          <FooterColumn title="Company" links={[{ label: "Contact", to: "/contact" }, { label: "Privacy", to: "/privacy" }, { label: "Terms", to: "/terms" }, { label: "Payhip support", to: "https://payhip.com/shipxankit" }]} />
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-ink-foreground/15 pt-6 text-xs text-ink-foreground/55 sm:flex-row">
          <p>© 2026 Shipxankit. AI consulting for people building what is next.</p>
          <p>Made for ambitious work in India and beyond.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-sm font-medium text-ink-foreground/55">{title}</p>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            {link.to.startsWith("http") ? (
              <a href={link.to} target="_blank" rel="noreferrer" className="text-ink-foreground/75 transition-colors hover:text-ink-foreground">{link.label}</a>
            ) : (
              <Link to={link.to as "/"} className="text-ink-foreground/75 transition-colors hover:text-ink-foreground">{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="bg-ink px-4 pb-16 pt-32 text-ink-foreground sm:px-6 sm:pb-20 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-saffron">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[0.98] tracking-tight sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}