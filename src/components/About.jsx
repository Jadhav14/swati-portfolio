import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

export default function About() {
  const highlights = [
    "Responsive Website Development",
    "React.js Frontend Development",
    "Project Coordination & Client Communication",
    "Clean, Reusable & Scalable Code",
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#050816] to-[#0b1120] px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">
            About <span className="text-violet-500">Me</span>
          </h2>

          <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
            Passionate Frontend Developer with hands-on experience in creating
            responsive and interactive web applications using React,
            JavaScript, HTML and CSS.
          </p>
        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-16 bg-white/5 border border-violet-500/20 rounded-3xl p-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <h3 className="text-4xl font-bold mb-6">
                Hi, I'm Swati 👋
              </h3>

              <p className="text-gray-400 leading-8">
                I enjoy building modern, responsive and user-friendly websites
                using React, JavaScript, HTML and CSS.
              </p>

              <p className="text-gray-400 leading-8 mt-5">
                Along with frontend development, I have experience in project
                coordination, requirement gathering and client communication.
                My goal is to create fast, scalable and visually appealing
                digital experiences that deliver real value.
              </p>

            </div>

            {/* Right */}

            <div className="space-y-5">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
                >

                  <FaCheckCircle className="text-violet-500 text-xl" />

                  <span className="text-gray-200">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>
        </motion.div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-violet-500 transition"
          >

            <FaLaptopCode className="text-5xl text-violet-500 mb-5" />

            <h3 className="text-5xl font-bold">
              1
            </h3>

            <p className="text-gray-400 mt-3">
              Years Experience
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-cyan-400 transition"
          >

            <FaProjectDiagram className="text-5xl text-cyan-400 mb-5" />

            <h3 className="text-5xl font-bold">
              5+
            </h3>

            <p className="text-gray-400 mt-3">
              Projects Completed
            </p>

          </motion.div>

        </div>

        {/* Button */}

        <div className="flex justify-center mt-12">

          <a
            href="#projects"
            className="flex items-center gap-3 bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-xl transition"
          >

            <FaUserTie />

            View My Projects

          </a>

        </div>

      </div>
    </section>
  );
}