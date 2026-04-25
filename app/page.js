"use client";

import React from "react";
import { motion } from "framer-motion";

const EMAIL = "robert.videoedits@gmail.com";

const mailtoDemo = `mailto:${EMAIL}?subject=${encodeURIComponent("Free demo edit")}&body=${encodeURIComponent(
  "Hey Robert, I’m interested in a free demo edit."
)}`;

function Icon({ type = "play", size = 22, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
  };

  const icons = {
    play: (
      <svg {...common}>
        <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
      </svg>
    ),
    scissors: (
      <svg {...common}>
        <path d="M4.5 7.5a2.5 2.5 0 1 0 0 .01M4.5 16.5a2.5 2.5 0 1 0 0 .01M7 8.5l12 7M7 15.5l12-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    trend: (
      <svg {...common}>
        <path d="M4 17l6-6 4 4 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12.5l2.5 2.5L16.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" fill="currentColor" />
      </svg>
    ),
  };

  return icons[type] || icons.play;
}

function Button({ children, href, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-neutral-200"
      : "border border-white/20 bg-white/5 text-white hover:bg-white/10";

  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-medium transition ${styles}`}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border bg-white/5 border-white/10 shadow-xl ${className}`}>{children}</div>;
}

const improvementCards = [
  { icon: "scissors", title: "Sharper pacing", text: "I remove empty seconds, tighten delivery, and structure cuts so the video feels easier to keep watching." },
  { icon: "trend", title: "Retention psychology", text: "I use pattern changes, visual resets, emphasis moments, and curiosity loops to reduce viewer drop-off." },
  { icon: "play", title: "Better viewer flow", text: "The edit is built so every section naturally leads into the next instead of feeling flat or repetitive." },
];

const demoBenefits = [
  "Free sample before any paid work",
  "Long-form YouTube editing",
  "Shorts cut from long videos",
  "Thumbnail direction and A/B ideas",
  "Free revisions until the video feels right",
];

const workflowCards = [
  { icon: "clock", title: "Fast turnaround", text: "Reliable delivery for consistent posting schedules." },
  { icon: "check", title: "Long-term friendly", text: "Built for creators who want a consistent editing partner, not one random edit." },
  { icon: "mail", title: "Simple workflow", text: "Communication through email or WhatsApp, payment through PayPal." },
];

export default function Page() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-32 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <header className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="w-9 h-9 rounded-2xl bg-white text-black flex items-center justify-center">
            <Icon type="play" size={18} />
          </div>
          <span>Robert Edits</span>
        </div>
        <a href={`mailto:${EMAIL}`} className="hidden sm:inline-flex text-sm text-neutral-300 hover:text-white transition">{EMAIL}</a>
      </header>

      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-neutral-200 mb-6">
              <Icon type="spark" size={16} />
              Video editing built for retention, not just aesthetics
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-6">Keep viewers watching longer.</h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl mb-8">
              I help YouTubers turn raw footage into sharper, more engaging videos using pacing, retention psychology, clean visuals, and thumbnail direction that makes people actually click and stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={mailtoDemo}>Send me a video — I’ll show what’s killing retention <Icon type="arrow" size={18} /></Button>
              <Button href="#portfolio" variant="secondary">See portfolio</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
              <div className="aspect-video rounded-[1.5rem] bg-neutral-900 border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-900 to-black" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                    <Icon type="play" size={34} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-white rounded-full" />
                  </div>
                  <div className="flex justify-between mt-3 text-xs text-neutral-300">
                    <span>Before: slow intro</span>
                    <span>After: tighter pacing</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="rounded-2xl bg-white/10 border border-white/10 p-4"><p className="text-2xl font-bold">+Pacing</p><p className="text-xs text-neutral-400 mt-1">less dead time</p></div>
                <div className="rounded-2xl bg-white/10 border border-white/10 p-4"><p className="text-2xl font-bold">+Hooks</p><p className="text-xs text-neutral-400 mt-1">stronger openings</p></div>
                <div className="rounded-2xl bg-white/10 border border-white/10 p-4"><p className="text-2xl font-bold">+CTR</p><p className="text-xs text-neutral-400 mt-1">thumbnail ideas</p></div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="work" className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What I actually improve</h2>
            <p className="text-neutral-300 text-lg">Most edits look clean. The difference is whether the viewer feels pulled forward every few seconds.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {improvementCards.map((item) => (
              <Card key={item.title}>
                <div className="p-7">
                  <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center mb-6"><Icon type={item.icon} size={22} /></div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-neutral-300 leading-relaxed">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="portfolio" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-10">Selected Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video bg-neutral-900/80 rounded-2xl flex items-center justify-center border border-white/10">
                <span className="text-neutral-400 text-sm">Video {i}</span>
              </div>
            ))}
          </div>
          <p className="text-neutral-400 mt-6">(Replace these with your real videos or before/after demos)</p>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-10">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card><div className="p-7"><h3 className="text-xl font-semibold mb-3">Starter</h3><p className="text-3xl font-bold mb-4">$250</p><p className="text-neutral-400 mb-4">4 videos + thumbnails</p><Button href={mailtoDemo}>Start</Button></div></Card>
            <Card className="border-white"><div className="p-7"><h3 className="text-xl font-semibold mb-3">Most Popular</h3><p className="text-3xl font-bold mb-4">From $88</p><p className="text-neutral-400 mb-4">per ~12 min video</p><Button href={mailtoDemo}>Get started</Button></div></Card>
            <Card><div className="p-7"><h3 className="text-xl font-semibold mb-3">Custom</h3><p className="text-3xl font-bold mb-4">Flexible</p><p className="text-neutral-400 mb-4">long-term / bulk deals</p><Button href={mailtoDemo}>Contact me</Button></div></Card>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="rounded-[2rem] bg-white text-black p-8 md:p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">Start with a free demo edit.</h2>
              <p className="text-neutral-700 text-lg leading-relaxed">
                Send me a piece of raw footage or an already posted video. I’ll create a short demo so you can see the pacing, visual style, and retention improvements before committing to anything long term.
              </p>
            </div>
            <div className="space-y-4">
              {demoBenefits.map((item) => (
                <div key={item} className="flex items-center gap-3 text-neutral-800">
                  <Icon type="check" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-5">
            {workflowCards.map((item) => (
              <Card key={item.title}>
                <div className="p-7">
                  <Icon type={item.icon} size={26} className="mb-5" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-neutral-300">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Send me a video. I’ll show you what I’d change.</h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            Send me your footage or one of your recent videos and I’ll show you what I’d improve with a free demo edit.
          </p>
          <Button href={mailtoDemo}>Get free demo <Icon type="arrow" size={18} /></Button>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm text-neutral-400">
          <span>© 2026 Robert Edits</span>
          <span>PayPal: {EMAIL}</span>
        </div>
      </footer>
    </div>
  );
}
