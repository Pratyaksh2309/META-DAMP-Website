import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LandingPage() {
    return (
        <div>
            {/* Hero Section with Floating Images */}
                <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden bg-gradient-to-br from-neutral-50 to-primary-blue-50"
                >

                {/* Left Side Grid */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute left-8 top-1/5 -translate-y-1/5 hidden lg:grid grid-cols-3 gap-4 h-[80vh]"
                >
                    {/* Column 1: 3 images stacked vertically */}
                    <div className="flex flex-col justify-between gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="floating-image w-32 h-40 bg-blue-300"></div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="floating-image w-32 h-40 bg-blue-300"></div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="floating-image w-32 h-40 bg-blue-300"></div>
                        </motion.div>
                    </div>

                    {/* Column 2: 2 images centered vertically */}
                    <div className="flex flex-col justify-center gap-10">
                        <motion.div
                            whileHover={{ scale: 1.08, rotate: -2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="floating-image w-28 h-36 bg-blue-200"></div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.08, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="floating-image w-28 h-36 bg-blue-200"></div>
                        </motion.div>
                    </div>

                    {/* Column 3: 1 image centered vertically */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="floating-image w-24 h-32 bg-blue-100"></div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side Grid */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute right-8 top-1/5 -translate-y-1/5 hidden lg:grid grid-cols-3 gap-1 h-[80vh]"
                >
                    {/* Column 1: 1 image centered vertically */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -3 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="floating-image w-24 h-32 bg-blue-100"></div>
                        </motion.div>
                    </div>

                    {/* Column 2: 2 images centered vertically */}
                    <div className="flex flex-col justify-center gap-10">
                        <motion.div
                            whileHover={{ scale: 1.08, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="floating-image w-28 h-36 bg-blue-200"></div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.08, rotate: -2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="floating-image w-28 h-36 bg-blue-200"></div>
                        </motion.div>
                    </div>

                    {/* Column 3: 3 images stacked vertically */}
                    <div className="flex flex-col justify-between gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="floating-image w-32 h-40 bg-blue-300"></div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="floating-image w-32 h-40 bg-blue-300"></div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="floating-image w-32 h-40 bg-blue-300"></div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Hero Content */}
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-light tracking-tight text-black mb-8"
                    >
                        Welcome to <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-6xl md:text-8xl font-bold tracking-tight text-[#ffd900]"
                        ><br/>
                            MEMS D-AMP
                        </motion.span>
                    </motion.h1>

                    {/* Text Placeholder */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="max-w-2xl mx-auto"
                    >
                        <p className="text-xl md:text-2xl text-black/90 leading-relaxed mb-12">
                            Your comprehensive guide to MEMS courses, internship experiences, and academic pathways at IIT Bombay. Discover insights from seniors and plan your academic journey.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-8 justify-center">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/courses"
                                    className="block px-8 py-4 rounded-full bg-white  text-[#0453f1] font-semibold hover:bg-[#ffb700] hover:text-black transition-all shadow-lg hover:shadow-xl"
                                >
                                    Browse Courses
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/experiences"
                                    className="block px-8 py-4 rounded-full bg-black/10 text-black font-semibold hover:bg-white hover:text-[#0453f1] transition-all border-2 border-white/30 hover:border-white"
                                >
                                    Read Experiences
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage