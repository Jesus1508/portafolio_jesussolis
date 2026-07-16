import { motion } from "framer-motion";
const Resume = () => {
    return (
      <motion.section
        id="cv"
        className="bg-slate-50 dark:bg-slate-900 py-20 px-6 md:px-24 transition-colors"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 shadow-md rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 border-b-4 border-orange-400 inline-block">
            CV y Redes Profesionales
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Puedes descargar mi currículum o visitar mis perfiles profesionales.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="/CV_Jesus_Solis_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition"
            >
              Descargar CV
            </a>
            <a
              href="https://github.com/Jesus1508"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-black text-white font-semibold py-2 px-6 rounded shadow transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jesus-solis-martinez-b27b18107/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded shadow transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.section>

    );
  };
  
  export default Resume;
  