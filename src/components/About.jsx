export default function About() {
  return (
    <section id="about" className="scroll-m-10 max-w-4xl mx-auto p-6 text-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-indigo-400 text-center">Sobre mi</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 ">
        <img
          src="images/mi_foto.jpeg" // Pon aquí la ruta a tu foto
          alt="Foto de Amaru"
          className="w-48 h-48 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-2">
            Amaru
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-400 mb-4 font-medium">
            Desarrollador Front-End
          </h3>

          <p className="text-lg md:text-xl leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id similique possimus numquam non dicta obcaecati asperiores molestias harum quod, consequatur beatae veniam laboriosam. Quibusdam harum itaque, autem asperiores voluptatum dolorem!
          </p>
          <a
            href="docs/Amaru-cv.pdf"
            download
            className="inline-block mt-4 bg-indigo-600 text-white py-2 px-5 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
