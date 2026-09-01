import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteNav, PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms of Service — Shipxankit" },
    { name: "description", content: "Read the terms that apply to Shipxankit consulting conversations, services, and digital resources." },
    { property: "og:title", content: "Terms of Service — Shipxankit" },
    { property: "og:description", content: "The terms for working with Shipxankit." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: TermsPage,
});

function TermsPage() {
  return <main><div className="relative bg-ink"><SiteNav /><PageIntro eyebrow="Legal" title="Clear expectations make better work." description="These terms describe the general basis for Shipxankit consulting, implementation, training, and digital resources." /></div><section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">{[["Scope of services", "Shipxankit provides consulting, strategy, training, implementation guidance, and digital resources as described in an agreed scope. Recommendations are based on the information available at the time and are not a guarantee of a particular business result."], ["Your responsibilities", "You are responsible for the accuracy of the information you share, your decisions about tools and workflows, and checking outputs before using them in important work. AI outputs should be reviewed by a human."], ["Fees and payments", "Fees, timing, deliverables, and payment terms will be confirmed before paid work begins. Prices may be quoted in INR for clients in India. Payment processing may be handled by a third-party provider such as Razorpay or Payhip when an applicable checkout link is used."], ["Intellectual property", "You keep ownership of materials you provide. Unless agreed otherwise, Shipxankit keeps ownership of its pre-existing methods, templates, and general know-how. Deliverables created specifically for you are transferred or licensed as stated in the project agreement."], ["Limits", "Shipxankit is not responsible for indirect losses, third-party platform changes, or decisions made from unreviewed AI output. Nothing on this site constitutes legal, financial, medical, or other regulated professional advice."], ["Changes and contact", "We may update these terms when the service changes. Questions can be sent through the Contact page. A specific signed agreement takes precedence over these general terms for that engagement."]].map(([title, text]) => <article key={title} className="border-t border-border py-7"><h2 className="font-display text-3xl">{title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</section><SiteFooter /></main>;
}