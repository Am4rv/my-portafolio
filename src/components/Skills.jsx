import { useState } from "react";

export default function Skills() {
  const categories = {
    Lenguajes: [
      { name: "HTML", image: "/icons/html-5.png" },
      { name: "CSS", image: "/icons/css-3.png" },
      { name: "JavaScript", image: "/icons/javascript.png" },
      { name: "TypeScript", image: "/icons/typescript.png" },
      { name: "Python", image: "/icons/python.png" },
      { name: "C" , image: "/icons/c.png" },
      { name: "C++", image: "/icons/c-.png" },
      { name: "Dart", image: "/icons/dart.png" },
    ],
    Frameworks: [
      { name: "React", image: "/icons/react.png" },
      { name: "Next.js", image: "/icons/nextjs.png" },
      { name: "Tailwind CSS", image: "/icons/tailwind.png" },
      { name: "Bootstrap", image: "/icons/bootstrap.png" },
      { name: "Flutter", image: "/icons/flutter.png" },

    ],
    IDEs: [
      { name: "VS Code", image: "/icons/visualstudio.png" },
      { name: "Android studio", image: "/icons/androidstudio.png" },
      { name: "Xcode", image: "/icons/xcode.png" },
    ],
    OtrasHerramientas: [
      { name: "Git", image: "/icons/git.png" },
      { name: "Docker", image: "/icons/docker.png" },
      { name: "Postman", image: "/icons/postman.webp" },
      { name: "Figma", image: "/icons/figma.png" },
      { name: "AWS", image: "/icons/aws.png" },
      { name: "Goocle Cloud", image: "/icons/gcp.png" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("Lenguajes");

  return (
    <section
      id="skills"
      className="scroll-mt-20 prose prose-invert max-w-none flex justify-center"
    >
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-8 text-indigo-400 text-center">Tecnologías y herramientas</h2>
        <h3 className="text-xl md:text-2xl text-gray-400 mb-4 font-medium text-center">
          Tecnologías y herramientas que utilizo para crear aplicaciones
        </h3>

        <div className="flex gap-4 mb-6 flex-wrap justify-center ">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border transition ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-500 text-gray-300 hover:bg-indigo-500 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {categories[selectedCategory].map(({ name, image }) => (
            <div
              key={name}
              className="flex flex-col items-center w-20 shrink-0  text-center"
            >
              <img
                src={image}
                alt={`${name} icon`}
                className="w-12 h-12 object-contain mb-2"
              />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
