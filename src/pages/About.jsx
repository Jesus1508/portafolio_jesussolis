import { motion } from "framer-motion";

const About = () => {
    return (
      <motion.section
        id="sobremi"
        className="bg-white py-16 px-6 md:px-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <section id="sobremi" className="bg-white py-16 px-6 md:px-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-400 inline-block">
              Sobre mí
            </h2>
    
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Columna de texto */}
              <div className="flex-1">
                <p className="text-gray-700 mb-4 text-lg">
                  Soy <strong>Jesús Solís Martínez</strong>, Desarrollador FullStack con más de 7 años de experiencia en el desarrollo de soluciones web eficientes, escalables y orientadas al usuario.
                </p>
                <p className="text-gray-700 mb-4 text-lg">
                  Me apasiona crear productos robustos con buenas prácticas y tecnologías modernas. Tengo experiencia trabajando con <strong>Laravel, Vue.js, React, Angular, Node.js, SQL Server</strong> y más, tanto en frontend como backend.
                </p>
                <p className="text-gray-700 mb-4 text-lg">
                  He colaborado con empresas como <strong>Previ Innovación y Gestión</strong>, <strong>OTISA S.A. de C.V.</strong>, <strong>CONABIO</strong> y <strong>Fundación Nemi A.C.</strong>, participando en todas las fases del ciclo de vida del desarrollo.
                </p>
    
                <a
                  href="/CV_CJSM_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300"
                >
                  Descargar CV
                </a>
              </div>
    
              {/* Columna de imagen (opcional) */}
              <div className="flex-1 text-center">
                <img
                  src="/src/assets/profile.jpg" // Reemplaza esto con la imagen que desees
                  alt="Foto de Carmen"
                  className="rounded-full mx-auto w-48 h-48 object-cover border-4 border-yellow-400 shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </motion.section>
    );
  };
  
  export default About;
  