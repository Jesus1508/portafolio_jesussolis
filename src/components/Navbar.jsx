import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 text-white shadow-md">
      <h1 className="text-xl font-bold">Jesus Solís Martínez</h1>
      <ul className="hidden md:flex gap-6">
        {["Inicio", "Sobre mi", "Proyectos", "CV", "Contacto"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-yellow-400">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
