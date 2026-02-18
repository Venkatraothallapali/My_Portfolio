import { ArrowRight, Download, Mail } from "./icons";
import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 bg-mesh-pattern py-14 sm:py-20 lg:py-28"
    >
      <div className="section-shell relative">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center rounded-full border border-brand-300/30 bg-brand-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-200 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
            {personalInfo.location}
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-brand-200 sm:mt-4 sm:text-2xl">
            {personalInfo.title}
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
            {personalInfo.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400 sm:w-auto"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={personalInfo.resumePath}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Download Resume
              <Download size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
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
