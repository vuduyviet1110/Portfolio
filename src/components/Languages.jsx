import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaVuejs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

const Language = React.forwardRef((props, ref) => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  });

  return (
    <div ref={ref} className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-stone-300"
      >
        Languages
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center gap-4 justify-center"
      >
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="h-24 w-24 md:border-4 relative group"
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 -translate-y-full text-slate-300 group-hover:opacity-100 transition-opacity duration-300">
            Vietnamese
          </span>
          <img
            alt="English"
            src="https://unpkg.com/language-icons/icons/vi.svg"
          ></img>
        </motion.div>
        <motion.div
          variants={iconVariants(1.25)}
          initial="initial"
          animate="animate"
          className=" h-24 w-24 md:border-4  relative group"
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 -translate-y-full text-slate-300 group-hover:opacity-100 transition-opacity duration-300">
            English
          </span>
          <img
            alt="German"
            src="https://unpkg.com/language-icons/icons/en.svg"
          ></img>
        </motion.div>
        <motion.div
          variants={iconVariants(1.55)}
          initial="initial"
          animate="animate"
          className="h-24 w-24 md:border-4 relative group"
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 -translate-y-full text-slate-300 group-hover:opacity-100 transition-opacity duration-300">
            German
          </span>
          <img
            alt="German"
            src="https://unpkg.com/language-icons/icons/de.svg"
          ></img>
        </motion.div>
      </motion.div>
    </div>
  );
});
Language.displayName = "Language";
export default Language;
