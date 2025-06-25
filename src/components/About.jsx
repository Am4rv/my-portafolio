export default function About() {
  return (
    <section id="about" className="scroll-m-10 max-w-4xl mx-auto p-6 text-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-indigo-400 text-center">Sobre mi</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 ">
        <img
          src="images/yo.jpeg" // Pon aquí la ruta a tu foto
          alt="Foto de Amaru"
          className="w-54 h-54 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-2">
            Amaru Ríos Figueroa
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-400 mb-4 font-medium">
            Desarrollador Full-stack
          </h3>

          <p className="text-lg md:text-lg leading-relaxed max-w-2xl">
            Soy desarrollador web junior con experiencia en proyectos frontend y backend.
            Me apasiona crear soluciones tecnológicas que generen impacto real, desde aplicaciones web modernas hasta plataformas de gestión de datos.
            <br />
            Me considero una persona proactiva, con iniciativa, y siempre abierta a aprender. Disfruto colaborar en equipo, aportar ideas y trabajar con foco en la experiencia del usuario.
          </p>
          <a
            href="docs/cv-amarurios.pdf"
            download
            className=" inline-block mt-4 bg-indigo-600 text-white py-2 px-5 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Descargar CV
          </a>
        </div>
      </div>
        <div className="mt-12 bg-[#2a2a40] rounded-xl p-6 text-center shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-300">
            Estudios
            </h3>
            <p className="text-lg md:text-xl text-gray-300">
            Ingeniería en Informática en la Universidad Tecnologica metropolitana de Chile (UTEM). 2019 - 2024.
            </p>
        </div>
    </section>
  );
}
