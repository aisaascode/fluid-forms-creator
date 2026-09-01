import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteNav, PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — Shipxankit" },
    { name: "description", content: "Read how Shipxankit handles information shared through its consulting and support services." },
    { property: "og:title", content: "Privacy Policy — Shipxankit" },
    { property: "og:description", content: "How Shipxankit handles information shared through its services." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <main><div className="relative bg-ink"><SiteNav /><PageIntro eyebrow="Legal" title="Privacy, in plain language." description="This policy explains the information Shipxankit may receive when you contact us, book a call, or use our resources." /></div><LegalBody sections={[["Information you share", "When you contact Shipxankit or request a strategy call, we may receive your name, email address, business context, and any information you choose to include in your message. Please do not share passwords, confidential client records, or sensitive personal information."], ["How we use it", "We use the information you provide to respond to your request, prepare for a conversation, deliver an agreed service, and improve the clarity of our resources. We do not sell your personal information."], ["Third-party services", "Payments, scheduling, email, analytics, or digital resources may be provided through third-party services. Those services process information under their own policies. We link to Payhip for support and resources; review its policies before completing a purchase."], ["Retention and choices", "We keep information only for as long as it is reasonably needed for the purpose it was collected, legal records, or follow-up. You can contact us to ask what information we hold, request a correction, or ask us to delete it where applicable."], ["Contact", "Questions about this policy can be sent through the Contact page. This page is a general information notice and should be reviewed with a qualified legal professional for your specific business requirements."]] /></main>;
}

function LegalBody({ sections }: { sections: [string, string][] }) {
  return <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">{sections.map(([title, text]) => <article key={title} className="border-t border-border py-7"><h2 className="font-display text-3xl">{title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</section>;
}