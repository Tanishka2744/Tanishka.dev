import { motion } from "framer-motion";
import { FaPlaneDeparture, FaPlane, FaPlaneArrival } from "react-icons/fa";

const Education = ({ dark }) => {
    return (
        <div id="education"
            className="min-h-screen px-10 py-20 cursor-pointer">

            {/* Heading */}
            <h2 className="text-4xl text-center font-bold text-blue-400 mb-16 drop-shadow-[0_0_10px_#3b82f6]">
                Education & Certifications
            </h2>

            <div className="relative">

                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-400"></div>

                {/* ITEMS */}
                <div className="space-y-16">

                    {/* ITEM 1 - BA Political Science */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-between"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="md:w-1/2"></div>

                        {/* Timeline Icon */}
                        <motion.div
                            className="z-10 text-blue-400 text-2xl"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaPlaneDeparture />
                        </motion.div>

                        {/* RIGHT CARD */}
                        <div className={`md:w-1/2 p-6 rounded-xl border mt-5 md:mt-0 relative transition-shadow duration-300 ${dark ? "border-gray-700 bg-black hover:shadow-[0_0_20px_#3b82f6]" : "border-gray-300 bg-white hover:shadow-[0_0_20px_#3b82f6]"} shadow-lg`}>
                            <h3 className="text-blue-400 font-bold text-xl">BA (Hons) Political Science</h3>
                            <p className={`${dark ? "text-gray-300" : "text-gray-700"}`}>Delhi University (SOL)</p>
                        </div>
                    </motion.div>

                    {/* ITEM 2 - Full Stack Development */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-between"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* LEFT CARD */}
                        <div className={`md:w-1/2 p-6 rounded-xl border mb-5 md:mb-0 relative transition-shadow duration-300 ${dark ? "border-gray-700 bg-black hover:shadow-[0_0_20px_#3b82f6]" : "border-gray-300 bg-white hover:shadow-[0_0_20px_#3b82f6]"} shadow-lg`}>
                            <h3 className="text-blue-400 font-bold text-xl">Full Stack Development</h3>
                            <p className={`${dark ? "text-gray-300" : "text-gray-700"}`}>Dice Academy</p>

                            {/* Certificate icon */}
                            <a
                                href="/assets/certificate1.jpeg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute right-4 top-4 text-2xl hover:text-blue-600 hover:shadow-[0_0_8px_#3b82f6] transition"
                            >
                                📜
                            </a>
                        </div>

                        {/* Timeline Icon */}
                        <motion.div
                            className="z-10 text-blue-400 text-2xl"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaPlane />
                        </motion.div>

                        <div className="md:w-1/2"></div>
                    </motion.div>

                    {/* ITEM 3 - freeCodeCamp */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-between"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="md:w-1/2"></div>

                        {/* Timeline Icon */}
                        <motion.div
                            className="z-10 text-blue-400 text-2xl"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaPlaneArrival />
                        </motion.div>

                        {/* RIGHT CARD */}
                        <div className={`md:w-1/2 p-6 rounded-xl border relative transition-shadow duration-300 ${dark ? "border-gray-700 bg-black hover:shadow-[0_0_20px_#3b82f6]" : "border-gray-300 bg-white hover:shadow-[0_0_20px_#3b82f6]"} shadow-lg`}>

                            <h3 className="text-blue-400 font-bold text-xl">Frontend Development</h3>
                            <p className={`${dark ? "text-gray-300" : "text-gray-700"}`}>freeCodeCamp</p>

                            {/* ✅ MULTIPLE CERTIFICATE ICONS */}
                            <div className="absolute right-4 top-4 flex gap-2">

                                <a
                                    href="/assets/certificate2.jpeg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl hover:text-blue-600 hover:shadow-[0_0_8px_#3b82f6] transition"
                                >
                                    📜
                                </a>

                                <a
                                    href="/assets/certificate3.jpeg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl hover:text-blue-600 hover:shadow-[0_0_8px_#3b82f6] transition"
                                >
                                    📜
                                </a>

                                <a
                                    href="/assets/certificate4.jpeg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl hover:text-blue-600 hover:shadow-[0_0_8px_#3b82f6] transition"
                                >
                                    📜
                                </a>

                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Education;