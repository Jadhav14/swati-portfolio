import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-24 right-6 z-50 bg-violet-600 hover:bg-violet-700 text-white p-4 rounded-full shadow-lg transition"
    >
      {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}