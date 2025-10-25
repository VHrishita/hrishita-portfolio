"use client";
import { useState } from "react";
import { skills } from "@/data";

const categories = ["All", "Programming", "Frontend", "Backend", "AI", "Tools"];

const Skills = () => {
  const [selected, setSelected] = useState("All");

  const filteredSkills =
    selected === "All"
      ? skills
      : skills.filter((skill) => skill.category === selected);

  return (
    <section id="skills" className="scroll-mt-20">
      <h1 className="heading text-center mb-10">
        My <span className="text-purple">Skills</span>
      </h1>

      {/* Categories */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selected === cat
                ? "bg-purple text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 px-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-purple/40 transition"
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3" />
            <h3 className="font-medium text-white text-center">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
