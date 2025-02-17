import React, { useState } from "react";
import Button from "./Button";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="relative w-full bg-details z-50">
      <nav className="flex flex-col md:flex-row justify-between items-center p-4 mx-4">
        {/* Logo + Botón de menú */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <img src="/logo.png" alt="logo" className="size-20" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Menú de navegación */}
        <div
          className={`w-full md:flex md:items-center md:w-auto transition-all bg-details duration-300 ${
            isOpen ? "block h-auto py-6" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 p-4 md:p-0">
            <li className="md:me-6 hover:text-secondary pt-3">Inicio</li>
            <li className="md:me-6 hover:text-secondary pt-3">Nosotros</li>
            <li className="md:me-6 hover:text-secondary pt-3">Servicios</li>
            <li className="md:me-6 hover:text-secondary pt-3">Contacto</li>
          </ul>
          <div className="flex justify-center lg:ml-auto lg:mr-0 md:me-6 pt-3">
            <Button text="Buscar" variant="primary" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
