import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="acercade"
      className="py-20 px-6 md:px-24 bg-white dark:bg-slate-800 shadow-md rounded-lg my-10 transition-colors"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 border-b-4 border-orange-400 inline-block mb-6">
          Sobre mí
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Texto */}
          <div className="flex-1">
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-lg">
              Soy <strong>Jesús Solís Martínez</strong>, Desarrollador FullStack freelance con más de 8 años de experiencia creando soluciones web modernas, eficientes y escalables.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-lg">
              Me especializo en el desarrollo de proyectos completos con <strong>React, Angular, Vue.js y Node.js</strong> en el frontend, y <strong>Laravel y Python</strong> en el backend, con despliegues en la nube (<strong>Azure</strong> y <strong>GCP</strong>), CI/CD y arquitectura limpia.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-lg">
              Recientemente he ampliado mi enfoque hacia la integración de asistentes de <strong>IA conversacional (RAG, OpenAI, Cohere)</strong>, combinando mi experiencia fullstack con soluciones de búsqueda semántica y automatización.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-lg">
              He colaborado con empresas como <strong>Aseguratec</strong>, <strong>Previ SRL</strong>, <strong>OTISA S.A.</strong>, <strong>CONABIO</strong> y <strong>Fundación Nemi A.C.</strong>
            </p>

            <a
              href="/CV_Jesus_Solis_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300"
            >
              Descargar CV
            </a>
          </div>

          {/* Imagen */}
          <div className="flex-1 text-center">
            <img
              src="/profile.jpg"
              alt="Foto de Jesús Solís Martínez"
              className="rounded-full mx-auto w-48 h-48 object-cover border-4 border-orange-400 shadow-md"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
