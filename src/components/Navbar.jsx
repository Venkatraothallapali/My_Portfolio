import { Menu, X } from "./icons";
import { useState } from "react";
import { personalInfo } from "../data/portfolioData";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <nav className="section-shell flex h-16 items-center justify-between sm:h-20">
        <a href="#home" className="font-display text-xl font-bold text-white sm:text-2xl">
          {personalInfo.name}
        </a>

        <ul className="hidden items-center gap-5 md:flex lg:gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative inline-block text-sm font-bold text-slate-300 transition duration-200 hover:text-white md:hover:scale-110 lg:text-base after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="rounded-lg border border-white/20 p-2 text-slate-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <ul className="section-shell grid gap-2 py-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative block rounded-lg px-3 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/5 hover:text-white sm:text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
