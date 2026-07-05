import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[9999]">

      <div className="text-center">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="w-20 h-20 border-4 border-violet-500 border-t-transparent rounded-full mx-auto"
        />

        <h1 className="text-3xl mt-8 font-bold">
          Swati Jadhav
        </h1>

      </div>

    </div>
  );
}