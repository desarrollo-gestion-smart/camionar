import React from 'react';
import { Eye, Target, Handshake } from 'lucide-react';

function VisionMission() {
  return (
    <section className="py-16 px-4 bg-gray-50 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center sm:mb-12">
          Nuestra visión, misión y propósito
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 sm:gap-12 max-w-md mx-auto md:max-w-full bg-blue-50 border border-blue-100 rounded-lg p-8">
          <div className="flex-1 w-full bg-white shadow-md rounded-lg p-6 text-center flex flex-col min-h-[300px]">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-[#002B5B] p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Visión</h3>
            <p className="text-gray-600 text-base leading-relaxed flex-grow">
              Transformar la compraventa de camiones en Latinoamérica, creando un espacio digital, confiable, transparente y sin intermediarios. Queremos liderar el cambio en la forma de conectar personas con vehículos que mueven la economía.
            </p>
          </div>

          <div className="flex-1 w-full bg-white shadow-md rounded-lg p-6 text-center flex flex-col min-h-[300px]">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-[#002B5B] p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Misión</h3>
            <p className="text-gray-600 text-base leading-relaxed flex-grow">
              Facilitar la compra y venta de camiones a través de una plataforma simple, gratuita y especializada. Trabajamos para que cada publicación se convierta en una oportunidad real, sin costos ocultos ni complicaciones.
            </p>
          </div>

          <div className="flex-1 w-full bg-white shadow-md rounded-lg p-6 text-center flex flex-col min-h-[300px]">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-[#002B5B] p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Propósito</h3>
            <p className="text-gray-600 text-base leading-relaxed flex-grow">
              Conectar a quienes mueven el país. Camionar nace para devolverle el control al usuario, acortar distancias y democratizar el acceso a vehículos de carga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;