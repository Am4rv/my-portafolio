import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Íconos de menú

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  const links = [
    { label: "Sobre mí", href: "#about" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Tecnologias", href: "#skills" },
    { label: "Contacto", href: "#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
            break;
          }
        }
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur text-white shadow-xl shadow-black/30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold animate-fadeInScale">Amaru</h1>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex space-x-6">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                activeSection === href
                  ? "text-indigo-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-2xl text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a]/80 backdrop-blur-sm px-6 pb-6 pt-2 space-y-4 shadow-md animate-fadeInDown">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block text-base font-medium transition-all ${
                activeSection === href
                  ? "text-indigo-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
