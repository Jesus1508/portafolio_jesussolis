import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Inicio", to: "inicio" },
    { label: "Sobre mí", to: "acercade" },
    { label: "Habilidades", to: "habilidades" },
    { label: "Proyectos", to: "proyectos" },
    { label: "Certificados", to: "certificaciones" },
    { label: "CV", to: "cv" },
    { label: "Contacto", to: "contacto" },
  ];

  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Jesús Solís Martínez</h1>

        {/* Botón hamburguesa (visible solo en móvil) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Menú normal (escritorio) */}
        <ul className="hidden md:flex gap-6">
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-yellow-400"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú móvil (visible solo cuando está abierto) */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-gray-800">
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-yellow-400 text-lg"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
