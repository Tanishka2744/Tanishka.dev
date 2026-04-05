import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaVideo } from "react-icons/fa";
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpeg"
import project4 from "../assets/project4.jpg"
import project5 from "../assets/project5.jpeg"
import project6 from "../assets/project6.webp"
import project7 from "../assets/project7.jpg"
import project8 from "../assets/project8.jpg"
import project9 from "../assets/project9.jpg"
import project10 from "../assets/project10.jpeg"
import project11 from "../assets/project11.jpg"
import project12 from "../assets/project12.jpeg"
import project13 from "../assets/project13.jpg"
import project14 from "../assets/project14.jpeg"
import project15 from "../assets/project15.jpg"
import project16 from "../assets/project16.jpg"


const Projects = ({ dark }) => {

    const [activeTab, setActiveTab] = useState("tab1");

    const projects = {

        // 🔵 TAB 1 (Web Essentials - basic HTML/CSS/JS)
        tab1: [
            {
                title: "Calculator",
                tech: ["HTML", "CSS", "JS"],
                desc: "A functional calculator that performs basic arithmetic operations efficiently.",
                img: project1,
                github: "https://github.com/Tanishka2744/Calculator",
                video: "https://calculator-ruddy-eight-73.vercel.app/"
            },
            {
                title: "Code Editor",
                tech: ["HTML", "CSS", "JS"],
                desc: "A live code editor allowing real-time HTML, CSS, and JS preview.",
                img: project2,
                github: "https://github.com/Tanishka2744/Code_Editor",
                video: "https://code-editor-mu-orcin.vercel.app/"
            },
            {
                title: "Country Guide",
                tech: ["HTML", "CSS", "JS"],
                desc: "Provides detailed country information using APIs for learning and reference.",
                img: project3,
                github: "https://github.com/Tanishka2744/Country_Guide",
                video: "https://countryguide-ten.vercel.app/"
            },
            {
                title: "Dictionary",
                tech: ["HTML", "CSS", "JS"],
                desc: "Search words and get accurate meanings, examples, and pronunciation guides.",
                img: project4,
                github: "https://github.com/Tanishka2744/Dictionary",
                video: "https://dictionary-zeta-three.vercel.app/"
            }
        ],

        // 🔵 TAB 2 (JS Explorers - intermediate JS projects)
        tab2: [
            {
                title: "Image Slider",
                tech: ["HTML", "CSS", "JS"],
                desc: "Interactive image slider with smooth transitions and navigation arrows.",
                img: project5,
                github: "https://github.com/Tanishka2744/Image_Slider",
                video: "https://image-slider-three-hazel.vercel.app/"
            },
            {
                title: "Weather App",
                tech: ["HTML", "CSS", "JS"],
                desc: "Live weather updates using APIs for cities around the world.",
                img: project6,
                github: "https://github.com/Tanishka2744/Weather_App",
                video: "https://weather-app-ashy-eta-71.vercel.app/"
            },
            {
                title: "Todo List",
                tech: ["HTML", "CSS", "JS"],
                desc: "Organize your daily tasks efficiently with local storage support.",
                img: project7,
                github: "https://github.com/Tanishka2744/To_Do_List",
                video: "https://to-do-list-rust-three-47.vercel.app/"
            },
            {
                title: "MCQ Master",
                tech: ["HTML", "CSS", "JS"],
                desc: "A quiz application with scoring, timer, and multiple question sets.",
                img: project8,
                github: "https://github.com/Tanishka2744/MCQ_Master",
                video: "https://mcq-master-omega.vercel.app/"
            }
        ],

        // 🔵 TAB 3 (UI Masters - mixed/advanced projects)
        tab3: [
            {
                title: "Stopwatch",
                tech: ["HTML", "CSS", "JS"],
                desc: "Track elapsed time accurately with start, stop, and reset features.",
                img: project9,
                github: "https://github.com/Tanishka2744/StopWatch",
                video: "https://stop-watch-ten-tawny.vercel.app/"
            },
            {
                title: "Local Gym Website",
                tech: ["HTML", "CSS"],
                desc: "Responsive landing page for a local gym showcasing services and trainers.",
                img: project10,
                github: "https://github.com/Tanishka2744/Local_GYM_Website",
                video: "https://local-gym-website.vercel.app/"
            },
            {
                title: "Recipe App",
                tech: ["HTML", "CSS", "JS"],
                desc: "Discover and filter recipes with ingredient and cuisine categories.",
                img: project11,
                github: "https://github.com/Tanishka2744/Recipe_App",
                video: "https://recipe-app-beta-flax.vercel.app/"
            },
            {
                title: "Shopping Website",
                tech: ["HTML", "CSS", "JS"],
                desc: "Basic e-commerce interface for browsing products and adding to cart.",
                img: project12,
                github: "https://github.com/Tanishka2744/Shopping_Website",
                video: "https://shoppingwebsite-jet.vercel.app/"
            }
        ],

        // 🔵 TAB 4 (React Lab - React projects)
        tab4: [
            {
                title: "Netflix Clone",
                tech: ["HTML", "CSS", "JS"],
                desc: "Replica of Netflix UI showing movies with hover animations.",
                img: project13,
                github: "https://github.com/Tanishka2744/Netflix_Clone",
                video: "https://netflixclone-pi-flax.vercel.app/"
            },
            {
                title: "Food Ordering Website",
                tech: ["React"],
                desc: "Order food online with an interactive menu and checkout flow.",
                img: project14,
                github: "https://github.com/Tanishka2744/Food_Ordering_Website",
                video: "https://food-ordering-website-kappa-seven.vercel.app/"
            },
            {
                title: "SocialHub",
                tech: ["React"],
                desc: "Social platform UI with posts, likes, and comments (no video).",
                img: project15,
                github: "https://github.com/Tanishka2744/SocialHub",
                video: "https://social-hub-tawny.vercel.app/"
            },
            {
                title: "Chat UI",
                tech: ["React"],
                desc: "Modern chat interface with conversations and notifications layout.",
                img: project16,
                github: "https://github.com/Tanishka2744/Chat-UI",
                video: "https://chat-ui-two-dun.vercel.app/"
            }
        ]
    };

    return (
        <div id="projects" className="min-h-screen px-10 py-20 cursor-pointer">

            {/* HEADING */}
            <h2 className="text-4xl text-center font-bold text-blue-400 mb-10 drop-shadow-[0_0_10px_#3b82f6]">
                My Projects
            </h2>

            {/* TABS */}
            <div className="flex justify-center gap-4 mb-10 flex-wrap">
                {["Web Essentials", "JS Explorers", "UI Masters", "React Lab"].map((label, i) => {
                    const tab = `tab${i + 1}`;
                    return (
                        <button
                            key={i}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-full border transition
              ${activeTab === tab
                                    ? "bg-blue-400 text-black shadow-[0_0_15px_#3b82f6]"
                                    : "text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-black"
                                }`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            {/* GRID → 2 PER ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {projects[activeTab].map((project, index) => (
                    <motion.div
                        key={index}
                        className={`rounded-xl overflow-hidden border
            ${dark ? "border-gray-700 bg-black" : "border-gray-300 bg-white"}
            hover:shadow-[0_0_25px_#3b82f6] transition flex flex-col items-center text-center`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >

                        {/* IMAGE */}
                        <img src={project.img} className="w-full h-48 object-cover" />

                        {/* CONTENT */}
                        <div className="p-5 space-y-3 w-full flex flex-col items-center">

                            {/* TITLE */}
                            <h3 className="text-xl font-bold text-blue-400">
                                {project.title}
                            </h3>

                            {/* TECH TAGS */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 border border-blue-400 text-blue-400 rounded-full
                 transform transition duration-200 hover:scale-105"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* DESC */}
                            <p className={`${dark ? "text-gray-300" : "text-gray-600"} text-sm max-w-[90%]`}>
                                {project.desc}
                            </p>

                            {/* ICONS */}
                            <div className="flex gap-4 pt-2 justify-center">
                                <a href={project.github} target="_blank">
                                    <FaGithub className="text-blue-400 text-xl hover:scale-110 transition" />
                                </a>
                                {project.video && (
                                    <a href={project.video} target="_blank">
                                        <FaVideo className="text-blue-400 text-xl hover:scale-110 transition" />
                                    </a>
                                )}
                            </div>

                        </div>
                    </motion.div>
                ))}

            </div>

        </div>
    );
};

export default Projects;

