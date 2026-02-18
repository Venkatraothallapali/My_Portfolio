import { Github, Linkedin, Mail } from "./icons";
import { personalInfo } from "../data/portfolioData";

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-14">
      <div className="section-shell">
        <div className="glass-card flex flex-col items-start justify-between gap-8 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-2 break-all text-sm text-slate-300 sm:text-base">{personalInfo.email}</p>
            <p className="mt-1 break-words text-sm text-slate-300 sm:text-base">{personalInfo.phone}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-xl border border-white/20 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10"
              aria-label="Email Venkatrao Thallapalli"
            >
              <Mail size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10"
              aria-label="Visit Venkatrao Thallapalli LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10"
              aria-label="Visit Venkatrao Thallapalli GitHub profile"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Copyright {new Date().getFullYear()} Venkatrao Thallapalli. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
