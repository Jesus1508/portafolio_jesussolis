import { motion } from "framer-motion";

const Home = () => {
    return (
      <motion.section
        id="sobremi"
        className="bg-white py-16 px-6 md:px-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <section id="inicio" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold">Hola, soy Jesús Solís Martínez</h1>
            <p className="mt-4 text-lg md:text-2xl">Desarrolladora FullStack apasionado por la tecnología</p>
          </div>
        </section>
      </motion.section>
    );
  };
  
  export default Home;
  