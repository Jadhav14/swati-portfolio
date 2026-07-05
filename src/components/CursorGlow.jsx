import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) =>
      setPos({
        x: e.clientX,
        y: e.clientY,
      });

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none w-60 h-60 rounded-full bg-violet-600/20 blur-3xl z-0"
      style={{
        left: pos.x - 120,
        top: pos.y - 120,
      }}
    />
  );
}