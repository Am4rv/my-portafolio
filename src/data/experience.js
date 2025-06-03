import { FaReact, FaGitAlt, FaCss3Alt, FaHtml5, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPython, SiQgis, SiFastapi, SiTyper, SiDocker, SiMongodb } from "react-icons/si";

export const experiences = [
  {
    company: "Universidad de Chile",
    role: "Analista Programador",
    period: "Nov 2024 – Ene 2025",
    description:
      `Desarrollé e implementé el Sistema de Ingresos Especiales (SIE), una plataforma que automatiza y optimiza el proceso de selección de estudiantes mediante vías especiales de admisión, mejorando la eficiencia institucional.
      Asimismo, diseñé y desarrollé el backend del Sistema de Actividades Finales de Egreso (AFE) utilizando Python, FastAPI y PostgreSQL, asegurando un manejo eficiente de datos para académicos, estudiantes y administradores.
      Desplegué y documenté la API, facilitando una integración fluida con el frontend y contribuyendo a una experiencia de usuario robusta y escalable.`,
    icons: [
      { Icon: FaPython, name: "Python" },
      { Icon: SiFastapi, name: "FastAPI" },
      { Icon: SiTyper, name: "Typer" },
      { Icon: SiDocker, name: "Docker" },
      { Icon: SiMongodb, name: "MongoDB" },
      { Icon: FaGitAlt, name: "Git" },
    ],
  },
  
];
