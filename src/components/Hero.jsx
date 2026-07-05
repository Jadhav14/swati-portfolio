import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaDownload,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#050816] px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400 text-green-400 px-4 py-2 rounded-full mb-6">

            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>

            Available for Work

          </div>

          <p className="text-cyan-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Swati
            <span className="text-violet-500"> Jadhav</span>
          </h1>

          {/* Typing Animation */}

          <TypeAnimation
            sequence={[
              "React Developer",
              1500,
              "Frontend Developer",
              1500,
              "Web Developer",
              1500,
            ]}
            wrapper="h2"
            speed={40}
            repeat={Infinity}
            className="text-3xl text-gray-300 font-semibold mt-5"
          />

          <div className="flex items-center gap-2 text-gray-400 mt-5">

            <FaMapMarkerAlt className="text-violet-400" />

            Maharashtra, India

          </div>

          <p className="mt-8 text-gray-400 leading-8 text-lg max-w-xl">
            Passionate React Developer with experience building responsive,
            user-friendly and high-performance web applications using React,
            JavaScript, HTML and CSS.

            I enjoy turning ideas into modern digital experiences with clean
            code and beautiful UI.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#contact"
              className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-xl flex items-center gap-3 transition"
            >
              Hire Me
              <FaArrowRight />
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-violet-500 hover:bg-violet-600 px-8 py-4 rounded-xl flex items-center gap-3 transition"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-5 mt-10 text-2xl">

            <a
              href="href="https://github.com/Jadhav14"
              className="hover:text-violet-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="href="https://linkedin.com/in/swati-jadhav-8a27902a4"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="swatijd1111@gmail.com"
              className="hover:text-red-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-violet-600 blur-[100px] rounded-full opacity-40"></div>

            <img
              src="/profile.png"
              alt="Swati"
              className="relative w-[360px] h-[360px] rounded-full object-cover border-4 border-violet-500 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}