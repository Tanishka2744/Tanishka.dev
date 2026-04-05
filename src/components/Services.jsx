import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaLaptopCode, FaUser } from "react-icons/fa";

const Services = ({ dark }) => {
    const services = [
        {
            icon: <FaCode />,
            title: "Frontend Development",
            desc: "I build modern and interactive user interfaces using React, JavaScript and Tailwind CSS."
        },
        {
            icon: <FaMobileAlt />,
            title: "Responsive Web Design",
            desc: "I create fully responsive websites that work perfectly on mobile, tablet and desktop."
        },
        {
            icon: <FaLaptopCode />,
            title: "Landing Page Development",
            desc: "I design clean and high-converting landing pages for businesses and personal brands."
        },
        {
            icon: <FaUser />,
            title: "Portfolio Website",
            desc: "I build modern portfolio websites to showcase skills, projects and personal branding."
        }
    ];

    return (
        <div id="services" className="min-h-screen px-10 py-20 cursor-pointer">

            {/* HEADING */}
            <h2 className="text-4xl text-center font-bold text-blue-400 mb-4">
                My Services
            </h2>

            {/* SUB HEADING */}
            <p className={`text-center text-lg mb-12 ${dark ? "text-gray-300" : "text-gray-600"}`}>
                What I Provide?
            </p>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`p-6 rounded-xl border text-center transition duration-300 group
            ${dark ? "bg-black border-gray-700" : "bg-white border-gray-300"}`}

                        style={{
                            boxShadow: "0 0 10px rgba(59,130,246,0.3)"
                        }}

                        whileHover={{
                            y: -8,
                            boxShadow: "0 0 25px rgba(59,130,246,0.8)"
                        }}

                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >

                        {/* ICON */}
                        <motion.div
                            className="text-blue-400 text-3xl mb-4 flex justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            {service.icon}
                        </motion.div>

                        {/* TITLE */}
                        <h3 className="text-xl font-semibold mb-2">
                            {service.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className={`${dark ? "text-gray-300" : "text-gray-600"} text-sm`}>
                            {service.desc}
                        </p>

                    </motion.div>
                ))}

            </div>

        </div>
    );
};

export default Services;