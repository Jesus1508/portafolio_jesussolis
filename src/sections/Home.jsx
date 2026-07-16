import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const stack = ["React", "Angular", "Vue.js", "Node.js", "Laravel", "Python", "IA / RAG"];

const Home = () => {
  return (
    <motion.section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 px-4 transition-colors"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center max-w-3xl">
        <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-3">
          Fullstack Developer · Freelance
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent">
          Hola, soy Jesús Solís Martínez
        </h1>
        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
          Desarrollador FullStack con más de 8 años de experiencia creando soluciones web modernas y escalables, con especialización reciente en asistentes de IA conversacional.
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
