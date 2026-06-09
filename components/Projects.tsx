"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Smartphone } from "lucide-react";

const PROJECTS = [
  {
    title: "Student Hostel Management App",
    subtitle: "GRTMOB",
    description:
      "Android application to digitize hostel operations and improve communication between students and administration.",
    features: [
      "Hostel Management System",
      "Student Communication Portal",
      "Daily Menu Notifications",
      "Firebase Cloud Messaging",
    ],
    tech: ["Java", "Firebase", "Android Studio", "MVVM"],
    gradient: "from-indigo-500 to-violet-600",
    accentColor: "#6366f1",
    github: "https://github.com/kulashekar54",
    platforms: ["Android"],
    screen: [
      { label: "Dashboard", color: "#6366f1" },
      { label: "Menu", color: "#8b5cf6" },
      { label: "Notify", color: "#06b6d4" },
    ],
  },
  {
    title: "CollegeGo",
    subtitle: "Cross-Platform App",
    description:
      "Cross-platform mobile application for managing student and staff records with full CRUD functionality.",
    features: [
      "Student & Staff Records Management",
      "CRUD Operations via REST API",
      "MVVM Architecture",
      "Cross-Platform (Android & iOS)",
    ],
    tech: ["Xamarin.Forms", "C#", "REST APIs", "MVVM"],
    gradient: "from-cyan-500 to-blue-600",
    accentColor: "#06b6d4",
    github: "https://github.com/kulashekar54",
    platforms: ["Android", "iOS"],
    screen: [
      { label: "Students", color: "#06b6d4" },
      { label: "Staff", color: "#3b82f6" },
      { label: "Records", color: "#6366f1" },
    ],
  },
];

function PhoneMockup({
  gradient,
  screen,
  title,
}: {
  gradient: string;
  screen: { label: string; color: string }[];
  title: string;
}) {
  return (
    <motion.div
      className="phone-mockup mx-auto"
      whileHover={{ rotateY: 5, rotateX: -5 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-10 px-4 gap-2">
        {/* Status bar */}
        <div className="w-full flex justify-between text-[8px] text-slate-500 px-1 mb-2">
          <span>9:41</span>
          <span>●●●</span>
        </div>
        {/* App header */}
        <div
          className={`w-full py-2 px-3 rounded-xl bg-gradient-to-r ${gradient} flex items-center gap-2`}
        >
          <Smartphone size={12} className="text-white" />
          <span className="text-white text-[10px] font-bold truncate">{title}</span>
        </div>
        {/* Fake UI elements */}
        {screen.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="w-full py-2 px-3 rounded-lg flex items-center gap-2"
            style={{ background: s.color + "20", border: `1px solid ${s.color}40` }}
          >
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: s.color }}
            />
            <div className="flex-1">
              <div className="h-1.5 rounded-full w-3/4 mb-1" style={{ background: s.color + "60" }} />
              <div className="h-1 rounded-full w-1/2" style={{ background: s.color + "30" }} />
            </div>
          </motion.div>
        ))}
        <div className="w-full mt-1 grid grid-cols-2 gap-1.5">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="h-10 rounded-lg bg-white/5 border border-white/10" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Production applications I&apos;ve designed and developed.
          </p>
        </motion.div>

        <div className="space-y-16">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Phone mockup */}
              <div className={`flex justify-center ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative">
                  <div
                    className="absolute inset-0 blur-3xl opacity-20 rounded-full scale-75"
                    style={{ background: `radial-gradient(circle, ${project.accentColor}, transparent)` }}
                  />
                  <PhoneMockup
                    gradient={project.gradient}
                    screen={project.screen}
                    title={project.title}
                  />
                </div>
              </div>

              {/* Info */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: project.accentColor + "20",
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}40`,
                    }}
                  >
                    {project.subtitle}
                  </span>
                  {project.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-400"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-5">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: project.accentColor }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{
                        background: project.accentColor + "15",
                        color: project.accentColor,
                        border: `1px solid ${project.accentColor}30`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-slate-300 text-sm font-medium hover:border-white/20 hover:text-white transition-all"
                  >
                    <Github size={15} /> GitHub
                  </a>
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-medium transition-all bg-gradient-to-r from-accent to-accent-2 hover:opacity-90 glow-sm">
                    <ExternalLink size={15} /> Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
