import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Bot, BriefcaseBusiness, Check, ChevronDown, CirclePlay, Code2, FileText, GraduationCap, LineChart, MessageSquareText, MousePointer2, PenLine, Rocket, Sparkles, Star, Users, Workflow, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav } from "@/components/site-shell";
import heroImage from "@/assets/shipxankit-hero.jpg";
import lakeImage from "@/assets/lake-meditation.jpg";
import teamImage from "@/assets/program-core.jpg";
import founderImage from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shipxankit — Practical AI Consulting for Modern Work" },
      { name: "description", content: "Shipxankit helps students, professionals, founders, and teams use AI to work smarter, launch faster, and build repeatable systems." },
      { property: "og:title", content: "Shipxankit — Practical AI Consulting for Modern Work" },
      { property: "og:description", content: "AI strategy, automation, training, and implementation for people building what is next." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: LineChart, number: "01", title: "AI strategy", text: "Turn scattered AI ideas into a clear 30-day roadmap with priorities, tools, and outcomes." },
  { icon: Workflow, number: "02", title: "Workflow automation", text: "Remove repetitive work from research, reporting, operations, and customer follow-up." },
  { icon: Bot, number: "03", title: "Custom AI copilots", text: "Design grounded assistants that know your context, voice, documents, and process." },
  { icon: FileText, number: "04", title: "Content systems", text: "Build a reliable engine for briefs, posts, proposals, newsletters, and thought leadership." },
  { icon: Code2, number: "05", title: "No-code implementation", text: "Connect the tools you already use with practical systems your team can actually maintain." },
  { icon: Users, number: "06", title: "Team enablement", text: "Give your people hands-on training, prompt libraries, and safe ways to adopt AI." },
  { icon: PenLine, number: "07", title: "AI for students", text: "Study smarter with research workflows, revision systems, and career-ready project support." },
  { icon: Rocket, number: "08", title: "Launch acceleration", text: "Go from idea to testable offer with sharper research, positioning, and execution." },
  { icon: MessageSquareText, number: "09", title: "Professional productivity", text: "Create a personal operating system for meetings, decisions, communication, and focus." },
  { icon: BriefcaseBusiness, number: "10", title: "One-person business AI", text: "Operate like a small team with better lead handling, delivery, and business visibility." },
];

const audiences = [
  { icon: GraduationCap, title: "Students", label: "Learn with leverage", text: "Build a better study system, make portfolio projects, and get career-ready without outsourcing your thinking." },
  { icon: MousePointer2, title: "Professionals", label: "Do your best work", text: "Move from busywork to high-value work with repeatable AI workflows designed around your day." },
  { icon: Rocket, title: "Founders & solo builders", label: "Build without the bloat", text: "Turn one-person energy into a focused operating system for growth, delivery, and momentum." },
];

const testimonials = [
  { quote: "Shipxankit helped me see where AI belongs in my business — and where it absolutely does not. That clarity saved me weeks.", name: "Riya Mehta", role: "Independent consultant" },
  { quote: "I stopped collecting tools and started shipping. My new workflow gives me a full afternoon back every week.", name: "Arjun Nair", role: "Product professional" },
  { quote: "The student system made research feel manageable. I now have a process I can use for every project, not just one assignment.", name: "Ananya S.", role: "Graduate student" },
];

const faqs = [
  ["What does an AI consulting engagement include?", "We start with your goals and current workflow, then define the highest-leverage opportunities. Depending on the scope, that can include strategy, tool selection, workflow design, implementation, training, and follow-up support."],
  ["Is this for people who are not technical?", "Yes. Shipxankit focuses on useful outcomes, not jargon. We can work with no-code tools and explain every system in plain language so you can own it after the engagement."],
  ["Can you help a one-person business?", "Absolutely. Solo operators are often able to see the fastest gains because decisions are close to the work. We build a lightweight system around your actual offers, clients, and capacity."],
  ["How do payments work in India?", "Strategy and implementation packages can be quoted in INR. Your checkout link can be connected to Razorpay once the merchant link is available; support and digital resources are also available through Payhip."],
  ["How do we get started?", "Book a strategy call or send a message with what you are trying to improve. We will reply with a focused next step rather than a generic sales pitch."],
];

