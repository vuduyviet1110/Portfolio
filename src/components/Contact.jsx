import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className=" pb-4 text-slate-300 mb-20 mx-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl text-neon-green font-bold"
      >
        Get in touch
      </motion.h1>
      <div className="flex flex-wrap justify-evenly">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-neon-green"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-neon-green"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="bg-gray-700 text-white p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="bg-gray-700 text-white p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
            <select className="bg-gray-700 text-white p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-neon-green">
              <option value="" disabled selected>
                Select a service
              </option>
            </select>
            <textarea
              rows="5"
              placeholder="Type your message here."
              className="bg-gray-700 text-white p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-neon-green"
            ></textarea>
            <button
              // type="submit"
              onClick={() => alert("Message sent")}
              className=" rounded-lg text-gray-300 py-2 px-6 border-gray-500 border-4 font-semibold hover:text-violet-700 transition duration-300"
            >
              Send message
            </button>
          </form>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full md:w-1/3"
        >
          <div className="text-center space-y-6 tracking-tighter selection:text-orange-500 selection:bg-slate-200">
            <div className="flex items-center gap-4">
              <div className="text-xl font-bold">Address:</div>
              <p className="text-lg">{CONTACT.address}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-xl font-bold">Email:</div>
              <p className="text-lg">{CONTACT.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-xl font-bold">Phone:</div>
              <p className="text-lg">{CONTACT.phoneNo}</p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 text-3xl ">
            <motion.a
              whileHover={{ scale: 1.2 }}
              className="text-white"
              href="https://github.com/vuduyviet1110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              className=""
              href="https://www.facebook.com/profile.php?id=100013827735971"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              className=""
              href="https://www.instagram.com/vitra.vu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";
export default Contact;
