"use client";
import { motion } from "framer-motion";
import { Bug, Zap, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

const STORIES = [
  {
    icon: Bug,
    iconColor: "#ef4444",
    iconBg: "from-red-500/20 to-orange-500/20",
    badge: "Production Fix",
    badgeColor: "#ef4444",
    title: "Android & iOS Crash Investigation",
    problem:
      "A 2000+ user production application was experiencing critical crash loops on both Android and iOS after a routine release. Users were unable to launch the app, causing major operational disruption.",
    solution:
      "Performed deep lifecycle analysis across navigation stacks, identified improper page disposal during background-to-foreground transitions, and optimized the navigation lifecycle management using .NET MAUI's Shell navigation model.",
    impact: "Resolved crash loops, improved stability by eliminating lifecycle-related exceptions.",
    tags: [".NET MAUI", "Android", "iOS", "Lifecycle", "Navigation"],
    metrics: [
      { label: "Users Affected", value: "2000+" },
      { label: "Resolution Time", value: "48hrs" },
    ],
  },
  {
    icon: Zap,
    iconColor: "#f59e0b",
    iconBg: "from-amber-500/20 to-yellow-500/20",
    badge: "Migration",
    badgeColor: "#f59e0b",
    title: ".NET MAUI Migration",
    problem:
      "A large enterprise Xamarin.Forms application was becoming unmaintainable as Xamarin reached end-of-life. Custom renderers and legacy dependencies created significant technical debt and prevented .NET 9 upgrades.",
    solution:
      "Led systematic migration of core modules to .NET MAUI — replaced all custom renderers with MAUI Handlers, refactored platform-specific code, upgraded target frameworks to .NET 9, and validated behavior parity across Android and iOS.",
    impact: "Modern maintainable codebase, access to latest .NET 9 features, and eliminated renderer overhead.",
    tags: ["Xamarin.Forms", ".NET MAUI", ".NET 9", "Handlers", "Refactoring"],
    metrics: [
      { label: "Framework", value: ".NET 9" },
      { label: "Performance", value: "+40%" },
    ],
  },
];

export default function DebuggingStories() {
  return (
    <section id="debugging" className="section-padding relative z-10">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Engineering Challenges
          </p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text-white mb-4">
            Debugging Stories
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Real-world production problems I&apos;ve diagnosed and solved.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {STORIES.map((story, i) => {
            const Icon = story.icon;
            return (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-7 border border-border hover:border-accent/30 transition-all flex flex-col gap-5"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${story.iconBg} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon size={22} style={{ color: story.iconColor }} />
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold mt-1"
                    style={{
                      background: story.badgeColor + "20",
                      color: story.badgeColor,
                      border: `1px solid ${story.badgeColor}40`,
                    }}
                  >
                    {story.badge}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl">{story.title}</h3>

                {/* Problem */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-red-400 text-xs font-semibold uppercase tracking-wider">
                    <AlertTriangle size={12} /> Problem
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{story.problem}</p>
                </div>

                {/* Solution */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-wider">
                    <Zap size={12} /> Solution
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{story.solution}</p>
                </div>

                {/* Impact */}
                <div className="flex items-start gap-2 p-3 rounded-xl bg-green-500/5 border border-green-500/20">
                  <CheckCircle size={15} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-green-300 text-sm">{story.impact}</p>
                </div>

                {/* Metrics */}
                <div className="flex gap-3">
                  {story.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 text-center"
                    >
                      <div className="text-white font-bold text-lg">{m.value}</div>
                      <div className="text-slate-500 text-xs">{m.label}</div>
                    </div>
                  ))}
                  <div className="flex-1 flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10">
                    <TrendingUp size={20} className="text-green-400" />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
