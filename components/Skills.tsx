"use client";
import { motion } from "framer-motion";
import { Smartphone, Code2, Layers, Cloud, Palette } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-indigo-500 to-violet-500",
    glow: "rgba(99,102,241,0.3)",
    skills: [".NET MAUI", "Xamarin.Forms", "Android", "iOS", "XAML", "XML"],
  },
  {
    title: "Languages",
    icon: Code2,
    color: "from-violet-500 to-purple-500",
    glow: "rgba(139,92,246,0.3)",
    skills: ["C#", "Java"],
  },
  {
    title: "Architecture",
    icon: Layers,
    color: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.3)",
    skills: ["MVVM", "Clean Architecture", "OOP", "Data Structures & Algorithms"],
  },
  {
    title: "Backend & Cloud",
    icon: Cloud,
    color: "from-blue-500 to-indigo-500",
    glow: "rgba(59,130,246,0.3)",
    skills: ["REST APIs", "Azure", "Firebase", "SQLite"],
  },
  {
    title: "UI/UX & Tools",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.3)",
    skills: ["Figma", "Android Studio", "Visual Studio", "Git & GitHub"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative z-10">
      {/* BG glow */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text-white mb-4">Skills</h2>
          <p className="text-muted max-w-xl mx-auto">
            Technologies and tools I use to build world-class mobile experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-6 border border-border hover:border-accent/30 transition-all group cursor-default"
                style={{
                  ["--hover-glow" as string]: cat.glow,
                }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="text-white font-bold text-base mb-4">{cat.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            "Xamarin.Forms → .NET MAUI Migration",
            "MVVM Architecture",
            "Enterprise App Development",
            "Cross-Platform Specialist",
          ].map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-full glass border border-accent/20 text-accent text-sm font-medium"
            >
              ✦ {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
