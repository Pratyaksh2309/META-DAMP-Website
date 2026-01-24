import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LandingPage() {
    return (
        <div>
            {/* Hero Section with Floating Images */}
            <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-neutral-50 to-primary-blue-50">
                
                {/* Flexbox Container for responsive layout */}
                <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between gap-2 lg:gap-4">
                    
                    {/* Left Side Grid */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hidden lg:grid grid-cols-3 gap-2 xl:gap-4 flex-shrink-0"
                    >
                        {/* Column 1: 3 images stacked vertically */}
                        <div className="flex flex-col justify-between gap-2 xl:gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="floating-image w-16 h-20 lg:w-20 lg:h-24 xl:w-28 2xl:w-32 xl:h-32 2xl:h-40 bg-blue-300"></div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="floating-image w-16 h-20 lg:w-20 lg:h-24 xl:w-28 2xl:w-32 xl:h-32 2xl:h-40 bg-blue-300"></div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="floating-image w-16 h-20 lg:w-20 lg:h-24 xl:w-28 2xl:w-32 xl:h-32 2xl:h-40 bg-blue-300"></div>
                            </motion.div>
                        </div>

                        {/* Column 2: 2 images centered vertically */}
                        <div className="flex flex-col justify-center gap-6 xl:gap-10">
                            <motion.div
                                whileHover={{ scale: 1.08, rotate: -2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="floating-image w-14 h-18 lg:w-16 lg:h-20 xl:w-24 2xl:w-28 xl:h-28 2xl:h-36 bg-blue-200"></div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.08, rotate: 2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="floating-image w-14 h-18 lg:w-16 lg:h-20 xl:w-24 2xl:w-28 xl:h-28 2xl:h-36 bg-blue-200"></div>
                            </motion.div>
                        </div>

                        {/* Column 3: 1 image centered vertically */}
                        <div className="flex flex-col justify-center">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 3 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="floating-image w-12 h-16 lg:w-14 lg:h-18 xl:w-20 2xl:w-24 xl:h-24 2xl:h-32 bg-blue-100"></div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Hero Content - Center Section */}
                    <div className="flex-1 max-w-4xl mx-auto text-center px-4">
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-black mb-6 sm:mb-8"
                        >
                            Welcome to <motion.span
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#235EE6] whitespace-nowrap"
                            ><br/>
                                MEMS D-AMP
                            </motion.span>
                        </motion.h1>

                        {/* Text Placeholder */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="max-w-2xl mx-auto px-4"
                        >
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/90 leading-relaxed mb-8 sm:mb-12">
                                Your comprehensive guide to MEMS courses, internship experiences, and academic pathways at IIT Bombay. Discover insights from seniors and plan your academic journey.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center">
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/courses"
                                        className="block px-6 py-3 lg:px-8 lg:py-4 rounded-full bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] shadow-lg hover:scale-[0.99] transition-all duration-200"
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
                                        className="block px-6 py-3 lg:px-8 lg:py-4 rounded-full bg-[#1F2937] text-white font-semibold hover:bg-[#111827] hover:text-white hover:scale-[0.99] transition-all duration-200 shadow-lg"
                                    >
                                        Read Experiences
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side Grid */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hidden lg:grid grid-cols-3 gap-2 xl:gap-4 flex-shrink-0"
                    >
                        {/* Column 1: 1 image centered vertically */}
                        <div className="flex flex-col justify-center">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -3 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="floating-image w-12 h-16 lg:w-14 lg:h-18 xl:w-20 2xl:w-24 xl:h-24 2xl:h-32 bg-blue-100"></div>
                            </motion.div>
                        </div>

                        {/* Column 2: 2 images centered vertically */}
                        <div className="flex flex-col justify-center gap-6 xl:gap-10">
                            <motion.div
                                whileHover={{ scale: 1.08, rotate: 2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="floating-image w-14 h-18 lg:w-16 lg:h-20 xl:w-24 2xl:w-28 xl:h-28 2xl:h-36 bg-blue-200"></div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.08, rotate: -2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="floating-image w-14 h-18 lg:w-16 lg:h-20 xl:w-24 2xl:w-28 xl:h-28 2xl:h-36 bg-blue-200"></div>
                            </motion.div>
                        </div>

                        {/* Column 3: 3 images stacked vertically */}
                        <div className="flex flex-col justify-between gap-2 xl:gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="floating-image w-16 h-20 lg:w-20 lg:h-24 xl:w-28 2xl:w-32 xl:h-32 2xl:h-40 bg-blue-300"></div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="floating-image w-16 h-20 lg:w-20 lg:h-24 xl:w-28 2xl:w-32 xl:h-32 2xl:h-40 bg-blue-300"></div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="floating-image w-16 h-20 lg:w-20 lg:h-24 xl:w-28 2xl:w-32 xl:h-32 2xl:h-40 bg-blue-300"></div>
                            </motion.div>
                        </div>
                    </motion.div>
                    
                </div>
            </section>
        </div>
    )
}

export default LandingPage