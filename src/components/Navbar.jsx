import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#050816]/80 backdrop-blur-xl border-b border-white/10 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <a
          href="#"
          className="text-2xl font-bold text-violet-500"
        >
          Swati Jadhav
        </a>

        {/* Desktop */}

        <ul className="hidden lg:flex gap-8">

          {navLinks.map((item) => (

            <li key={item.name}>

              <a
                href={item.href}
                className="text-gray-300 hover:text-violet-400 transition duration-300"
              >
                {item.name}
              </a>

            </li>

          ))}

        </ul>

        {/* Right */}

        <div className="hidden lg:flex gap-5 text-xl">

          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-[#0b1120] border-t border-white/10">

          <ul className="flex flex-col items-center py-6 gap-6">

            {navLinks.map((item) => (

              <li key={item.name}>

                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-violet-400 transition"
                >
                  {item.name}
                </a>

              </li>

            ))}

            <div className="flex gap-6 text-2xl mt-2">

              <a
                href="https://github.com/Jadhav14"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/swati-jadhav-8a27902a4"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </ul>

        </div>

      )}

    </nav>
  );
}