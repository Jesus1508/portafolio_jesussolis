import { motion } from "framer-motion";

const Home = () => {
    return (
      <motion.section
        id="inicio"
        className="bg-white py-16 px-6 md:px-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <section id="inicio" className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-blue-600">Hola, soy Jesús Solís Martínez</h1>
            <p className="mt-4 text-lg text-slate-500">Desarrolladora FullStack apasionado por la tecnología</p>
          </div>
        </section>
      </motion.section>
    );
  };
  
  export default Home;
  