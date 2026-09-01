import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Clock, Mail, MessageSquareText, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav } from "@/components/site-shell";
import contactImage from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/booking")({
  head: () => ({ meta: [
    { title: "Book an AI Strategy Call — Shipxankit" },
    { name: "description", content: "Tell Shipxankit what you are trying to improve and book a focused AI consulting conversation." },
    { property: "og:title", content: "Book an AI Strategy Call — Shipxankit" },
    { property: "og:description", content: "A focused first conversation for practical AI strategy and implementation." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: BookingPage,
});

function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");

  return <main className="bg-background"><div className="relative bg-ink text-ink-foreground"><SiteNav /><div className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-10"><Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-ink-foreground/60 hover:text-ink-foreground"><ArrowLeft className="size-4" /> Back home</Link><div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><p className="eyebrow text-saffron">A useful first conversation</p><h1 className="mt-5 max-w-2xl font-display text-6xl leading-[0.94] tracking-tight sm:text-8xl">Let’s make AI work for you.</h1><p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/70">Share what you want to improve. We’ll use the call to find a focused, realistic next step.</p></div><div className="hidden overflow-hidden lg:block"><img src={contactImage} alt="Professional working with AI tools" className="aspect-[4/3] w-full object-cover" /></div></div></div></div><section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><div><p className="eyebrow">What happens next</p><ul className="mt-7 space-y-6 text-sm text-muted-foreground"><li className="flex gap-4"><Clock className="size-5 shrink-0 text-primary" /><span><strong className="text-foreground">30 focused minutes.</strong><br />No drawn-out pitch. We look at the work.</span></li><li className="flex gap-4"><MessageSquareText className="size-5 shrink-0 text-primary" /><span><strong className="text-foreground">A clear recommendation.</strong><br />You leave knowing what to do first.</span></li><li className="flex gap-4"><Check className="size-5 shrink-0 text-primary" /><span><strong className="text-foreground">India-friendly.</strong><br />Quotes and packages can be shared in INR.</span></li></ul><div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">Need support or digital resources? <a href="https://payhip.com/shipxankit" target="_blank" rel="noreferrer" className="font-medium text-primary underline-offset-4 hover:underline">Visit Payhip</a>.</div></div>{submitted ? <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="border border-border bg-card p-7 sm:p-10"><div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-6" /></div><h2 className="mt-7 font-display text-4xl">Message received.</h2><p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">Thanks, {name}. We’ll reach out at {email} with the next step. If this is urgent, you can also use the support link below.</p><a href="https://payhip.com/shipxankit" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary">Open support <ArrowUpRight className="size-4" /></a></motion.div> : <form onSubmit={(event) => { event.preventDefault(); if (name && email && goal) setSubmitted(true); }} className="border border-border bg-card p-6 sm:p-10"><p className="text-sm text-muted-foreground">Tell us enough to make the call useful.</p><div className="mt-8 grid gap-5 sm:grid-cols-2"><Field icon={User} label="Your name" value={name} onChange={setName} required /><Field icon={Mail} label="Work email" type="email" value={email} onChange={setEmail} required /><label className="sm:col-span-2"><span className="mb-2 block text-sm font-medium">What would you like to improve?</span><textarea required value={goal} onChange={(event) => setGoal(event.target.value)} rows={6} placeholder="For example: I want to automate lead follow-up, build a study workflow, or understand where AI fits in my team." className="w-full resize-y border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" /></label></div><Button type="submit" size="lg" className="mt-7 rounded-full bg-ink text-ink-foreground hover:bg-primary">Request a strategy call <ArrowUpRight className="size-4" /></Button><p className="mt-4 text-xs text-muted-foreground">We only use these details to respond to your request.</p></form>}</div></section><SiteFooter /></main>;
}

function Field({ icon: Icon, label, value, onChange, type = "text", required = false }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean }) {
  return <label><span className="mb-2 block text-sm font-medium">{label}</span><span className="flex items-center gap-3 border border-input bg-background px-4 py-3 focus-within:border-primary"><Icon className="size-4 shrink-0 text-muted-foreground" /><input required={required} type={type} value={value} onChange={(event) => onChange(event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder={label} /></span></label>;
}