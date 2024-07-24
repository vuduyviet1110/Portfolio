import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="border-b border-slate-700 pb-4"
      id="projects-section"
      tabIndex="-1"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-stone-300"
      >
        Projects
      </motion.h1>
      {PROJECTS.map((project) => (
        <div
          key={project.title}
          className="flex flex-wrap lg:justify-center mb-8 "
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className=" w-full lg:w-1/4 mb-8"
          >
            <motion.img
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 4, delay: 0.3 }}
              loading="lazy"
              className=" rounded-lg"
              src={project.image}
              alt={project.title}
            />
          </motion.div>
          <div className=" lg:w-1/4"></div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl lg:w-2/4 text-slate-300"
          >
            <h2 className="text-2xl font-bold mb-8 ">{project.title}</h2>
            <p className="font-thin mb-4">{project.description}</p>
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="text-zinc-300 font-bold tracking-wide px-2 py-1 border-2 border-orange-600 rounded-lg mr-2 mb-2"
              >
                {technology}
              </span>
            ))}
            <motion.div
              whileHover={{ translateX: 10 }}
              className="mt-4 mb-2 underline space-x-4 "
            >
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 font-bold "
              >
                Github Link
              </a>
            </motion.div>
            <motion.div
              whileHover={{ translateX: 10 }}
              className="mt-4 mb-2 underline space-x-4 "
            >
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 font-bold "
                >
                  Demo
                </a>
              ) : (
                ""
              )}
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
