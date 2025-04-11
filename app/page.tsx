'use client';
import React, { useState } from 'react';
import { Menu, X, Truck, ChevronRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-[#002B5B] p-2 rounded">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-[#002B5B]">CAMIONAR</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <button className="btn-primary">Publicar Camión</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#002B5B] focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3">
                <button className="w-full mt-2 btn-primary">Publicar Camión</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-16 bg-[#002B5B] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center py-20">
            <div className="transform transition-all duration-500 translate-y-0 opacity-100">
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Donde los camiones encuentran dueño
              </h1>
              <p className="text-xl mb-8">
                Una plataforma exclusiva para la compra y venta de camiones.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#002B5B] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                  Quiero vender mi camión
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300">
                  Busco un camión
                </button>
              </div>
            </div>
            <div className="relative transform transition-all duration-500 translate-x-0 opacity-100">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80"
                alt="Camión moderno"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        <div className="relative h-20 overflow-hidden">
          <div className="absolute bottom-0 w-full h-full bg-white transform -skew-y-3 origin-bottom-right"></div>
        </div>
      </header>

      {/* ¿Qué es Camionar? Section */}
      <section id="que-es" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 transform transition-all duration-500 translate-y-0 opacity-100">¿Qué es Camionar?</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl transform transition-all duration-500 translate-y-0 opacity-100">
            Camionar es un marketplace especializado en compra y venta de transporte de carga. 
            Conectamos compradores y vendedores sin intermediarios.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="transform transition-all duration-500 translate-y-0 opacity-100 hover:translate-y-[-10px]">
              <div className="mb-6">
                <div className="bg-[#002B5B] p-3 rounded-lg inline-block">
                  <Truck className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Publicá gratis tu camión
              </h3>
              <p className="text-gray-600">
                Completa el formulario, sube fotos y videos de los detalles importantes.
                ¡Tu camión empieza a buscar dueño!
              </p>
            </div>

            <div className="transform transition-all duration-500 translate-y-0 opacity-100 hover:translate-y-[-10px]">
              <div className="mb-6">
                <div className="bg-[#002B5B] p-3 rounded-lg inline-block">
                  <Truck className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Contactá de forma directa
              </h3>
              <p className="text-gray-600">
                Recibí mensajes de interesados y coordina todo sin intermediarios.
                Vos controlás la negociación.
              </p>
            </div>

            <div className="transform transition-all duration-500 translate-y-0 opacity-100 hover:translate-y-[-10px]">
              <div className="mb-6">
                <div className="bg-[#002B5B] p-3 rounded-lg inline-block">
                  <Truck className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Vendé más rápido y sin comisiones
              </h3>
              <p className="text-gray-600">
                Programa de puntos, visibilidad y beneficios exclusivos para usuarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 transform transition-all duration-500 translate-y-0 opacity-100">Beneficios de usar Camionar</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl transform transition-all duration-500 translate-y-0 opacity-100">
            Somos un equipo apasionado por el transporte e innovación. Camionar nace desde la escencia,
            desde Salta para brindar soluciones reales a través de préstamos y servicios.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://res.cloudinary.com/durcwuazl/image/upload/v1744342517/dillon-kydd-G6VNKqR8NvM-unsplash_l8hims.jpg"
              alt="Camión en ruta"
              className="rounded-lg shadow-xl transform transition-all duration-500 translate-y-0 opacity-100 hover:scale-105"
            />
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1280"
              alt="Camión estacionado"
              className="rounded-lg shadow-xl transform transition-all duration-500 translate-y-0 opacity-100 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Vision, Mision, Proposito Section */}
      <section id="nosotros" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-12 transform transition-all duration-500 translate-y-0 opacity-100">
              Nuestra visión, misión y propósito
            </h2>
            
            <div className="space-y-12">
              <div className="transform transition-all duration-500 translate-y-0 opacity-100">
                <h3 className="text-2xl font-bold mb-4">Visión</h3>
                <p className="text-gray-600">
                  Somos la plataforma de referencia en Latinoamérica para la compra y venta de camiones.
                </p>
              </div>

              <div className="transform transition-all duration-500 translate-y-0 opacity-100">
                <h3 className="text-2xl font-bold mb-4">Misión</h3>
                <p className="text-gray-600">
                  Conectar a todos quienes mueven el país en una década, sin contratiempos.
                </p>
              </div>

              <div className="transform transition-all duration-500 translate-y-0 opacity-100">
                <h3 className="text-2xl font-bold mb-4">Propósito</h3>
                <p className="text-gray-600">
                  Digitalizar el sector pesado y sus concesionarios.
                </p>
              </div>
            </div>
          </div>

          <div id="faq" className="space-y-4">
            <div className="transform transition-all duration-500 translate-y-0 opacity-100">
              <details className="group">
                <summary className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 flex justify-between items-center cursor-pointer">
                  <span className="text-lg font-semibold">¿Publicar es gratis?</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#002B5B] transition-transform group-hover:translate-x-1 group-open:rotate-90" />
                </summary>
                <div className="p-6 bg-white mt-2 rounded-lg">
                  <p className="text-gray-600">Sí, publicar tu camión en Camionar es completamente gratuito. No cobramos ninguna comisión por publicación ni por venta exitosa.</p>
                </div>
              </details>
            </div>

            <div className="transform transition-all duration-500 translate-y-0 opacity-100">
              <details className="group">
                <summary className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 flex justify-between items-center cursor-pointer">
                  <span className="text-lg font-semibold">¿Cobran comisión por vender?</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#002B5B] transition-transform group-hover:translate-x-1 group-open:rotate-90" />
                </summary>
                <div className="p-6 bg-white mt-2 rounded-lg">
                  <p className="text-gray-600">No, en Camionar no cobramos ninguna comisión por las ventas realizadas. Todo el dinero de la venta es para el vendedor.</p>
                </div>
              </details>
            </div>

            <div className="transform transition-all duration-500 translate-y-0 opacity-100">
              <details className="group">
                <summary className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 flex justify-between items-center cursor-pointer">
                  <span className="text-lg font-semibold">¿Puedo publicar desde cualquier lugar del país?</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#002B5B] transition-transform group-hover:translate-x-1 group-open:rotate-90" />
                </summary>
                <div className="p-6 bg-white mt-2 rounded-lg">
                  <p className="text-gray-600">Sí, puedes publicar tu camión desde cualquier provincia de Argentina. Nuestra plataforma está disponible en todo el país.</p>
                </div>
              </details>
            </div>

            <div className="transform transition-all duration-500 translate-y-0 opacity-100">
              <details className="group">
                <summary className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 flex justify-between items-center cursor-pointer">
                  <span className="text-lg font-semibold">¿Hay un plan para empresas o concesionarios?</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#002B5B] transition-transform group-hover:translate-x-1 group-open:rotate-90" />
                </summary>
                <div className="p-6 bg-white mt-2 rounded-lg">
                  <p className="text-gray-600">Sí, contamos con planes especiales para concesionarios y empresas que incluyen beneficios adicionales como publicaciones destacadas y soporte prioritario.</p>
                </div>
              </details>
            </div>

            <div className="transform transition-all duration-500 translate-y-0 opacity-100">
              <details className="group">
                <summary className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 flex justify-between items-center cursor-pointer">
                  <span className="text-lg font-semibold">¿Cuáles son los requisitos para registrarme?</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#002B5B] transition-transform group-hover:translate-x-1 group-open:rotate-90" />
                </summary>
                <div className="p-6 bg-white mt-2 rounded-lg">
                  <p className="text-gray-600">Solo necesitas un correo electrónico válido y completar tus datos básicos de contacto. Para publicar, deberás verificar tu cuenta con un número de teléfono.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002B5B] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <div className="bg-white p-2 rounded">
                  <Truck className="h-6 w-6 text-[#002B5B]" />
                </div>
                <h2 className="ml-2 text-3xl font-bold">CAMIONAR</h2>
              </div>
              <p className="mt-2">Donde los camiones encuentran dueño</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-300 transition duration-300">Términos y Condiciones</a>
              <a href="#" className="hover:text-blue-300 transition duration-300">Política de Privacidad</a>
              <a href="#" className="hover:text-blue-300 transition duration-300">Contacto</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Camionar. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;