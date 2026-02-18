import { projects } from "../data/portfolioData";

function GithubIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="section-shell">
        <h2 className="section-title">Projects</h2>
        <p className="section-copy">
          Case-study snapshots focused on delivery quality, technical depth, and production-minded
          engineering.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="h-52 w-full border-b border-white/10 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="rounded-full border border-brand-300/20 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400"
                  >
                    <GithubIcon size={16} />
                    View GitHub
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Repository Link
                    <ExternalLinkIcon size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
