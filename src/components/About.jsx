import React from "react";
import ProfilePic from "../assets/profilePic.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="border-b border-slate-700 pb-16 text-slate-300 flex flex-col justify-center items-center mt-28 "
    >
      <div className="flex space-x-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="text-4xl font-thin"
        >
          About{" "}
        </motion.h2>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-red-300 text-4xl font-thin"
        >
          Me
        </motion.h2>
      </div>
      <div className="flex mt-10">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="h-1/2 w-1/2 md:flex hidden items-center justify-center  "
        >
          <img
            className=" h-1/2 w-1/2 rounded-lg ring-2 ring-offset-2 ring-offset-blue-100 hover:ring-offset-blue-300 hover:scale-[1.15] transition-all duration-500 ease-in-out"
            src={ProfilePic}
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="flex md:flex-1 flex-col selection:bg-slate-600 selection:text-orange-500"
        >
          <p className="my-2 max-w-xl font-light italic tracking-wide text-slate-300">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
});
About.displayName = "About";
export default About;
