import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white p-6 flex flex-col md:flex-row justify-between items-center">
      {/* Sección de Contacto */}
      <div className="p-3 text-center">
        <p className="text-2xl mb-2">Contacto</p>
        <p>Calle Marketing 123, 28001 Madrid, España</p>
        <p>Email: info@marketpro.com</p>
      </div>

      {/* Sección de Redes Sociales */}
      <div className="p-3 text-center">
        <p className="text-2xl mb-2">Síguenos</p>
        <div className="flex justify-center space-x-4">
          <i className="fa fa-facebook-f fa-lg cursor-pointer" aria-hidden="true"></i>
          <i className="fa fa-instagram fa-lg cursor-pointer" aria-hidden="true"></i>
          <i className="fa fa-twitter fa-lg cursor-pointer" aria-hidden="true"></i>
          <i className="fa fa-linkedin-square fa-lg cursor-pointer" aria-hidden="true"></i>
        </div>
      </div>

      {/* Sección de Legal */}
      <div className="p-3 text-center">
        <p className="text-2xl mb-2">Legal</p>
        <p>
          <a href="#" className="hover:text-secondary cursor-pointer">
            Aviso Legal
          </a>
        </p>
        <p>
          <a href="#" className="hover:text-secondary cursor-pointer">
            Política de privacidad
          </a>
        </p>
        <p>
          <a href="#" className="hover:text-secondary cursor-pointer">
            Política de cookies
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
