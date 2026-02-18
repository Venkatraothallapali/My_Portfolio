import { Award } from "./icons";
import { certifications } from "../data/portfolioData";

function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-20">
      <div className="section-shell">
        <h2 className="section-title">Certifications</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <article key={cert.title} className="glass-card p-6">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-200">
                <Award size={14} />
                Certified
              </p>
              <h3 className="mt-3 font-display text-base font-semibold text-white sm:text-lg">{cert.title}</h3>
              <p className="mt-2 text-sm text-slate-300 break-words">{cert.issuer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
