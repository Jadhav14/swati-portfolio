import { FaBriefcase } from "react-icons/fa";

const experience = [

  {
    company: "Web Developer",
    duration: "2025 - Present",
    description: [
      "Developing responsive websites using React, HTML, CSS and JavaScript.",
      "Building reusable UI components.",
      "Optimizing website performance and responsiveness.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-[#050816] to-[#0b1120] px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Work <span className="text-violet-500">Experience</span>
        </h2>

        <p className="text-center text-gray-400 mt-5">
          My professional journey in web development.
        </p>

        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 w-1 h-full bg-violet-500"></div>

          {experience.map((item, index) => (
            <div key={index} className="relative pl-16 mb-12">

              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
                <FaBriefcase />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500 transition">

                <div className="flex justify-between flex-wrap gap-2">

                  <h3 className="text-2xl font-semibold">
                    {item.company}
                  </h3>

                  <span className="bg-violet-600 px-4 py-1 rounded-full text-sm">
                    {item.duration}
                  </span>

                </div>

                <ul className="mt-5 space-y-3 text-gray-400 list-disc pl-5">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
