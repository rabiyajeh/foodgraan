import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl font-bold text-red-600 mb-4 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About FoodGraan
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 leading-relaxed text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        At FoodGraan, we bring you a fusion of traditional and modern cuisine prepared
        with love, care, and the freshest ingredients. Our passion for flavor and
        quality is what sets us apart. Whether you’re craving spicy street food or
        comforting home-style meals, we’ve got you covered. Join us in our mission to
        serve joy—one dish at a time.
      </motion.p>
    </div>
  );
};

export default About;