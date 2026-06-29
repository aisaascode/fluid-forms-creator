import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Sparkles, Music, Headphones, Leaf, Brain, Wind,
  ChevronLeft, ChevronRight, ArrowUpRight, Mic, Play, Star,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import yoga1 from "@/assets/yoga-1.jpg";
import yoga2 from "@/assets/yoga-2.jpg";
import lakeMeditation from "@/assets/lake-meditation.jpg";
import programCore from "@/assets/program-core.jpg";
import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import aiAvatar from "@/assets/ai-avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meditate.ai — AI Wellness Made Simple and Personal" },
      { name: "description", content: "Personalized wellness recommendations powered by AI to help you move, breathe, and find balance." },
      { property: "og:title", content: "Meditate.ai — AI Wellness Made Simple and Personal" },
      { property: "og:description", content: "AI-guided meditation, yoga and wellness programs tailored to you." },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-10 py-6"
    >
      <div className="flex items-center gap-2 text-white">
        <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
          <Leaf className="w-4 h-4" />
        </div>
        <span className="font-medium tracking-tight">Meditate.ai</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-white/90 text-sm">
        {["Classes", "Programs", "Community", "More"].map((l) => (
          <a key={l} href="#" className="story-link hover:text-white transition-colors">{l}</a>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 bg-white text-ink rounded-full pl-5 pr-1 py-1 text-sm font-medium"
      >
        Join now
        <span className="w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </motion.button>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const moments = [
    { icon: Wind, label: "Breathe" },
    { icon: Headphones, label: "Sound" },
    { icon: Leaf, label: "Meditation" },
    { icon: Brain, label: "Focus" },
    { icon: Music, label: "Music" },
  ];
  const [active, setActive] = useState(2);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden rounded-b-[2.5rem]">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img src={heroPortrait} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </motion.div>

      <Nav />

      <motion.div style={{ opacity }} className="relative z-10 min-h-screen flex flex-col">
        {/* Left side text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }}
          className="absolute left-6 md:left-10 top-1/3 max-w-xs text-white/90 text-sm leading-relaxed"
        >
          <p className="text-white">Personalized wellness</p>
          <p className="text-white">recommendations powered by AI</p>
          <p className="text-white/60">to help you move, breathe, and</p>
          <p className="text-white/40">find your inner balance.</p>
        </motion.div>

        {/* Right side testimonial */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-6 md:right-10 top-1/3 max-w-xs"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="flex -space-x-2">
              {[thumb1, thumb2, thumb3].map((t, i) => (
                <img key={i} src={t} alt="" className="w-7 h-7 rounded-full border-2 border-white/40 object-cover" />
              ))}
            </div>
            <span className="text-white text-sm font-medium">2.5k+ (4.8)</span>
            <Star className="w-3 h-3 fill-white text-white" />
          </div>
          <p className="text-white text-sm leading-snug">"His community helped me stay consistent with my wellness journey.</p>
          <p className="text-white/50 text-sm leading-snug">His community helped me</p>
          <p className="text-white/30 text-sm leading-snug">stay consistent with my wellness"</p>
        </motion.div>

        {/* Center headline */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.05] tracking-tight"
            >
              AI Wellness<br />Made Simple and<br />Personal.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mt-6 text-white text-sm"
            >
              <Sparkles className="w-4 h-4" />
              AI Wellness
            </motion.div>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="pb-10 px-6 md:px-10 flex items-end justify-between gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="glass rounded-full px-4 py-2.5 flex items-center gap-2 text-white text-sm"
          >
            <Music className="w-4 h-4" /> Music
          </motion.button>

          <div className="flex-1 flex flex-col items-center">
            <p className="text-white/70 text-xs mb-3">Just select your moment with AI</p>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-full glass-dark text-white flex items-center justify-center hover:bg-white/20 transition">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {moments.map((m, i) => {
                const Icon = m.icon;
                const isActive = i === active;
                return (
                  <motion.button
                    key={i} onClick={() => setActive(i)}
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    className={`relative rounded-full flex items-center justify-center transition-all ${
                      isActive ? "w-12 h-12 bg-white text-ink" : "w-10 h-10 glass-dark text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {isActive && <span className="absolute inset-0 rounded-full border border-white/40 animate-pulse-ring" />}
                  </motion.button>
                );
              })}
              <button className="w-9 h-9 rounded-full glass-dark text-white flex items-center justify-center hover:bg-white/20 transition">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <motion.p key={active} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-white mt-3 text-sm font-medium">
              {moments[active].label}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="glass-dark rounded-full pl-1 pr-4 py-1 flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400" />
            <span className="text-white text-sm">Ask anything</span>
            <Mic className="w-4 h-4 text-white/70" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Thrive() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            We combine mindful practices with AI-powered insights to support every stage of your wellness journey.
          </p>
          <img src={aiAvatar} alt="" loading="lazy" className="w-32 h-32 rounded-2xl object-cover mb-8" />
          <div className="space-y-5">
            <div>
              <div className="font-display text-4xl">10,000</div>
              <p className="text-xs text-muted-foreground">+ Members</p>
            </div>
            <div>
              <div className="font-display text-2xl">AI-Guided</div>
              <p className="text-xs text-muted-foreground">Classes</p>
            </div>
            <div>
              <div className="font-display text-4xl">95%</div>
              <p className="text-xs text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          <h2 className="font-display text-4xl md:text-6xl leading-tight tracking-tight">
            Your Intelligent Partner in Modern Wellbeing, Built to Help You Thrive.
          </h2>
          <div className="mt-10 relative rounded-3xl overflow-hidden group">
            <img src={lakeMeditation} alt="" loading="lazy" className="w-full aspect-[16/10] object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="font-display text-3xl mb-2">AI-Guided</h3>
              <p className="text-sm max-w-md text-white/85">Receive tailored recommendations and adaptive plans personalized just for you.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Classes() {
  const classes = [
    { img: yoga2, title: "Morning Flow", level: "Beginner", duration: "20 min" },
    { img: yoga1, title: "Sunrise Breathwork", level: "All Levels", duration: "15 min" },
    { img: thumb3, title: "Window Light Yoga", level: "Intermediate", duration: "30 min" },
    { img: programCore, title: "Mountain Meditation", level: "All Levels", duration: "25 min" },
  ];
  return (
    <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1fr] gap-10 items-end mb-12">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="font-display text-4xl md:text-6xl leading-tight tracking-tight"
        >
          Training for Every Level, Goal, and Lifestyle
        </motion.h2>
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          className="text-muted-foreground text-sm md:text-base"
        >
          Discover a curated library of wellness classes enhanced by AI to match your mood, intentions, and daily energy so you always know exactly where to begin.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {classes.map((c, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl overflow-hidden bg-card cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-white text-xs">{c.level}</div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <p className="text-xs text-white/70">{c.duration}</p>
              <h3 className="font-display text-2xl">{c.title}</h3>
            </div>
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
              <Play className="w-4 h-4 ml-0.5 fill-ink" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="flex items-center justify-between mt-10"
      >
        <p className="text-sm text-muted-foreground max-w-md">Our intelligent system analyzes your preferences, habits, and progress to recommend.</p>
        <motion.button whileHover={{ scale: 1.05 }} className="bg-ink text-white rounded-full pl-5 pr-1 py-1 flex items-center gap-2 text-sm">
          Browse All Classes
          <span className="w-9 h-9 rounded-full bg-white text-ink flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}

function Programs() {
  const programs = [
    { img: programCore, weeks: "6 weeks", level: "All levels", title: "Core Strength Smart Program", desc: "Build a stronger core with AI-guided workouts tailored to your level. Track improvements and stay motivated." },
    { img: yoga1, weeks: "4 weeks", level: "Beginner", title: "Mindful Mornings", desc: "Start every day with intention. Personalized breathwork and gentle flows to anchor your routine." },
  ];
  const challenges = [
    { days: "14 days", level: "Beginner", title: "14-Day Beginner Reset", desc: "Kickstart your wellness journey with guided daily exercises designed for beginners. Easy-to-follow." },
    { days: "30 days", level: "Intermediate", title: "30-Day Flexibility AI Challenge", desc: "Enhance your flexibility with AI-personalized routines. Track your progress and improve." },
  ];
  return (
    <section className="px-6 md:px-10 py-24 bg-card rounded-[2.5rem] mx-3 md:mx-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="grid md:grid-cols-[1fr_1fr] gap-10 mb-12 items-end"
        >
          <h2 className="font-display text-4xl md:text-6xl leading-tight tracking-tight">
            Discover Tailored Wellness Programs
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Curated library of wellness programs to match your mood, intentions, and goals — so you always know exactly where to start.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {programs.map((p, i) => (
            <motion.div
              key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="relative rounded-3xl overflow-hidden group"
            >
              <img src={p.img} alt={p.title} loading="lazy" className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-5 right-5 text-white text-xs glass rounded-full px-3 py-1">
                {p.weeks} • {p.level}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-3xl mb-2">{p.title}</h3>
                <p className="text-sm text-white/85 max-w-md">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {challenges.map((c, i) => (
            <motion.div
              key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              whileHover={{ y: -4 }}
              className="bg-background rounded-3xl p-6 border"
            >
              <div className="text-xs text-muted-foreground mb-4">{c.days} - {c.level}</div>
              <h3 className="font-display text-2xl mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="font-display text-4xl md:text-6xl text-center mb-12 tracking-tight"
      >
        Join Our Community
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-5">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative rounded-3xl overflow-hidden aspect-[16/11] group"
        >
          <img src={lakeMeditation} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="font-display text-3xl leading-snug">"His community helped me stay consistent with my wellness journey."</p>
            <p className="text-sm text-white/70 mt-4">Sarah M. | Yoga Enthusiast</p>
          </div>
          <div className="absolute bottom-6 right-6 glass rounded-2xl px-4 py-2 text-white">
            <div className="font-display text-2xl">10k+</div>
            <p className="text-xs">Athletes Trained</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          className="relative rounded-3xl overflow-hidden aspect-[16/11] group"
        >
          <img src={programCore} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute top-6 right-6 glass rounded-full px-4 py-2 text-white text-xs flex items-center gap-1">
            View More <ArrowUpRight className="w-3 h-3" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="font-display text-3xl">Find your tribe.</p>
            <p className="text-sm text-white/80 mt-2 max-w-sm">Connect with thousands on the same path. Share progress, gain insight, grow together.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground rounded-t-[2.5rem] mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="font-medium">Meditate.ai</span>
            </div>
            <p className="font-display text-3xl md:text-4xl leading-tight max-w-md">
              Start your AI-guided wellness journey today.
            </p>
            <motion.button whileHover={{ scale: 1.04 }} className="mt-8 bg-white text-ink rounded-full pl-5 pr-1 py-1 inline-flex items-center gap-2 text-sm font-medium">
              Get started
              <span className="w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.button>
          </div>
          {[
            { title: "Explore", links: ["Classes", "Programs", "Community", "AI Coach"] },
            { title: "Company", links: ["About", "Careers", "Press", "Blog"] },
            { title: "Support", links: ["FAQs", "Contact Us", "Help Center", "Testimonials"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium mb-4 text-white/60">{col.title}</p>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-white text-white/80 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Meditate.ai. All rights reserved.</p>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Thrive />
      <Classes />
      <Programs />
      <Community />
      <Footer />
    </main>
  );
}
