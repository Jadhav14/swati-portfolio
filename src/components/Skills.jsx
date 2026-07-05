import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const technicalSkills = [
  { name: "React.js", level: 90, color: "bg-cyan-500" },
  { name: "JavaScript", level: 88, color: "bg-yellow-400" },
  { name: "HTML5", level: 95, color: "bg-orange-500" },
  { name: "CSS3", level: 92, color: "bg-blue-500" },
];

const tools = [
  { name: "Git", icon: <FaGitAlt className="text-5xl text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-5xl" /> },
  { name: "VS Code", icon: <VscVscode className="text-5xl text-blue-500" /> },
];

const softSkills = [
  "Communication",
  "Problem Solving",
  "Team Collaboration",
  "Project Coordination",
  "Time Management",
  "Quick Learner",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          My <span className="text-violet-500">Skills</span>
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-2xl mx-auto">
          My technical expertise, development tools and professional strengths.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Technical Skills */}

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">

            <h3 className="text-3xl font-bold mb-8">
              Technical Skills
            </h3>

            {technicalSkills.map((skill) => (

              <div key={skill.name} className="mb-7">

                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="bg-gray-700 h-3 rounded-full">

                  <div
                    className={`${skill.color} h-3 rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

          {/* Soft Skills */}

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">

            <h3 className="text-3xl font-bold mb-8">
              Professional Skills
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {softSkills.map((skill) => (

                <div
                  key={skill}
                  className="bg-violet-600/20 border border-violet-500 rounded-xl py-3 text-center"
                >
                  {skill}
                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Tools */}

        <h3 className="text-4xl font-bold text-center mt-20">
          Development Tools
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {tools.map((tool) => (

            <div
              key={tool.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:scale-105 hover:border-violet-500 transition duration-300"
            >

              <div className="flex justify-center">
                {tool.icon}
              </div>

              <h4 className="text-xl mt-5">
                {tool.name}
              </h4>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}