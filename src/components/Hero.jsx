import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImg from "../assets/img.jpg";

const Hero = ({ dark }) => {
    return (
        <div
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 pt-24 relative cursor-pointer"
        >
            {/* LEFT TEXT SECTION */}
            <motion.div
                className="md:w-1/2 space-y-5 md:pl-16 z-20 relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Intro Text */}
                <p className={`text-2xl ${dark ? "text-gray-300" : "text-gray-400"}`}>
                    Hey, it's me
                </p>

                {/* Name */}
                <h1
                    className={`text-4xl md:text-5xl font-extrabold ${dark
                        ? `text-white drop-shadow-[0_0_12px_#ffffff]`
                        : `text-black drop-shadow-[0_0_2px_#ffffff]`
                        }`}
                >
                    Tanishka Khandelwal
                </h1>

                {/* Role */}
                <p className={`text-3xl ${dark ? "text-gray-300" : "text-gray-400"}`}>
                    I'm a{" "}
                    <span className="text-blue-400 font-semibold">Frontend Developer</span>
                </p>

                {/* Description */}
                <p className={`max-w-md ${dark ? "text-gray-300" : "text-gray-400"}`}>
                    I create modern, responsive and animated web experiences that feel
                    smooth and user-friendly.
                </p>

                {/* Social Icons */}
                <div className="flex gap-5 mt-4 z-20">
                    <a
                        href="https://github.com/Tanishka2744"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition duration-300 hover:shadow-[0_0_15px_#3b82f6]">
                            <FaGithub size={20} />
                        </button>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tanishkakhandelwal122704/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition duration-300 hover:shadow-[0_0_15px_#3b82f6]">
                            <FaLinkedin size={20} />
                        </button>
                    </a>
                    <a
                        href="https://x.com/TanishkaK27124"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition duration-300 hover:shadow-[0_0_15px_#3b82f6]">
                            <FaTwitter size={20} />
                        </button>
                    </a>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6 z-20">
                    <a href="/assets/Tanishka_Khandelwal_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="px-6 py-2 border rounded-full text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-black transition duration-300 hover:shadow-[0_0_20px_#3b82f6]">
                            Download CV
                        </button>
                    </a>

                    <a href="#projects">
                        <button className="px-6 py-2 border rounded-full text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-black transition duration-300 hover:shadow-[0_0_20px_#3b82f6]">
                            View Projects
                        </button>
                    </a>
                </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
                className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative z-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Optional Glow behind profile */}
                <motion.div
                    className="absolute inset-0 rounded-full blur-[80px] z-0"
                    animate={{ opacity: dark ? [0.3, 0.5, 0.3] : [0.5, 0.7, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ backgroundColor: dark ? "#60c7ff" : "#3b82f6" }}
                ></motion.div>

                {/* Profile Image */}
                <img
                    src={profileImg}
                    alt="profile"
                    className="relative w-80 h-80 rounded-full object-cover border-4 border-white z-20"
                />
            </motion.div>
        </div>
    );
};

export default Hero;