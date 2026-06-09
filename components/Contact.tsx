"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kulashekar5420@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const LINKS = [
    {
      icon: Github,
      label: "GitHub",
      handle: "kulashekar54",
      href: "https://github.com/kulashekar54",
      color: "#e2e8f0",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      handle: "kulashekar5420",
      href: "https://www.linkedin.com/in/kulashekar5420",
      color: "#0ea5e9",
    },
  ];

  return (
    <section id="contact" className="section-padding relative z-10">
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text-white mb-4">Contact</h2>
          <p className="text-muted max-w-xl mx-auto">
            Open to new opportunities, collaborations, or just a conversation about mobile development.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border border-border"
          >
            {/* Email CTA */}
            <div className="text-center mb-8">
              <p className="text-slate-400 mb-4">Reach me directly at</p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="mailto:kulashekar5420@gmail.com"
                  className="text-white font-bold text-xl md:text-2xl hover:text-accent transition-colors"
                >
                  kulashekar5420@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg glass border border-white/10 text-slate-400 hover:text-white transition-all"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={15} className="text-green-400" /> : <Copy size={15} />}
                </button>
              </div>

              <a
                href="mailto:kulashekar5420@gmail.com"
                className="inline-flex items-center gap-2 mt-5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-2 text-white font-semibold hover:opacity-90 transition-all glow-sm"
              >
                <Send size={16} /> Send Email
              </a>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-center text-muted text-sm mb-4">Or connect with me on</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {LINKS.map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl glass border border-border hover:border-accent/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{label}</p>
                      <p className="text-slate-500 text-xs">@{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-sm">
              <MapPin size={13} />
              Chennai, Tamil Nadu, India
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
