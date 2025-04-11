import React from 'react';
import { Menu, X, Truck } from 'lucide-react';

// Define the props interface
interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="bg-[#002B5B] p-2 rounded">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <span className="ml-2 text-xl font-bold text-[#002B5B]">CAMIONAR</span>
          </div>

          <div className="hidden md:flex items-center">
            <button className="btn-primary">Publicar Camión</button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#002B5B] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3">
              <button className="w-full mt-2 btn-primary">Publicar Camión</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;