"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Junior Programmer Analyst",
    company: "Thapovan Info Systems Inc.",
    period: "Feb 2024 – Present",
    type: "Full-time",
    current: true,
    achievements: [
      "Migrated core modules of a 2000+ user production app from Xamarin.Forms to .NET MAUI",
      "Upgraded applications to .NET 9 with performance improvements",
      "Replaced legacy renderers with MAUI Handlers for better maintainability",
      "Resolved critical Android & iOS crash loops in production",
      "Improved application stability and long-term code maintainability",
    ],
    tech: [".NET MAUI", ".NET 9", "C#", "MVVM", "Handlers"],
  },
  {
    role: "Developer Intern",
    company: "Thapovan Info Systems Inc.",
    period: "Oct 2023 – Feb 2024",
    type: "Internship",
    current: false,
    achievements: [
      "Built cross-platform mobile applications using Xamarin.Forms",
      "Implemented CRUD operations integrated with REST APIs",
      "Followed MVVM and Clean Architecture principles",
      "Collaborated with senior developers on production features",
    ],
    tech: ["Xamarin.Forms", "C#", "REST APIs", "MVVM"],
  },
];

function TimelineItem({ exp, index }: { exp: (typeof EXPERIENCES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center z-10 ${
            exp.current
              ? "bg-gradient-to-br from-accent to-accent-2 glow-sm"
              : "bg-subtle border border-border"
          }`}
        >
          <Briefcase size={16} className="text-white" />
        </div>
        {index < EXPERIENCES.length - 1 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-accent/50 to-transparent mt-2 min-h-[60px]" />
        )}
      </div>

      {/* Card */}
      <div className="glass rounded-2xl p-6 border border-border hover:border-accent/30 transition-all group mb-8">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white font-bold text-lg">{exp.role}</h3>
              {exp.current && (
                <span className="px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 text-xs font-medium border border-green-500/20">
                  Current
                </span>
              )}
            </div>
            <p className="text-accent font-semibold">{exp.company}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1.5 text-muted text-sm">
              <Calendar size={13} />
              {exp.period}
            </div>
            <span className="text-xs text-slate-500 mt-0.5 block">{exp.type}</span>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {exp.achievements.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
              <ChevronRight size={14} className="text-accent mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg bg-accent/10 text-accent text-xs font-medium border border-accent/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text-white mb-4">Experience</h2>
          <p className="text-muted max-w-xl mx-auto">
            Professional experience building and scaling enterprise mobile applications.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {EXPERIENCES.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
