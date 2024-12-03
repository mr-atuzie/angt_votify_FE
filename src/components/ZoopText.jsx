import React from "react";
import { motion } from "framer-motion";

const ZoopText = ({ text }) => {
  // Split text into an array of characters
  const letters = text.split("");

  // Animation variants for the container and each letter
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // Stagger each letter by 0.05s for a smoother wave
      },
    },
  };

  const letterVariants = {
    hidden: { scale: 0, opacity: 0, color: "#ffffff" },
    visible: {
      scale: [0, 1.3, 1],
      opacity: 1,
      color: ["#ff0000", "#00ff00", "#0000ff", "#ffffff"], // Wave of colors (red, green, blue, white)
      transition: {
        duration: 1.5, // Color wave will last 1.5 seconds for each letter
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror", // Repeats in a mirroring way for back-and-forth animation
      },
    },
  };

  return (
    <div className="flex justify-center items-center  overflow-hidden">
      <motion.div
        className="flex flex-wrap justify-center items-center space-x-2 max-w-full overflow-visible"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-5xl md:text-7xl font-bold"
            variants={letterVariants}
            style={{ display: "inline-block" }} // Ensures each letter is treated separately
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default ZoopText;
