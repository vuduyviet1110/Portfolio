import React from "react";
import { motion } from "framer-motion";
import { DiMongodb, DiMysql } from "react-icons/di";
import { FaNodeJs, FaVuejs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

const Technology = React.forwardRef((props, ref) => {
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
        Technologies
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
          className="rounded-2xl md:border-4 border-2 border-neutral-700 md:p-4 p-2 relative group"
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 -translate-y-full text-slate-300 group-hover:opacity-100 transition-opacity duration-300">
            REACTJS
          </span>
          <RiReactjsLine className="md:text-5xl text-2xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.25)}
          initial="initial"
          animate="animate"
          className="rounded-2xl md:border-4 border-2 border-neutral-700 md:p-4 p-2 relative group"
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 -translate-y-full text-slate-300 group-hover:opacity-100 transition-opacity duration-300">
            NEXTJS
          </span>
          <TbBrandNextjs className="md:text-5xl text-2xl text-slate-200" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.25)}
          initial="initial"
          animate="animate"
          className="rounded-2xl md:border-4 border-2 border-neutral-700 md:p-4 p-2 relative group"
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 -translate-y-full text-slate-300 group-hover:opacity-100 transition-opacity duration-300">
            VUEJS
          </span>
          <FaVuejs className="md:text-5xl text-2xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl md:border-4 border-2 border-neutral-700 md:p-4 p-2 relative group"
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 -translate-y-full text-slate-300 group-hover:opacity-100 transition-opacity duration-300">
            NODEJS
          </span>
          <FaNodeJs className="md:text-5xl text-2xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.75)}
          initial="initial"
          animate="animate"
          className="rounded-2xl md:border-4 border-2 border-neutral-700 md:p-4 p-2 relative group"
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 -translate-y-full text-slate-300 group-hover:opacity-100 transition-opacity duration-300">
            MONGODB
          </span>
          <DiMongodb className="md:text-5xl text-2xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.25)}
          initial="initial"
          animate="animate"
          className="rounded-2xl md:border-4 border-2 border-neutral-700 md:p-4 p-2 relative group"
        >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 -translate-y-full text-slate-300 group-hover:opacity-100 transition-opacity duration-300">
            MYSQL
          </span>
          <DiMysql className="md:text-5xl text-2xl text-blue-600" />
        </motion.div>
      </motion.div>
    </div>
  );
});
Technology.displayName = "Technology";
export default Technology;
