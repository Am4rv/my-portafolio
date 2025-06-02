import React from "react";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section 
    id="experience" 
    className="scroll-m-5 max-w-5xl mx-auto px-6 py-12 text-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-indigo-400 text-center">Experiencia</h2>
      <h3 className="text-xl md:text-2xl text-gray-400 mb-4 font-medium text-center" >
            Experiencias profesionales que han dado forma a mi carrera
          </h3>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-[1.02] hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-1">{exp.company}</h3>
            <p className="text-gray-400 mb-2 italic">{exp.role} · {exp.period}</p>
            <div className="text-gray-300">
              {exp.description.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </div>
            <div className="flex gap-4 mt-4 text-2xl text-indigo-400">
              {exp.icons.map((icon, i) => {
                const { Icon, name } = icon;
                return (
                  <div
                    key={i}
                    title={name}
                    className="transition transform hover:scale-125 hover:text-indigo-300"
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
