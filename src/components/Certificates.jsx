import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    title: "Web Development",
    organization: "Udemy",
    year: "2023",
    description:
      "Completed a comprehensive course covering HTML, CSS, JavaScript and modern web development fundamentals.",
  },
  {
    title: "Web Designing",
    organization: "Great Learning",
    year: "2023",
    description:
      "Learned responsive web design principles, layouts, UI design and user-friendly website creation.",
  },
  {
    title: "Introduction to C++",
    organization: "Udemy",
    year: "2024",
    description:
      "Built a strong foundation in C++ programming, including syntax, OOP concepts and problem solving.",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-24 bg-gradient-to-b from-[#0b1120] to-[#050816] px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">
            My <span className="text-violet-500">Certificates</span>
          </h2>

          <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
            Certifications that strengthened my web development skills and
            continuous learning journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {certificates.map((certificate) => (

            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300"
            >

              <FaCertificate className="text-5xl text-yellow-400 mb-6" />

              <h3 className="text-2xl font-bold">
                {certificate.title}
              </h3>

              <p className="text-violet-400 mt-2">
                {certificate.organization}
              </p>

              <p className="text-gray-500 mt-1">
                {certificate.year}
              </p>

              <p className="text-gray-400 leading-7 mt-5">
                {certificate.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}