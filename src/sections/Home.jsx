import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useTypewriter from "../hooks/useTypewriter";

const stack = ["React", "Angular", "Vue.js", "Node.js", "Laravel", "Python", "IA / RAG"];

const roles = [
  "Fullstack Developer",
  "Integrador de IA / RAG",
  "Arquitecto de soluciones web",
];

const Home = () => {
  const rolActual = useTypewriter(roles);

  return (
    <motion.section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 px-4 transition-colors overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-400/30 dark:bg-blue-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-40 right-0 w-72 h-72 rounded-full bg-orange-300/30 dark:bg-orange-400/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-blue-300/20 dark:bg-blue-400/10 blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative text-center max-w-3xl">
        <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-3">
          Fullstack Developer · Freelance
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent">
          Hola, soy Jesús Solís Martínez
        </h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 font-medium h-8">
          {rolActual}
          <span className="animate-pulse">|</span>
        </p>
        <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">
          Más de 8 años de experiencia creando soluciones web modernas y escalables, con especialización reciente en asistentes de IA conversacional.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {stack.map((item) => (
            <span
              key={item}
              className="text-sm px-3 py-1 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/Jesus1508"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-2xl transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jesus-solis-martinez-b27b18107/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-2xl transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
