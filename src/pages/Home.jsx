import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-slate-50 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold text-blue-600">Hola, soy Jesús Solís Martínez</h1>
        <p className="mt-4 text-lg text-slate-500">
          Desarrollador FullStack apasionado por la tecnología y la innovación.
        </p>
      </div>
    </motion.section>
  );
};

export default Home;
