import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Inicio", to: "inicio" },
    { label: "Sobre mí", to: "acercade" },
    { label: "Experiencia", to: "experiencia" },
    { label: "Habilidades", to: "habilidades" },
    { label: "Proyectos", to: "proyectos" },
    { label: "Certificados", to: "certificaciones" },
    { label: "CV", to: "cv" },
    { label: "Contacto", to: "contacto" },
  ];

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <img src="/logo-jsm.webp" alt="Logo JSM" className="h-8 w-8 object-contain" />
          Jesús Solís <span className="text-orange-400">Martínez</span>
        </h1>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            {menuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="text-orange-400"
                className="cursor-pointer text-slate-200 hover:text-orange-400 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>

      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="md:hidden flex flex-col items-center gap-4 py-4 bg-slate-900/95 overflow-hidden"
        >
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="text-orange-400"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-slate-200 hover:text-orange-400 text-lg transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
