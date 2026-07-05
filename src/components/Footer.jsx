import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold">
              Swati <span className="text-violet-500">Jadhav</span>
            </h2>

            <p className="text-gray-400 mt-2">
              Frontend Developer | React Developer
            </p>
          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/Jadhav14"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/swati-jadhav-8a27902a4"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:swatijd14@gmail.com"
              className="hover:text-green-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-500">

          © 2026 Swati Jadhav • Built with
          <FaHeart className="inline mx-2 text-red-500" />
          React & Tailwind CSS

        </div>

      </div>
    </footer>
  );
}