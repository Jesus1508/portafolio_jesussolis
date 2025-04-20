import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Inicio", to: "inicio" },
    { label: "Sobre mí", to: "acercade" },
    { label: "Habilidades", to: "habilidades" },
    { label: "Proyectos", to: "proyectos" },
    { label: "CV", to: "cv" },
    { label: "Contacto", to: "contacto" },
  ];

  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">Jesus Solís Martínez</h1>
      <ul className="hidden md:flex gap-6">
        {links.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              smooth={true}
              duration={500}
              offset={-80} // Ajusta esto si usas header fijo
              className="cursor-pointer hover:text-yellow-400"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
