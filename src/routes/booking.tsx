import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Leaf, Check, Calendar, Clock, User, Mail, Phone, Sparkles } from "lucide-react";
import heroUpload from "@/assets/hero-upload.png.asset.json";
import yoga1 from "@/assets/yoga-1.jpg";
import yoga2 from "@/assets/yoga-2.jpg";
import programCore from "@/assets/program-core.jpg";
import thumb3 from "@/assets/thumb-3.jpg";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Session — Meditate.ai" },
      { name: "description", content: "Reserve your AI-guided wellness session. Choose a class, pick a time, and start your journey." },
      { property: "og:title", content: "Book a Session — Meditate.ai" },
      { property: "og:description", content: "Reserve your AI-guided wellness session in seconds." },
    ],
  }),
  component: BookingPage,
});

const sessions = [
  { id: "morning-flow", img: yoga2, title: "Morning Flow", level: "Beginner", duration: "20 min", price: "$12" },
  { id: "sunrise-breath", img: yoga1, title: "Sunrise Breathwork", level: "All Levels", duration: "15 min", price: "$10" },
  { id: "window-light", img: thumb3, title: "Window Light Yoga", level: "Intermediate", duration: "30 min", price: "$18" },
  { id: "mountain-med", img: programCore, title: "Mountain Meditation", level: "All Levels", duration: "25 min", price: "$15" },
];

const dates = Array.from({ length: 7 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return {
    key: d.toISOString().slice(0, 10),
    weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
    day: d.getDate(),
    month: d.toLocaleDateString("en-US", { month: "short" }),
  };
});

