import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="h-screen flex items-center justify-center overflow-hidden relative">

      {/* Moving Left Text */}
      <motion.h1
        className="absolute text-6xl opacity-30 whitespace-nowrap"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        Frontend Developer
      </motion.h1>

      {/* Moving Right Text */}
      <motion.h1
        className="absolute text-6xl opacity-30 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        Frontend Developer
      </motion.h1>

      {/* Center Circle */}
     <motion.div
  className="w-44 h-44 rounded-full flex items-center justify-center z-10 
  bg-white/10 backdrop-blur-md border border-white/30 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl">Welcome</h2>
      </motion.div>

    </div>
  );
};

export default Intro;