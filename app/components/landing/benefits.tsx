import React from 'react';
import { Truck, Car, Star } from 'lucide-react';

function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Beneficios de usar Camionar</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Star className="w-10 h-10 mr-3 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-800">Beneficios generales</h3>
            </div>
            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-base leading-relaxed">
              <li>Plataforma 100% enfocada en camiones</li>
              <li>Sin comisiones por transaccion</li>
              <li>Rápida, segura y simple de usar</li>
              <li>Comunidad con programa de puntos y beneficios para usuarios frecuentes (en desarrollo)</li>
            </ul>
          </div>
        </div>

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
  );
}

export default Benefits;