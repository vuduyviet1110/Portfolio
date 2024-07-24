import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
function Hero() {
  const container = (delay) => ({
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: delay } },
  });
  const words = [
    "F",
    "U",
    "L",
    "L",
    " S",
    "T",
    "A",
    "C",
    "K",
    " - ",
    " D",
    "E",
    "V",
    "E",
    "L",
    "O",
    "P",
    "E",
    "R",
  ];
  return (
    <div className="border-b flex justify-between  border-slate-700 pb-16 lg:mb-35">
      <div className="flex md:flex-1 flex-col  gap-2 selection:bg-slate-600 selection:text-orange-500">
        <motion.h1
          variants={container(0.25)}
          initial="hidden"
          animate="visible"
          className="text-6xl mb-8 flex font-thin text-slate-300 antialiased hover:tracking-wider transition-all duration-700 ease-in-out"
        >
          Vu Duy Viet
        </motion.h1>
        <motion.span
          variants={container(1.25)}
          initial="hidden"
          animate="visible"
          className="text-4xl font-thin bg-gradient-to-r  from-slate-500 via-red-500 to-fuchsia-800 bg-clip-text text-transparent tracking-tight inline-block"
        >
          {words.map((word, index) => (
            <span
              className="hover:bg-black hover:scale-[1.5] hover:text-slate-100 hover:border-spacing-4 transition-all duration-300 ease-in-out"
              key={index}
            >
              {word}
            </span>
          ))}
        </motion.span>

        <motion.p
          variants={container(1.5)}
          initial="hidden"
          animate="visible"
          className="my-2 max-w-xl py-6 "
        >
          <TextGenerateEffect
            className="font-thin text-lg italic tracking-tight text-slate-300"
            words={HERO_CONTENT}
          />
        </motion.p>
      </div>
      <div className="h-1/2 w-1/2 md:flex hidden items-center justify-center hover:ring-offset-blue-300 hover:scale-[1.15] transition-all duration-500 ease-in-out ">
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className=" h-1/2 w-1/2 rounded-lg ring-2 ring-offset-2 ring-offset-blue-100 "
          src={ProfilePic}
        />
      </div>
    </div>
  );
}

export default Hero;
