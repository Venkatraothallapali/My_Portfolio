import { ArrowRight, Download, Mail } from "./icons";
import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 bg-mesh-pattern py-20 sm:py-28"
    >
      <div className="section-shell relative">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center rounded-full border border-brand-300/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
            {personalInfo.location}
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-brand-200 sm:text-2xl">
            {personalInfo.title}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
            {personalInfo.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={personalInfo.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Download Resume
              <Download size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
