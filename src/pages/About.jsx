import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="acercade"
      className="py-20 px-6 md:px-24 bg-white shadow-md rounded-lg my-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 border-b-4 border-orange-400 inline-block mb-6">
          Sobre mí
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Texto */}
          <div className="flex-1">
            <p className="text-slate-600 mb-4 text-lg">
              Soy <strong>Jesús Solís Martínez</strong>, Desarrollador FullStack con más de 7 años de experiencia en el desarrollo de soluciones web eficientes, escalables y orientadas al usuario.
            </p>
            <p className="text-slate-600 mb-4 text-lg">
              Me apasiona crear productos robustos con buenas prácticas y tecnologías modernas. Tengo experiencia trabajando con <strong>Laravel, Vue.js, React, Angular, Node.js, SQL Server</strong> y más, tanto en frontend como backend.
            </p>
            <p className="text-slate-600 mb-4 text-lg">
              He colaborado con empresas como <strong>Previ Innovación y Gestión</strong>, <strong>OTISA S.A.</strong>, <strong>CONABIO</strong> y <strong>Fundación Nemi A.C.</strong>.
            </p>

            <a
              href="/CV_CJSM_2025.pdf"
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
              alt="Foto de Carmen"
              className="rounded-full mx-auto w-48 h-48 object-cover border-4 border-orange-400 shadow-md"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
