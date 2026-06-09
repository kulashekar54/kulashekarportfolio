"use client";
import { motion } from "framer-motion";
import { BookOpen, Award, ExternalLink, FileText } from "lucide-react";

export default function Research() {
  return (
    <section id="research" className="section-padding relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Academic Contribution
          </p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text-white mb-4">Research</h2>
          <p className="text-muted max-w-xl mx-auto">
            Published research contributing to digital transformation in education.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative glass rounded-2xl p-8 border border-accent/20 overflow-hidden group hover:border-accent/40 transition-all">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-2/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Publication badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold">
                  <Award size={12} />
                  Research Publication
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Published
                </div>
              </div>

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center flex-shrink-0 glow-sm">
                  <BookOpen size={24} className="text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-black text-xl md:text-2xl mb-2 leading-tight">
                    ISHMS – Institute Student Hostel Management System
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-4">
                    Kulashekar S &nbsp;·&nbsp; Published Research Work
                  </p>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Published research focused on digitizing hostel management and administration
                    systems for educational institutions. The work explores how mobile technology
                    can streamline communication between students and administration, automate
                    routine hostel operations, and improve overall management efficiency using
                    modern software architectures.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "Mobile Application",
                      "Digital Transformation",
                      "Hostel Management",
                      "Android",
                      "Firebase",
                      "Java",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {[
                      { icon: FileText, label: "Type", value: "Research Paper" },
                      { icon: BookOpen, label: "Domain", value: "Mobile Computing" },
                      { icon: Award, label: "Status", value: "Published" },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                          <Icon size={13} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-slate-500 text-xs">{label}</p>
                          <p className="text-slate-300 text-xs font-semibold">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-2 text-white text-sm font-semibold hover:opacity-90 transition-all glow-sm">
                    <ExternalLink size={14} /> View Publication
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
