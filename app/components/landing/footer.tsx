import React from 'react';
import { Truck } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#002B5B] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded">
                <Truck className="h-6 w-6 text-[#002B5B]" />
              </div>
              <h2 className="ml-2 text-3xl font-bold">CAMIONAR</h2>
            </div>
            <p className="mt-2">Donde los camiones encuentran dueño</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div>
              <h4 className="font-bold mb-2">Navegación</h4>
              <ul className="space-y-2">
                <li>
                  <a href="pages/Terms" className="hover:text-blue-300 transition duration-300">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="pages/Policy" className="hover:text-blue-300 transition duration-300">
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Contacto</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:Info@camionar.com" className="hover:text-blue-300 transition duration-300">
                    Info@camionar.com
                  </a>
                </li>
                <li>
                  <a href="tel:+541152580138" className="hover:text-blue-300 transition duration-300">
                    +54 11 5258-0138
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Camionar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;