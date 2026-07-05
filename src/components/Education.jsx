import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-[#050816] px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold text-center">
            My <span className="text-violet-500">Education</span>
          </h2>

          <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
            My academic journey has strengthened my technical knowledge,
            problem-solving ability and passion for software development.
          </p>

        </motion.div>

        <div className="mt-16">

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-violet-500 transition duration-500"
          >

            <div className="flex items-center gap-5 mb-8">

              <div className="bg-violet-600 p-5 rounded-2xl">
                <FaGraduationCap className="text-4xl" />
              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Bachelor of Engineering
                </h3>

                <p className="text-violet-400 mt-2">
                  Information Technology
                </p>

              </div>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white/5 rounded-2xl p-6">

                <FaUniversity className="text-cyan-400 text-3xl mb-4" />

                <h4 className="font-semibold">
                  College
                </h4>

                <p className="text-gray-400 mt-2 leading-7">
                  Bharati Vidyapeeth College of Engineering
                </p>

              </div>

              <div className="bg-white/5 rounded-2xl p-6">

                <FaCalendarAlt className="text-green-400 text-3xl mb-4" />

                <h4 className="font-semibold">
                  Passing Year
                </h4>

                <p className="text-gray-400 mt-2">
                  2025
                </p>

              </div>

              <div className="bg-white/5 rounded-2xl p-6">

                <FaStar className="text-yellow-400 text-3xl mb-4" />

                <h4 className="font-semibold">
                  CGPA
                </h4>

                <p className="text-gray-400 mt-2">
                  8.3 / 10
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}