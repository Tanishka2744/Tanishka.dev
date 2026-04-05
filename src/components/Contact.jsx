import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = ({ dark }) => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempErrors = {};
        if (!form.name) tempErrors.name = "Name is required";
        if (!form.email) tempErrors.email = "Email is required";
        if (!form.message) tempErrors.message = "Message is required";

        setErrors(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            // Open default mail client
            window.location.href = `mailto:tanishkakhandelwal00@gmail.com?subject=Contact from ${form.name}&body=${form.message}%0D%0A%0D%0AFrom: ${form.email}`;
        }
    };

    return (
        <div id="contact" className="min-h-screen px-10 py-20 relative cursor-pointer">
            <h2 className="text-4xl text-center font-bold text-blue-400 drop-shadow-[0_0_10px_#3b82f6]">
                Contact Me
            </h2>
            <p className={`text-center mt-2 text-lg ${dark ? "text-gray-300" : "text-gray-600"}`}>
                Let's get in touch
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                {/* LEFT: FORM */}
                <motion.form
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    onSubmit={handleSubmit}
                    className={`flex flex-col gap-4 ${dark ? "bg-black border border-gray-700" : "bg-white border border-gray-300"} p-8 rounded-xl shadow-lg`}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className={`p-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-400"} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        className={`p-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-400"} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        className={`p-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-400"} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

                    <button
                        type="submit"
                        className="bg-blue-400 text-black font-semibold py-3 rounded-lg hover:bg-blue-500 transition"
                    >
                        Send Message
                    </button>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className={`flex flex-col justify-center gap-10 h-full 
  ${dark ? "text-gray-300" : "text-gray-700"}`}
                >

                    {/* PHONE */}
                    <div className="absolute top-60 right-100 flex items-center gap-3">
                        <FaPhoneAlt className="text-blue-400 text-xl" />
                        <span>+91 8588833610</span>
                    </div>

                    {/* EMAIL (CLICKABLE) */}
                    <div className="absolute top-87 right-9 flex items-center gap-3">
                        <FaEnvelope className="text-blue-400 text-xl" />
                        <a
                            href="mailto:tanishkakhandelwal00@gmail.com"
                            className="hover:text-blue-400 transition"
                        >
                            tanishkakhandelwal00@gmail.com
                        </a>
                    </div>

                    {/* LOCATION */}
                    <div className="absolute top-115 right-105 flex items-center gap-3">
                        <FaMapMarkerAlt className="text-blue-400 text-xl" />
                        <span>Delhi, India</span>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="absolute top-135 right-65 flex flex-col items-center gap-3 mt-6">

                        <p className="text-sm text-gray-400">Follow Me</p>

                        <div className="flex gap-6">
                            <a href="https://github.com/Tanishka2744" target="_blank">
                                <FaGithub className="text-blue-400 text-2xl transition duration-300 
        hover:scale-110 hover:shadow-[0_0_15px_#3b82f6]" />
                            </a>

                            <a href="https://www.linkedin.com/in/tanishkakhandelwal122704/" target="_blank">
                                <FaLinkedin className="text-blue-400 text-2xl transition duration-300 
        hover:scale-110 hover:shadow-[0_0_15px_#3b82f6]" />
                            </a>

                            <a href="https://x.com/TanishkaK27124" target="_blank">
                                <FaTwitter className="text-blue-400 text-2xl transition duration-300 
        hover:scale-110 hover:shadow-[0_0_15px_#3b82f6]" />
                            </a>
                        </div>

                    </div>

                </motion.div>
            </div>

            {/* FOOTER */}
            <footer className={`mt-20 text-center py-0 border-t ${dark ? "border-gray-700 text-gray-300" : "border-gray-300 text-gray-700"}`}>
                &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
            </footer>

        </div>
    );
};

export default Contact;





