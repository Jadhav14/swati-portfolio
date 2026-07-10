import {
  FaLeaf,
  FaShieldAlt,
  FaUtensils,
  FaArrowRight,
} from "react-icons/fa";

const projects = [
  {
    title: "Food Tracking System",
    icon: <FaUtensils className="text-5xl text-green-400" />,
    description:
      "A responsive web application that helps users monitor daily food intake, calorie consumption and maintain healthy eating habits.",

    tech: ["React", "JavaScript", "HTML", "CSS"],

    features: [
      "Nutrition Tracking",
      "User Dashboard",
      "Responsive Design",
    ],
  },

  {
    title: "Phishing Website Detection",
    icon: <FaShieldAlt className="text-5xl text-cyan-400" />,
    description:
      "Machine Learning based system to detect phishing websites by analysing URL patterns and website characteristics.",

    tech: ["Python", "Machine Learning", "HTML", "CSS"],

    features: [
      "ML Prediction",
      "Security Analysis",
      "Website Detection",
    ],
  },

  {
    title: "Nursery Management System",
    icon: <FaLeaf className="text-5xl text-lime-400" />,
    description:
      "Management system for maintaining plant inventory, customer records and nursery operations efficiently.",

    tech: ["JavaScript", "HTML", "CSS"],

    features: [
      "Inventory Management",
      "Customer Records",
      "Simple Dashboard",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-[#050816] to-[#0b1120] px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          My <span className="text-violet-500">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          A collection of projects showcasing my frontend development,
          problem-solving and application development skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-violet-500 hover:-translate-y-3 transition-all duration-500"
            >

              <div className="mb-8">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mt-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="bg-violet-600/20 text-violet-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="mt-8">

                <h4 className="font-semibold mb-4">
                  Key Features
                </h4>

                <div className="space-y-2">

                  {project.features.map((feature) => (

                    <p
                      key={feature}
                      className="text-gray-400"
                    >
                      ✓ {feature}
                    </p>

                  ))}

                </div>

              </div>


            </div>

          ))}

        </div>

      </div>
    </section>
  );
}