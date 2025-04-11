import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#002B5B] text-white">
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
          <div className="absolute inset-0 bg-gradient-to-l from-[#002B5B] to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 top-0 w-1/4 bg-gradient-to-r from-[#002B5B] to-transparent"></div>
      </div>

      <div className="relative h-64 w-full md:hidden">
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80"
          alt="Camión"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5B] to-transparent"></div>
      </div>

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
  );
}

export default Hero;