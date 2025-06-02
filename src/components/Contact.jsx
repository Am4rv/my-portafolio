import { color } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const contacts = [
    {
      name: "LinkedIn",
      username: "Amaru Rios Figueroa",
      href: "https://www.linkedin.com/in/amaru-rios-figueroa-02a391319/",
      icon: <FaLinkedin size={32} />,
      color: "text-blue-500",
    },
    {
      name: "GitHub",
      username: "@Am4rv",
      href: "https://github.com/Am4rv",
      icon: <FaGithub size={32} />,
      color: "text-gray-300",
    },
    {
      name: "Instagram",
      username: "@amaruu_rf",
      href: "https://www.instagram.com/amaruu_rf/",
      icon: <FaInstagram size={32} />,
      color: "text-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 text-center bg-[#1a1a2e] text-white rounded-xl">
      <h2 className="text-3xl font-bold mb-8 text-indigo-400 text-center">Contacto</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {contacts.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2a2a40] hover:bg-[#3a3a55] transition-colors p-6 rounded-xl w-72 text-center"
          >
            <div className={`mb-2 ${item.color}`}>{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-400">{item.username}</p>
          </a>
        ))}
      </div>
      {/* Email Contact Section */
      <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-300">O también puedes contactarme por correo</h3>}
      <div className="flex flex-col items-center bg-[#2a2a40] px-6 py-4 rounded-xl w-fit mx-auto shadow-md transition hover:scale-105 duration-300">
        <MdEmail size={28} className="text-red-400 mb-1" />
        <p className="text-base font-medium text-gray-200">amaruriosfigueroa@gmail.com</p>
        <a
          href="mailto:amaruriosfigueroa@gmail.com"
          className="text-indigo-400 text-sm hover:underline mt-1"
        >
          Enviar correo
        </a>
      </div>
    </section>
  );
}
