import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav, PageIntro } from "@/components/site-shell";
import contactImage from "@/assets/lake-meditation.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Shipxankit — AI Consulting" },
    { name: "description", content: "Contact Shipxankit for AI strategy, automation, training, and implementation support." },
    { property: "og:title", content: "Contact Shipxankit — AI Consulting" },
    { property: "og:description", content: "Bring your AI question, workflow, or business idea to Shipxankit." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return <main><div className="relative bg-ink"><SiteNav /><PageIntro eyebrow="Contact us" title="Bring the question. We’ll help find the next move." description="Whether you are starting from zero or already experimenting, tell us what is on your mind and we’ll point you in a useful direction." /></div><section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"><div><img src={contactImage} alt="Quiet workspace for thoughtful work" className="aspect-[4/3] w-full object-cover" /><div className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-1"><ContactDetail icon={Mail} title="Email" text="hello@shipxankit.com" /><ContactDetail icon={MapPin} title="Based in" text="India · working globally" /><ContactDetail icon={MessageCircle} title="Support" text="payhip.com/shipxankit" /></div></div><div className="border border-border bg-card p-6 sm:p-10">{sent ? <div><p className="eyebrow">Thank you</p><h2 className="mt-5 font-display text-5xl leading-none">Your note is on its way.</h2><p className="mt-5 text-sm leading-relaxed text-muted-foreground">We’ll get back to you with a thoughtful response. For product and resource support, visit Payhip.</p><a href="https://payhip.com/shipxankit" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">Open Payhip support <ArrowUpRight className="size-4" /></a></div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="grid gap-5"><div className="grid gap-5 sm:grid-cols-2"><label><span className="mb-2 block text-sm font-medium">Name</span><input required className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" /></label><label><span className="mb-2 block text-sm font-medium">Email</span><input required type="email" className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" /></label></div><label><span className="mb-2 block text-sm font-medium">I’m interested in</span><select className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"><option>AI strategy</option><option>Workflow automation</option><option>AI for students</option><option>AI for professionals</option><option>One-person business AI</option><option>Team training</option></select></label><label><span className="mb-2 block text-sm font-medium">Your message</span><textarea required rows={7} className="w-full resize-y border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="What are you trying to make easier, faster, or clearer?" /></label><Button type="submit" size="lg" className="w-fit rounded-full bg-ink text-ink-foreground hover:bg-primary">Send message <ArrowUpRight className="size-4" /></Button></form>}</div></section><SiteFooter /></main>;
}

function ContactDetail({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }) {
  return <div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary"><Icon className="size-4" /></span><div><p className="text-xs text-muted-foreground">{title}</p><p className="text-sm font-medium">{text}</p></div></div>;
}