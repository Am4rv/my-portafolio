// Footer.jsx
import React from "react";

const tecnologias = [
  {
    name: "Vite",
    url: "https://vite.dev/guide/",
    icon: "/icons/vite.png", 
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    icon: "/icons/tailwind.png",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Derechos de autor */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Amaru Ríos. Todos los derechos reservados.
        </p>

        {/* Tecnologías */}
        
        <div className="flex space-x-10 justify-center">
            <span className="font-semibold mr-2 content-center">Tecnologías usadas:</span>
          {tecnologias.map(({ name, url, icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-white"
            >
              <img
                src={icon}
                alt={`${name} logo`}
                className="w-12 h-12 object-contain mb-2"
              />
              <span className="text-sm font-medium">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
