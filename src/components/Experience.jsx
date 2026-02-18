import { BriefcaseBusiness } from "./icons";
import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="section-shell">
        <h2 className="section-title">Experience</h2>
        <div className="mt-8 space-y-6">
          {experience.map((item) => (
            <article key={item.company} className="glass-card p-6 sm:p-8">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{item.role}</h3>
                  <p className="mt-1 text-sm text-slate-300 sm:text-base">{item.company}</p>
                </div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                  <BriefcaseBusiness size={14} />
                  {item.duration}
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
