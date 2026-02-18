import { skills } from "../data/portfolioData";

function SkillBlock({ title, items }) {
  return (
    <article className="glass-card p-6 sm:p-7">
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="section-shell">
        <h2 className="section-title">Skills</h2>
        <p className="section-copy">
          Core capabilities across AI engineering, analytical tooling, and execution-focused
          collaboration.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <SkillBlock title="Technical Skills" items={skills.technical} />
          <SkillBlock title="Tools & Platforms" items={skills.tools} />
          <SkillBlock title="Soft Skills" items={skills.soft} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
