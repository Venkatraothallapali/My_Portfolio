import { personalInfo, professionalSummary } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="section-shell">
        <h2 className="section-title">About</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <article className="glass-card p-6 sm:p-8">
            <p className="whitespace-pre-line text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              {professionalSummary.trim()}
            </p>
          </article>

          <aside className="glass-card p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-white">Current Role</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {personalInfo.title}
            </p>
            <a
              href={personalInfo.companyLinkedIn}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-brand-200 transition hover:text-brand-100"
            >
              View Industry Iceberg on LinkedIn
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
