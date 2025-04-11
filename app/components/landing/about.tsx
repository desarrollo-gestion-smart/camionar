import React from 'react';
import { Truck } from 'lucide-react';

function About() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="flex flex-col items-center gap-12">
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
  );
}

export default About;