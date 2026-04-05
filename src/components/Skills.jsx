import { useState } from "react";
import { motion } from "framer-motion";

const Skills = ({ dark }) => {
    const [activeTab, setActiveTab] = useState("frontend");

    const skillsData = {
        frontend: [
            { name: "HTML5", level: "Advanced" },
            { name: "CSS3", level: "Advanced" },
            { name: "JavaScript", level: "Intermediate" },
            { name: "React.js", level: "Intermediate" },
            { name: "Redux Toolkit", level: "Intermediate" },
            { name: "Tailwind CSS", level: "Advanced" },
            { name: "jQuery", level: "Basic" },
            { name: "Responsive Design", level: "Advanced" },
            { name: "API Integration", level: "Intermediate" },
            { name: "Context API", level: "Intermediate" },
            { name: "JSON", level: "Intermediate" },
        ],

        tools: [
            { name: "Git", level: "Intermediate" },
            { name: "GitHub", level: "Intermediate" },
            { name: "VS Code", level: "Advanced" },
            { name: "Chrome DevTools", level: "Intermediate" },
            { name: "npm", level: "Intermediate" }, // ✅ added
        ],

        backend: [
            { name: "Node.js", level: "Basic" },
            { name: "Next.js", level: "Basic" },
        ],

        professional: [
            { name: "Communication", level: "Advanced" },
            { name: "Problem Solving", level: "Advanced" },
            { name: "Teamwork", level: "Advanced" },
            { name: "Time Management", level: "Intermediate" },
            { name: "Creativity", level: "Advanced" },
        ],
    };

    return (
        <div id="skills" className="min-h-screen px-10 py-20">

            {/* Heading */}
            <h2 className="text-4xl text-center font-bold text-blue-400 mb-10 drop-shadow-[0_0_10px_#3b82f6]">
                Skills & Expertise
            </h2>

            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-12 flex-wrap">
                {["frontend", "tools", "backend", "professional"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2 rounded-full border transition duration-300 capitalize
            ${activeTab === tab
                                ? "bg-blue-400 text-black shadow-[0_0_15px_#3b82f6]"
                                : dark
                                    ? "border-gray-600 text-gray-300 hover:border-blue-400"
                                    : "border-gray-300 text-gray-700 hover:border-blue-400"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {skillsData[activeTab].map((skill, index) => (
                    <motion.div
                        key={index}
                        className={`p-5 rounded-xl border cursor-pointer
            ${dark ? "border-gray-700 bg-black" : "border-gray-300 bg-white"}
            hover:shadow-[0_0_20px_#3b82f6] transition`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >

                        {/* Skill Name */}
                        <h3 className="text-blue-400 font-semibold text-lg">
                            {skill.name}
                        </h3>

                        {/* Level Badge */}
                        <span className={`inline-block mt-2 px-3 py-1 text-sm rounded-full 
              ${skill.level === "Advanced" && "bg-green-500/20 text-green-400"}
              ${skill.level === "Intermediate" && "bg-yellow-500/20 text-yellow-400"}
              ${skill.level === "Basic" && "bg-red-500/20 text-red-400"}
            `}>
                            {skill.level}
                        </span>

                    </motion.div>
                ))}

            </div>
        </div>
    );
};

export default Skills;