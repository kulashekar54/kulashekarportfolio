"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border py-8 px-4">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white font-black text-xs">
            K
          </div>
          <span className="text-slate-400 text-sm">Kulashekar S</span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-1.5 text-slate-500 text-sm"
        >
          Designed & Developed with{" "}
          <Heart size={13} className="text-red-400 fill-red-400" /> by Kulashekar S &nbsp;·&nbsp; {year}
        </motion.p>

        <div className="flex items-center gap-4 text-slate-600 text-xs">
          <span>Next.js 15</span>
          <span>·</span>
          <span>Tailwind CSS</span>
          <span>·</span>
          <span>Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
