import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contato" className="border-b border-neutral-900 pb-20 scroll-mt-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Entre em Contato
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        className="m-8 flex items-center justify-center gap-4 text-2xl"
      >
        <a href="https://www.linkedin.com/in/jonathan-melo-dev/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/professorjonathan" target="_blank"><FaGithub /></a>
        <a href="https://t.me/oJonathanMelo" target="_blank"><FaTelegram /></a>
      </motion.div>
    </div>
  )
}

export default Contact