const times = ["07:00", "08:30", "10:00", "12:00", "14:30", "17:00", "18:30", "20:00"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

function BookingPage() {
  const [session, setSession] = useState(sessions[0].id);
  const [date, setDate] = useState(dates[0].key);
  const [time, setTime] = useState(times[2]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedSession = sessions.find((s) => s.id === session)!;
  const selectedDate = dates.find((d) => d.key === date)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground">
            <div className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center">
              <Leaf className="w-4 h-4" />
            </div>
            <span className="font-medium tracking-tight">Meditate.ai</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link">
            Back to home
          </Link>
        </div>
      </motion.nav>

      {/* Hero banner */}
      <section className="relative overflow-hidden mx-2 sm:mx-3 md:mx-6 mt-3 rounded-[2rem] sm:rounded-[2.5rem]">
        <img src={heroUpload.url} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="relative z-10 px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 text-center text-white max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" /> AI-Matched Sessions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-[1.05] tracking-tight text-[clamp(2.25rem,7vw,4.5rem)]"
          >
            Book Your Moment of Stillness.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="mt-4 sm:mt-6 text-white/85 text-sm sm:text-base max-w-xl mx-auto"
          >
            Pick a class, choose your time, and we'll personalize the rest with AI.
          </motion.p>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.section
            key="form"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-20"
          >
            <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
              {/* Form column */}
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Sessions */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <h2 className="font-display text-2xl sm:text-3xl mb-1 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-ink text-white text-sm flex items-center justify-center">1</span>
                    Choose a session
                  </h2>
                  <p className="text-sm text-muted-foreground mb-5 ml-9">AI suggests Morning Flow based on your wellness profile.</p>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {sessions.map((s, i) => {
                      const active = session === s.id;
                      return (
                        <motion.button
                          type="button" key={s.id} onClick={() => setSession(s.id)}
                          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                          whileHover={{ y: -3 }}
                          className={`text-left relative rounded-2xl overflow-hidden border-2 transition-all ${
                            active ? "border-ink shadow-lg" : "border-transparent bg-card"
                          }`}
                        >
                          <div className="flex gap-3 p-3">
                            <img src={s.img} alt={s.title} loading="lazy" className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0" />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <h3 className="font-display text-lg sm:text-xl leading-tight">{s.title}</h3>
                                {active && (
                                  <span className="shrink-0 w-6 h-6 rounded-full bg-ink text-white flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5" />
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">{s.level} • {s.duration}</p>
                              <p className="text-sm font-medium mt-2">{s.price}</p>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Date */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <h2 className="font-display text-2xl sm:text-3xl mb-1 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-ink text-white text-sm flex items-center justify-center">2</span>
                    Pick a date
                  </h2>
                  <p className="text-sm text-muted-foreground mb-5 ml-9">Next 7 days.</p>
                  <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                    {dates.map((d) => {
                      const active = date === d.key;
                      return (
                        <motion.button
                          type="button" key={d.key} onClick={() => setDate(d.key)}
                          whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                          className={`shrink-0 min-w-[72px] sm:min-w-[88px] rounded-2xl px-3 py-3 sm:py-4 text-center transition-all ${
                            active ? "bg-ink text-white" : "bg-card text-foreground hover:bg-secondary"
                          }`}
                        >
                          <p className="text-[10px] sm:text-xs uppercase tracking-wider opacity-70">{d.weekday}</p>
                          <p className="font-display text-2xl sm:text-3xl leading-none my-1">{d.day}</p>
                          <p className="text-[10px] sm:text-xs opacity-70">{d.month}</p>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Time */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <h2 className="font-display text-2xl sm:text-3xl mb-1 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-ink text-white text-sm flex items-center justify-center">3</span>
                    Choose a time
                  </h2>
                  <p className="text-sm text-muted-foreground mb-5 ml-9">All times in your local timezone.</p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                    {times.map((t) => {
                      const active = time === t;
                      return (
                        <motion.button
                          type="button" key={t} onClick={() => setTime(t)}
                          whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                          className={`rounded-xl py-3 text-sm font-medium transition-all ${
                            active ? "bg-ink text-white" : "bg-card text-foreground hover:bg-secondary"
                          }`}
                        >
                          {t}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Details */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <h2 className="font-display text-2xl sm:text-3xl mb-1 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-ink text-white text-sm flex items-center justify-center">4</span>
                    Your details
                  </h2>
                  <p className="text-sm text-muted-foreground mb-5 ml-9">We'll send your AI session brief here.</p>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <Field icon={User} value={name} onChange={setName} placeholder="Full name" required />
                    <Field icon={Mail} type="email" value={email} onChange={setEmail} placeholder="Email" required />
                    <Field icon={Phone} value={phone} onChange={setPhone} placeholder="Phone (optional)" className="sm:col-span-2" />
                  </div>
                </motion.div>
              </form>

              {/* Summary column */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                className="lg:sticky lg:top-24 h-fit"
              >
                <div className="rounded-3xl overflow-hidden bg-card border">
                  <div className="relative aspect-[4/3]">
                    <img src={selectedSession.img} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="text-xs opacity-80">{selectedSession.level} • {selectedSession.duration}</p>
                      <h3 className="font-display text-2xl">{selectedSession.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 space-y-4">
                    <Row icon={Calendar} label="Date" value={`${selectedDate.weekday}, ${selectedDate.month} ${selectedDate.day}`} />
                    <Row icon={Clock} label="Time" value={time} />
                    <Row icon={Sparkles} label="AI Brief" value="Personalized on booking" />
                    <div className="border-t pt-4 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Total</span>
                      <span className="font-display text-2xl">{selectedSession.price}</span>
                    </div>
                    <motion.button
                      type="button" onClick={handleSubmit}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full bg-ink text-white rounded-full pl-5 pr-1 py-1 flex items-center justify-between text-sm font-medium"
                    >
                      Confirm booking
                      <span className="w-10 h-10 rounded-full bg-white text-ink flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.aside>
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="confirm"
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center"
          >
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}
              className="w-20 h-20 rounded-full bg-ink text-white mx-auto flex items-center justify-center mb-8"
            >
              <Check className="w-8 h-8" />
            </motion.div>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight mb-4">You're booked.</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              {selectedSession.title} on {selectedDate.weekday}, {selectedDate.month} {selectedDate.day} at {time}.
              We've sent a confirmation to {email}.
            </p>
            <Link to="/">
              <motion.button whileHover={{ scale: 1.04 }} className="bg-ink text-white rounded-full pl-5 pr-1 py-1 inline-flex items-center gap-2 text-sm font-medium">
                Back to home
                <span className="w-9 h-9 rounded-full bg-white text-ink flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </motion.button>
            </Link>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}

function Field({
  icon: Icon, value, onChange, placeholder, type = "text", required, className = "",
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string; onChange: (v: string) => void; placeholder: string;
  type?: string; required?: boolean; className?: string;
}) {
  return (
    <label className={`relative flex items-center gap-3 bg-card rounded-2xl px-4 py-3.5 border focus-within:border-ink transition-colors ${className}`}>
      <Icon className="w-4 h-4 text-muted-foreground shrink-0" />
      <input
        type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} required={required}
        className="flex-1 min-w-0 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
      />
    </label>
  );
}

function Row({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-2 text-muted-foreground">
        <Icon className="w-4 h-4" /> {label}
      </span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
