import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-8 text-center"
            >
                <h1 className="text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-lg">
                    User Registration System
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                    Securely register and retrieve user data with ease.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Link
                            to="/add"
                            className="px-8 py-4 bg-blue-600 text-white rounded-2xl text-xl font-semibold shadow-md hover:bg-blue-700 transition"
                        >
                            Register Now
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Link
                            to="/get"
                            className="px-8 py-4 bg-green-600 text-white rounded-2xl text-xl font-semibold shadow-md hover:bg-green-700 transition"
                        >
                            Retrieve Data
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