function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Marquee />
      <Services />
      <Audiences />
      <Process />
      <Proof />
      <Faqs />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-ink text-ink-foreground sm:min-h-[850px]">
      <img src={heroImage} alt="AI consultant working at a laptop in a modern studio" className="absolute inset-0 size-full object-cover object-[62%_center] opacity-80" />
      <div className="absolute inset-0 bg-ink/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <SiteNav />
      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-end px-4 pb-16 pt-32 sm:min-h-[850px] sm:px-6 sm:pb-24 lg:px-10">
        <div className="max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
            <Sparkles className="size-4" /> AI, made useful
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-3xl font-display text-6xl leading-[0.92] tracking-tight sm:text-8xl">
            Build smarter.<br />Ship faster.<br /><span className="text-saffron">Stay human.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
            Shipxankit is practical AI consulting for students, professionals, founders, and teams who want real implementation — not another list of tools.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-saffron text-saffron-foreground hover:bg-saffron/90">
              <Link to="/booking">Book a strategy call <ArrowUpRight className="size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-ink-foreground/30 bg-ink/20 text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground">
              <a href="#services">Explore AI services <ArrowRight className="size-4" /></a>
            </Button>
          </motion.div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs text-ink-foreground/60">
            <span className="flex items-center gap-2"><Check className="size-4 text-saffron" /> Clear next steps</span>
            <span className="flex items-center gap-2"><Check className="size-4 text-saffron" /> India-ready</span>
            <span className="flex items-center gap-2"><Check className="size-4 text-saffron" /> Human-led</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-4 hidden max-w-xs rounded-2xl border border-ink-foreground/20 bg-ink/35 p-4 text-sm text-ink-foreground/80 backdrop-blur-md lg:block">
        <div className="mb-3 flex items-center justify-between text-xs text-ink-foreground/55"><span>Shipxankit note</span><CirclePlay className="size-4 text-saffron" /></div>
        “AI should give you more room for the work only you can do.”
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="overflow-hidden border-b border-border bg-saffron py-4 text-saffron-foreground">
      <div className="flex min-w-max animate-marquee gap-10 text-sm font-medium">
        {["AI strategy", "Automation", "Training", "Copilots", "Content systems", "Student workflows", "Solo business AI", "AI strategy", "Automation", "Training"].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">{item}<span className="text-lg">✳</span></span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="eyebrow">What we do</p>
          <h2 className="mt-5 max-w-sm font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl">Less noise. More useful AI.</h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">From the first question to the working system, we help you make AI part of the way you work.</p>
          <Button asChild variant="outline" className="mt-8 rounded-full">
            <Link to="/contact">Talk about your use case <ArrowUpRight className="size-4" /></Link>
          </Button>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article key={service.number} whileHover={{ backgroundColor: "var(--card)" }} className="group bg-background p-6 transition-colors sm:p-7">
                <div className="mb-10 flex items-start justify-between"><Icon className="size-6 text-primary" /><span className="font-mono text-xs text-muted-foreground">{service.number}</span></div>
                <h3 className="font-display text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                <ArrowUpRight className="mt-7 size-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section id="audiences" className="bg-secondary px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl"><p className="eyebrow">Who we help</p><h2 className="mt-5 font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl">Your context matters. Your AI should too.</h2></div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return <motion.article key={audience.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -6 }} className="border-t-2 border-primary bg-background p-6 sm:p-8">
              <Icon className="size-7 text-primary" /><p className="mt-12 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{audience.label}</p><h3 className="mt-3 font-display text-3xl">{audience.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{audience.text}</p>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [["01", "Find the leverage", "We understand the goal, the bottleneck, and the work that should change."], ["02", "Design the system", "You get a simple workflow with the right tools, guardrails, and handoffs."], ["03", "Make it stick", "We implement, teach, refine, and leave you with a system you can run." ]];
  return <section id="process" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10"><div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20"><div><p className="eyebrow">How to start</p><h2 className="mt-5 font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl">A calm way to bring AI into the work.</h2><p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">No overbuilt transformation theatre. Just a clear path from “we should use AI” to “this is working.”</p><Button asChild className="mt-8 rounded-full bg-ink text-ink-foreground hover:bg-primary"><Link to="/booking">Start with a call <ArrowUpRight className="size-4" /></Link></Button></div><div className="space-y-0 border-t border-border">{steps.map(([number, title, text]) => <div key={number} className="grid gap-4 border-b border-border py-7 sm:grid-cols-[70px_1fr_1fr] sm:gap-8"><span className="font-mono text-sm text-primary">{number}</span><h3 className="font-display text-3xl">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div></div></section>;
}

function Proof() {
  const [active, setActive] = useState(0);
  return <section className="bg-ink px-4 py-20 text-ink-foreground sm:px-6 sm:py-28 lg:px-10"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20"><div className="relative overflow-hidden"><img src={teamImage} alt="Team collaborating around a table" loading="lazy" className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]" /><div className="absolute inset-0 bg-ink/25" /><div className="absolute bottom-5 left-5 right-5 flex items-end justify-between"><div><p className="text-xs uppercase tracking-[0.16em] text-ink-foreground/65">Proof over hype</p><p className="mt-2 font-display text-2xl">Practical beats impressive.</p></div><span className="flex size-12 items-center justify-center rounded-full bg-saffron text-saffron-foreground"><Star className="size-5 fill-current" /></span></div></div><div><p className="eyebrow text-saffron">Client notes</p><div className="mt-7 min-h-[220px]"><motion.blockquote key={active} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} className="font-display text-4xl leading-[1.05] sm:text-5xl">“{testimonials[active].quote}”</motion.blockquote><p className="mt-7 text-sm text-ink-foreground/60"><span className="text-ink-foreground">{testimonials[active].name}</span> · {testimonials[active].role}</p></div><div className="mt-10 flex gap-2">{testimonials.map((testimonial, index) => <Button key={testimonial.name} type="button" variant="ghost" size="icon" onClick={() => setActive(index)} aria-label={`Show review from ${testimonial.name}`} className={`rounded-full border text-ink-foreground hover:bg-ink-foreground/10 ${active === index ? "border-saffron bg-saffron text-saffron-foreground hover:bg-saffron" : "border-ink-foreground/20"}`}>{index + 1}</Button>)}</div></div></div></section>;
}

function Faqs() {
  const [open, setOpen] = useState(0);
  return <section id="faqs" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="eyebrow">Good questions</p><h2 className="mt-5 font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl">Before we build anything.</h2><p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">A few answers to the questions people usually bring to the first conversation.</p><Button asChild variant="outline" className="mt-8 rounded-full"><Link to="/contact">Ask us directly <ArrowUpRight className="size-4" /></Link></Button></div><div className="border-t border-border">{faqs.map(([question, answer], index) => <div key={question} className="border-b border-border"><button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left font-medium"><span>{question}</span>{open === index ? <X className="size-4 shrink-0 text-primary" /> : <ChevronDown className="size-4 shrink-0 text-muted-foreground" />}</button>{open === index && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground">{answer}</motion.p>}</div>)}</div></div></section>;
}

function FinalCta() {
  return <section className="mx-2 mb-2 overflow-hidden rounded-3xl bg-primary px-5 py-16 text-primary-foreground sm:mx-3 sm:px-10 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/65">Ready when you are</p><h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">Your next advantage might be a better system.</h2></div><div><p className="text-sm leading-relaxed text-primary-foreground/75">Bring us the messy process, the half-formed idea, or the question you cannot stop thinking about.</p><Button asChild size="lg" className="mt-7 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"><Link to="/contact">Let’s talk <ArrowUpRight className="size-4" /></Link></Button></div></div></section>;
}