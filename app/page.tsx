'use client';
import React, { useState } from 'react';
import { Menu, X, ChevronRight, Eye, Target, Handshake,Truck, Car, Star } from 'lucide-react';
import Image from 'next/image';

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
      

      
      <div className="relative w-full overflow-hidden bg-[#002B5B] text-white">
  {/* Imagen en desktop con clip-path y gradiente */}
  <div className="absolute bottom-0 right-0 top-0 hidden w-1/2 md:block">
    <div
      className="absolute bottom-0 right-0 top-0 w-full overflow-hidden"
      style={{
        clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80"
        alt="Camión"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Gradiente encima en desktop */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#002B5B] to-transparent"></div>
    </div>
    {/* Superposición adicional para transición desde el fondo */}
    <div className="absolute bottom-0 left-0 top-0 w-1/4 bg-gradient-to-r from-[#002B5B] to-transparent"></div>
  </div>

  {/* Imagen en mobile */}
  <div className="relative h-64 w-full md:hidden">
    <Image
      src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80"
      alt="Camión"
      fill
      className="object-cover object-center"
      priority
    />
    {/* Gradiente encima en mobile */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#002B5B] to-transparent"></div>
  </div>

  {/* Contenido principal */}
  <div className="container relative z-20 mx-auto grid min-h-[400px] grid-cols-1 items-center px-4 py-10 md:grid-cols-2 lg:min-h-[500px]">
    <div className="flex flex-col space-y-6 pb-10 md:pb-0">
      <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
        Donde los camiones encuentran dueño
      </h1>
      <p className="text-lg text-gray-300 md:text-xl">
        Una plataforma exclusiva para la compra y venta de camiones.
      </p>
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
        <button className="bg-white text-[#002B5B] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          Quiero vender mi camión
        </button>
        <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300">
          Busco un camión
        </button>
      </div>
    </div>
  </div>
</div>
     
      {/* ¿Qué es Camionar? Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="flex flex-col items-center gap-12">
        {/* Tarjeta 1 */}
        <div className="w-full max-w-3xl bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 transition-all hover:shadow-xl flex flex-col sm:flex-row sm:items-start sm:gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 sm:w-1/3 text-center sm:text-left">
            ¿Qué es Camionar?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed sm:w-2/3 text-center sm:text-left">
            Camionar es mucho más que una plataforma de compra y venta de camiones:
            es un ecosistema transparente, colaborativo y sin comisiones, diseñado
            para conectar de forma directa a vendedores y compradores en toda la
            Argentina.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className="w-full max-w-3xl bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 transition-all hover:shadow-xl flex flex-col sm:flex-row sm:items-start sm:gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 sm:w-1/3 text-center sm:text-left">
            Nuestro objetivo
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed sm:w-2/3 text-center sm:text-left">
            Con una interfaz sencilla, herramientas inteligentes y un firme
            compromiso con la profesionalización del sector, trabajamos para
            generar confianza, eficiencia y oportunidades reales para todos.
          </p>
        </div>

      
    
   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: 'Publicá gratis tu camión',
              desc: 'Completa un formulario simple y subí fotos, videos y datos técnicos. Tu camión empieza a buscar dueño sin pagar nada.',
            },
            {
              title: 'Contactá de forma directa',
              desc: 'Recibí consultas sin intermediarios. Vos tenés el control total de la negociación, de principio a fin.',
            },
            {
              title: 'Vendé más rápido y sin comisiones',
              desc: 'Accedé a visibilidad destacada, un programa de beneficios y una comunidad pensada para vendedores reales, todo sin pagar comisiones.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#002B5B] p-2 rounded-md mr-3">
                  <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Beneficios de usar Camionar</h2>
        

        {/* Secciones horizontales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Sección 1: Beneficios para quienes venden camiones */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Truck className="w-10 h-10 mr-3 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-800">
                Para quienes venden camiones
              </h3>
            </div>
            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-base leading-relaxed">
              <li>
                <span className="font-semibold">Publicación 100% gratuita</span> Subí tu camión sin
                costo. No cobramos comisiones ni cargos ocultos.
              </li>
              <li>
                <span className="font-semibold">Contacta de forma directa</span> Recibi mensajes de interesados sin intermediarios. Vos controlás la negociación.
              </li>
              <li>
                <span className="font-semibold">Mayor visibilidad</span> Aprovechá una plataforma exclusiva para camiones, donde los compradores realmente buscan lo que ofreces.
              </li>
              
            </ul>
          </div>

          {/* Sección 2: Beneficios para quienes buscan camiones */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Car className="w-10 h-10 mr-3 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-800">
                Para quienes buscan camiones
              </h3>
            </div>
            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-base leading-relaxed">
              <li>
                <span className="font-semibold">Búsqueda especializada</span> Encontrá únicamente
                camiones, sin perder tiempo con publicaciones.
              </li>
              <li>
                <span className="font-semibold">Filtros personalizados</span> Buscá por tipo,
                modelo, año, ubicación y más.
              </li>
              <li>
                <span className="font-semibold">Transparencia</span> Accedé a fotos, detalles
                técnicos, estado y reseñas (próximamente).
              </li>
            </ul>
          </div>

          {/* Sección 3: Beneficios generales de Camionar */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Star className="w-10 h-10 mr-3 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-800">Beneficios generales</h3>
            </div>
            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-base leading-relaxed">
              <li>
                 Plataforma 100% enfocada en camiones
              </li>
              <li>
              Sin comisiones por transaccion
              </li>
              <li>
                Rápida, segura y simple de usar
              </li>
              <li>
                Comunidad con programa de puntos y beneficios para usuarios frecuentes (en desarrollo)
              </li>
            </ul>
          </div>
        </div>

        {/* Imágenes de camiones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <img
            src="https://res.cloudinary.com/durcwuazl/image/upload/v1744342517/dillon-kydd-G6VNKqR8NvM-unsplash_l8hims.jpg"
            alt="Camión en ruta"
            className="rounded-lg shadow-xl hover:scale-105 transition duration-500"
          />
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1280"
            alt="Camión estacionado"
            className="rounded-lg shadow-xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>

      {/* Testimonios Section */}
      

      {/* Visión, Misión, Propósito */}
      <section className="py-16 px-4 bg-gray-50 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center sm:mb-12">
          Nuestra visión, misión y propósito
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 sm:gap-12 max-w-md mx-auto md:max-w-full">
          {/* Visión */}
          <div className="flex-1 w-full bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-[#002B5B] p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Visión</h3>
            <p className="text-gray-600 text-base leading-relaxed">
             Transformar la compraventa de camiones en Latinoamérica, creando un espacio digital, confiable, transparente y sin intermediarios. Queremos liderar el cambio en la forma de conectar personas con vehículos que mueven la economía.
            </p>
          </div>

          {/* Misión */}
          <div className="flex-1 w-full bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-[#002B5B] p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Misión</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Facilitar la compra y venta de camiones a través de una plataforma simple, gratuita y especializada. Trabajamos para que cada publicacion se convierta en una oportunidad real, sin costos ocultos ni complicaciones.
            </p>
          </div>

          {/* Propósito */}
          <div className="flex-1 w-full bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-[#002B5B] p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Propósito</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Conectar a quienes mueven el país. Camionar nace para devolverle el control al usuario, acortar distancias y democratizar el acceso a vehiculos de carga.
            </p>
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
<section className="py-16 px-4 bg-gray-50 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center sm:mb-12">
          Nuestra visión, misión y propósito
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 sm:gap-12 max-w-md mx-auto md:max-w-full">
          {/* Visión */}
          <div className="flex-1 w-full bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-[#002B5B] p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Visión</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Ser la plataforma de referencia en Latinoamérica para la compra y venta de camiones.
            </p>
          </div>

          {/* Misión */}
          <div className="flex-1 w-full bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-[#002B5B] p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Misión</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Conectar a todos quienes mueven el país en una década, sin contratiempos.
            </p>
          </div>

          {/* Propósito */}
          <div className="flex-1 w-full bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-[#002B5B] p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Propósito</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Digitalizar el sector pesado y sus concesionarios.
            </p>
          </div>
        </div>
      </div>
    </section>