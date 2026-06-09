"use client";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl font-black gradient-text">
      {count}
      {suffix}
    </div>
  );
}

const TECH_ICONS = [
  { label: ".NET", color: "#6366f1", pos: "top-8 left-4" },
  { label: "C#", color: "#8b5cf6", pos: "top-16 right-6" },
  { label: "iOS", color: "#06b6d4", pos: "bottom-24 left-2" },
  { label: "⚡", color: "#f59e0b", pos: "bottom-16 right-4" },
  { label: "🔥", color: "#ef4444", pos: "top-40 left-8" },
];

export default function Hero() {
  const scrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden animated-bg"
    >
      {/* Background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-accent-2/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom section-padding w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 text-accent text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-4 leading-tight"
            >
              <span className="gradient-text-white">Kulashekar</span>
              <br />
              <span className="gradient-text">S.</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-slate-300 mb-4"
            >
              Mobile Application Developer
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Building production-ready{" "}
              <span className="text-accent font-semibold">Android & iOS</span> applications
              using <span className="text-accent-2 font-semibold">.NET MAUI</span>. Specializing
              in enterprise migration, MVVM architecture, and scalable mobile solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-accent-2 text-white font-semibold hover:opacity-90 transition-all glow-sm"
              >
                View Projects <ExternalLink size={16} />
              </button>
              <a
                href="/KULASHEKAR.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-accent/30 text-white font-semibold hover:border-accent/60 transition-all"
              >
                <Download size={16} /> Resume
              </a>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-slate-300 font-semibold hover:border-white/20 hover:text-white transition-all"
              >
                <Mail size={16} /> Contact
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/kulashekar54"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass border border-white/10 text-slate-400 hover:text-white hover:border-accent/40 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kulashekar5420"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass border border-white/10 text-slate-400 hover:text-white hover:border-accent/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:kulashekar5420@gmail.com"
                className="p-2 rounded-lg glass border border-white/10 text-slate-400 hover:text-white hover:border-accent/40 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Phone mockup + floating icons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-10 lg:items-end"
          >
            {/* Phone mockup */}
            <div className="relative">
              {TECH_ICONS.map((icon, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${icon.pos} z-10 px-2.5 py-1 rounded-lg glass border border-white/10 text-xs font-bold`}
                  style={{ color: icon.color, borderColor: icon.color + "40" }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {icon.label}
                </motion.div>
              ))}

              <motion.div
                className="phone-mockup"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Phone screen content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 gap-3 mt-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white font-black text-2xl glow">
                    K
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-sm">Kulashekar S</p>
                    <p className="text-accent text-xs">.NET MAUI Dev</p>
                  </div>
                  {[".NET MAUI", "Xamarin.Forms", "MVVM", "C#"].map((t, i) => (
                    <motion.div
                      key={t}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-center text-xs text-slate-300"
                    >
                      {t}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {[
                { value: 2, suffix: "+", label: "Years Exp." },
                { value: 2000, suffix: "+", label: "Users Impacted" },
                { value: 2, suffix: "", label: "Apps Migrated" },
              ].map(({ value, suffix, label }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-4 text-center border border-accent/10 hover:border-accent/30 transition-all"
                >
                  <Counter target={value} suffix={suffix} />
                  <p className="text-muted text-xs mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-muted text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
