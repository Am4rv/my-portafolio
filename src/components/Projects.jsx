import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Mi Portafolio Web",
      description:
        "Un sitio web personal creado con React y Tailwind CSS para mostrar mis proyectos y habilidades. desplegado en Vercel.",
      link: "https://tusitio.com",
      image: "/images/portafolio.png",
      tags: ["React", "Tailwind", "JavaScript", "Vite"],
    },
    {
      title: "Plataforma GeoEspacial",
      description:
        "Desarrollo de app web para la visualización y análisis de datos geoespaciales que ayuda a la planificación territorial.",
      link: "https://github.com/Gokarson1/TT-Geoespacial",
      image: "/images/tt-geoespacial.png",
      tags: ["Python","JavaScript" ,"Streamlit", "QGIS"],
    },
    {
      title: "Pokedex",
      description:
        "Aplicacion web que permite buscar y revisar a habilidades de todos los pokemons, La cual se realizo utilizando la PokeAPI.",
      link: "https://demopokedex1.netlify.app/",
      image: "/images/pokedex.png",
      tags: ["React", "Typescript", "PokeAPI", "Netlify"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const { title, description, link, image, tags } = projects[currentIndex];

  return (
    <section id="projects" className="py-16 px-4 ">
      <h2 className="text-3xl font-bold mb-8 text-indigo-400 text-center">Proyectos</h2>

      <div className="relative w-full max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#1a1a2e] to-[#15162c] rounded-3xl p-6 shadow-lg"
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-64 sm:h-80 object-contain rounded-xl bg-[#1e1e36] p-4 "
              />
            )}

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-indigo-300">{title}</h3>
              <p className="text-gray-300 mt-2">{description}</p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-sm text-indigo-400 hover:underline"
                >
                  Ver proyecto →
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Flechas */}
        <button
          onClick={prevProject}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1a1a2e] hover:bg-indigo-700 text-white p-2 rounded-full shadow-md"
        >
          ◀
        </button>
        <button
          onClick={nextProject}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1a1a2e] hover:bg-indigo-700 text-white p-2 rounded-full shadow-md"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`text-xl ${
                i === currentIndex ? "text-indigo-400" : "text-gray-500"
              }`}
            >
              {i === currentIndex ? "●" : "○"}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
