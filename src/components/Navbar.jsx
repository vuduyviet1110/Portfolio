import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
function NavBar({ scrollTo }) {
  return (
    <nav className="z-40 mb-20 flex text-neutral-300 py-11  text-2xl justify-between items-center antialiased">
      <div className="flex text">VITRA .VU</div>
      <div className="hidden md:flex">
        <ul className="gap-5 flex ">
          <motion.li whileHover={{ scale: 1.2, color: "#8a8a8a" }}>
            <button onClick={() => scrollTo("about")}>About</button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2, color: "#8a8a8a" }}>
            <button onClick={() => scrollTo("projects")}>Projects</button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2, color: "#8a8a8a" }}>
            <button onClick={() => scrollTo("technology")}>Technologies</button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2, color: "#8a8a8a" }}>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </motion.li>
        </ul>
      </div>
      <div className="gap-5 flex ">
        <a
          className=""
          href="https://github.com/vuduyviet1110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className=""
          href="https://www.facebook.com/profile.php?id=100013827735971"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>

        <a
          className=""
          href="https://www.instagram.com/vitra.vu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="text-xl"
          href="https://www.topcv.vn/xem-cv/VgQEBFhVV1QPUVcFWllQVQ0NVQEPUAMBWwUBBg38be"
          target="_blank"
          rel="noopener noreferrer"
        >
          My CV
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
