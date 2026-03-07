import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LandingPage() {
    return (
        <div>
            {/* Hero Section with Floating Images */}
            <section className="py-14  px-4 overflow-hidden bg-gradient-to-br from-neutral-50 to-primary-blue-50">
                
                {/* Main Container */}
                <div className="w-full max-w-[2400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        
                        {/* Left Side Grid - Visible at 1200px+ */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="hidden lg:block lg:col-span-3"
                        >
                            <div className="grid grid-cols-3 gap-4 w-full">
                                {/* Column 1: 3 rectangular images stacked vertically */}
                                <div className="flex flex-col justify-between gap-5">
                                    <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ duration: 0.3 }}>
                                        <div className="floating-image w-full h-32 lg:h-32 xl:h-36 bg-blue-300 rounded-lg shadow-md"></div>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05, rotate: -2 }} transition={{ duration: 0.3 }}>
                                        <div className="floating-image w-full h-32 lg:h-32 xl:h-36 bg-blue-300 rounded-lg shadow-md"></div>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ duration: 0.3 }}>
                                        <div className="floating-image w-full h-32 lg:h-32 xl:h-36 bg-blue-300 rounded-lg shadow-md"></div>
                                    </motion.div>
                                </div>

                                {/* Column 2: 2 rectangular images centered vertically */}
                                <div className="flex flex-col justify-center gap-8">
                                    <motion.div whileHover={{ scale: 1.08, rotate: -2 }} transition={{ duration: 0.3 }}>
                                        <div className="floating-image w-full h-28 lg:h-28 xl:h-32 bg-blue-200 rounded-lg shadow-md"></div>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.08, rotate: 2 }} transition={{ duration: 0.3 }}>
                                        <div className="floating-image w-full h-28 lg:h-28 xl:h-32 bg-blue-200 rounded-lg shadow-md"></div>
                                    </motion.div>
                                </div>

                                {/* Column 3: 1 rectangular image centered vertically */}
                                <div className="flex flex-col justify-center">
                                    <motion.div whileHover={{ scale: 1.1, rotate: 3 }} transition={{ duration: 0.3 }}>
                                        <div className="floating-image w-full h-24 lg:h-24 xl:h-28 bg-blue-100 rounded-lg shadow-md"></div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Hero Content - Center Section */}
                        <div className="lg:col-span-6 text-center px-4">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-black mb-6"
                            >
                                Welcome to <motion.span
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="text-3.5xl sm:text-4.5xl md:text-5.5xl lg:text-6.5xl xl:text-7.5xl font-bold tracking-tight text-[#235EE6] block mt-2"
                                >
                                    MEMS D-AMP
                                </motion.span>
                            </motion.h1>

                            {/* Text and CTA */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="max-w-4xl mx-auto"
                            >
                                <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-black/90 leading-relaxed mb-8 px-4">
                                    Your comprehensive guide to MEMS courses, internship experiences, and academic pathways at IIT Bombay. Discover insights from seniors and plan your academic journey.
                                </p>
                                
                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            to="/courses"
                                            className="inline-block px-8 py-3 rounded-full bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] shadow-lg transition-all duration-200"
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
                                            className="inline-block px-8 py-3 rounded-full bg-[#1F2937] text-white font-semibold hover:bg-[#111827] shadow-lg transition-all duration-200"
                                        >
                                            Read Experiences
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side Grid - Visible at 1200px+ */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="hidden lg:block lg:col-span-3"
                        >
                            <div className="grid grid-cols-3 gap-4 w-full">
                                {/* Column 1: 1 rectangular image centered vertically */}
                                <div className="flex flex-col justify-center">
                                    <motion.div whileHover={{ scale: 1.1, rotate: -3 }} transition={{ duration: 0.3 }}>
                                        <div className="floating-image w-full h-24 lg:h-24 xl:h-28 bg-blue-100 rounded-lg shadow-md"></div>
                                    </motion.div>
                                </div>

                                {/* Column 2: 2 rectangular images centered vertically */}
                                <div className="flex flex-col justify-center gap-8">
                                    <motion.div whileHover={{ scale: 1.08, rotate: 2 }} transition={{ duration: 0.3 }}>
                                        <div className="floating-image w-full h-28 lg:h-28 xl:h-32 bg-blue-200 rounded-lg shadow-md"></div>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.08, rotate: -2 }} transition={{ duration: 0.3 }}>
                                        <div className="floating-image w-full h-28 lg:h-28 xl:h-32 bg-blue-200 rounded-lg shadow-md"></div>
                                    </motion.div>
                                </div>

                                {/* Column 3: 3 rectangular images stacked vertically */}
                                <div className="flex flex-col justify-between gap-5">
                                    <motion.div whileHover={{ scale: 1.05, rotate: -2 }} transition={{ duration: 0.3 }}>
                                        <div className="floating-image w-full h-32 lg:h-32 xl:h-36 bg-blue-300 rounded-lg shadow-md"></div>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ duration: 0.3 }}>
                                        <div className="floating-image w-full h-32 lg:h-32 xl:h-36 bg-blue-300 rounded-lg shadow-md"></div>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05, rotate: -2 }} transition={{ duration: 0.3 }}>
                                        <div className="floating-image w-full h-32 lg:h-32 xl:h-36 bg-blue-300 rounded-lg shadow-md"></div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage