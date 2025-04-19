import React from "react";
import { motion } from "framer-motion";

// Import images from the src/assets folder
import Burger from "../assets/Burger.png";
import Pizza from "../assets/Pizza.png";
import Fries from "../assets/Fries.png";
import FoodBg from "../assets/food-bg.jpeg"; // Assuming food-bg is a jpeg

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-br from-green-800 via-green-600 to-green-700 py-20 overflow-hidden text-white shadow-xl">
      
      {/* Floating Food Icons (Decorative) */}
      <motion.img
        src={Burger} // Use the imported image
        alt="burger"
        className="absolute top-10 left-10 w-48 opacity-100 animate-bounce-slow" // Increased size and opacity
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
      />
      <motion.img
        src={Pizza} // Use the imported image
        alt="pizza"
        className="absolute top-20 right-16 w-56 opacity-100 animate-spin-slow" // Increased size and opacity
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <motion.img
        src={Fries} // Use the imported image
        alt="fries"
        className="absolute bottom-10 left-1/2 w-40 opacity-100 transform -translate-x-1/2 animate-bounce" // Increased size and opacity
        initial={{ y: 10 }}
        animate={{ y: -10 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      />

      {/* Background Texture Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${FoodBg})` }} // Use the imported image for the background
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-black tracking-wide leading-tight drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Satisfy Your Cravings
        </motion.h2>

        <motion.p
          className="mt-5 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Dive into a world of delicious flavors, hand-picked for foodies like you. Ready to taste the magic?
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/menu")}
          className="mt-10 px-8 py-4 rounded-full bg-white text-green-700 font-bold text-lg shadow-xl transition hover:bg-green-100"
        >
          🍽️ Explore Menu
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
