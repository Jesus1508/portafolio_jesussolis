import { motion } from "framer-motion";
const Resume = () => {
    return (
      <motion.section
      id="cv"
      className="bg-white py-16 px-6 md:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      >
        <section id="cv" className="py-16 px-6 md:px-24 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-400 inline-block">
              CV y Redes Profesionales
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Puedes descargar mi currículum o visitar mis perfiles profesionales.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="/CV_CJSM_2025.pdf"
                target="_blank"
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300"
              >
                Descargar CV
              </a>
              <a
                href="https://github.com/Jesus1508"
                target="_blank"
                className="bg-gray-800 hover:bg-black text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/carmen-de-jesus-solis-martinez-b27b18107"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </motion.section>
    );
  };
  
  export default Resume;
  