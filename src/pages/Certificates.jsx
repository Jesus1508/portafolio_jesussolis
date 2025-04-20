import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

const certificates = [
  {
    name: "Vue.js",
    url: "https://drive.google.com/file/d/1tUv9cE6u3hDpdbJWivdZg_hGziMcjfOC/view?usp=drive_link",
  },
  {
    name: "Git + Github",
    url: "https://drive.google.com/file/d/1mbvlhjOoYhGPcyj1scM3f6TVePuYQA9S/view?usp=drive_link",
  },
  {
    name: "Scrum Master y Product Owner",
    url: "https://drive.google.com/file/d/1TXg7kzJ-q5Fh5k83LdFf7OiHC6sP0GmV/view?usp=drive_link",
  },
  {
    name: "Principios SOLID y CleanCode",
    url: "https://drive.google.com/file/d/1c3nP1WP9IaCLdB3ge7hZ0eTQwXqhTnRd/view?usp=drive_link"
  }
];

const Certificates = () => {
  return (
    <motion.section
      id="certificaciones"
      className="py-20 px-6 md:px-24 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-700 border-b-4 border-orange-400 inline-block mb-10">
            Certificaciones
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                <FaCertificate className="text-orange-500" /> {cert.name}
              </h3>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-blue-600 hover:underline text-sm font-medium"
              >
                Ver certificado <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>

        {/* Enlace general a la carpeta */}
        <div className="mt-10 text-center">
          <a
            href="https://drive.google.com/drive/folders/1Bq5OCCkV9csNNmgQE0wBNfhdVwnoybpj?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Ver todos los certificados en Google Drive
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates;
