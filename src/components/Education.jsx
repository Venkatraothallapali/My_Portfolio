import { GraduationCap } from "./icons";
import { education } from "../data/portfolioData";

function Education() {
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="section-shell">
        <h2 className="section-title">Education</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {education.map((item) => (
            <article key={item.degree} className="glass-card p-6">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-200">
                <GraduationCap size={14} />
                Academic Credential
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-white sm:text-xl">{item.degree}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300 break-words">{item.institute}</p>
              <p className="mt-4 text-sm font-semibold text-brand-100">{item.score}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
