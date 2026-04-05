import profileImg from "../assets/img.jpg";
import { motion } from "framer-motion";

const About = ({ dark }) => {
    return (
        <div
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 cursor-pointer"
        >

            {/* LEFT IMAGE */}
            <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <img
                    src={profileImg}
                    alt="profile"
                    className="w-72 h-72 rounded-full object-cover border-4 border-blue-400 shadow-[0_0_30px_#3b82f6]"
                />
            </motion.div>

            {/* RIGHT TEXT */}
            <motion.div
                className="md:w-1/2 space-y-5 mt-10 md:mt-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >

                <h2 className="text-4xl font-bold text-blue-400 tracking-wide drop-shadow-[0_0_12px_#3b82f6]">
                    About Me
                </h2>

                <p className={`${dark ? "text-gray-300" : "text-gray-700"} max-w-lg`}>
                    I am a passionate Frontend Developer who loves creating modern and interactive web experiences.
                    I focus on writing clean code, building responsive designs, and adding smooth animations.

                    I enjoy turning ideas into reality using React, JavaScript, and Tailwind CSS.
                </p>

                {/* INFO BOXES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                    <div className={`p-4 rounded-xl border text-center ${dark ? "border-gray-700" : "border-gray-300"} hover:scale-105 hover:shadow-[0_0_15px_#3b82f6] transition`}>
                        <h3 className="text-blue-400 font-semibold">Experience</h3>
                        <p className={`${dark ? "text-gray-300" : "text-gray-700"}`}>Fresher</p>
                    </div>

                    <div className={`p-4 rounded-xl border text-center ${dark ? "border-gray-700" : "border-gray-300"} hover:scale-105 hover:shadow-[0_0_15px_#3b82f6] transition`}>
                        <h3 className="text-blue-400 font-semibold">Projects</h3>
                        <p className={`${dark ? "text-gray-300" : "text-gray-700"}`}>15+ Completed</p>
                    </div>

                    <div className={`p-4 rounded-xl border text-center ${dark ? "border-gray-700" : "border-gray-300"} hover:scale-105 hover:shadow-[0_0_15px_#3b82f6] transition`}>
                        <h3 className="text-blue-400 font-semibold">Skills</h3>
                        <p className={`${dark ? "text-gray-300" : "text-gray-700"}`}>JavaScript, React, Tailwind</p>
                    </div>

                    <div className={`p-4 rounded-xl border text-center ${dark ? "border-gray-700" : "border-gray-300"} hover:scale-105 hover:shadow-[0_0_15px_#3b82f6] transition`}>
                        <h3 className="text-blue-400 font-semibold">Freelance</h3>
                        <p className={`${dark ? "text-gray-300" : "text-gray-700"}`}>Available</p>
                    </div>

                </div>

            </motion.div>

        </div>
    );
};

export default About;