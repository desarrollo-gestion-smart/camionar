"use client";

export default function PrivacyPolicy() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl">
        <h3 className="text-xl font-bold leading-6 text-[#002B5B]">
          Políticas de Privacidad
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Nos comprometemos a proteger su privacidad. Esta política explica cómo recopilamos, usamos y protegemos su información personal.
          </p>
        </div>

        <div className="mt-4 space-y-6 text-sm text-gray-600">
          <div>
            <h4 className="font-medium text-[#002B5B]">1. Información que Recopilamos</h4>
            <p className="mt-2">
              Recopilamos información que usted proporciona directamente, como:
              <ul className="list-disc pl-5 mt-1">
                <li>Datos personales (nombre, correo electrónico, número de teléfono) al registrarse o contactarnos.</li>
                <li>Información de cuenta, como nombre de usuario y contraseña.</li>
                <li>Contenido que publique, como comentarios o publicaciones en la plataforma.</li>
              </ul>
              También recopilamos datos automáticamente, como:
              <ul className="list-disc pl-5 mt-1">
                <li>Dirección IP, tipo de navegador y sistema operativo.</li>
                <li>Actividad en la plataforma, como páginas visitadas y tiempo de uso.</li>
              </ul>
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">2. Uso de la Información</h4>
            <p className="mt-2">
              Utilizamos su información para:
              <ul className="list-disc pl-5 mt-1">
                <li>Proporcionar y mejorar nuestros servicios.</li>
                <li>Personalizar su experiencia en la plataforma.</li>
                <li>Enviar comunicaciones relacionadas con su cuenta o promociones, si ha dado su consentimiento.</li>
                <li>Analizar el uso de la plataforma para optimizar su funcionamiento.</li>
              </ul>
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">3. Compartir Información</h4>
            <p className="mt-2">
              No vendemos ni alquilamos su información personal. Podemos compartirla con:
              <ul className="list-disc pl-5 mt-1">
                <li>Proveedores de servicios que nos ayudan a operar la plataforma (por ejemplo, alojamiento web).</li>
                <li>Autoridades legales, si así lo exige la ley o para proteger nuestros derechos.</li>
                <li>Otros usuarios, únicamente cuando publique contenido públicamente en la plataforma.</li>
              </ul>
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">4. Seguridad de los Datos</h4>
            <p className="mt-2">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información, como cifrado y controles de acceso. Sin embargo, ningún sistema es completamente seguro, por lo que no podemos garantizar la seguridad absoluta.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">5. Sus Derechos</h4>
            <p className="mt-2">
              Dependiendo de su jurisdicción, usted puede tener derecho a:
              <ul className="list-disc pl-5 mt-1">
                <li>Acceder a la información que tenemos sobre usted.</li>
                <li>Solicitar la corrección o eliminación de sus datos.</li>
                <li>Oponerse al procesamiento de su información o retirar su consentimiento.</li>
              </ul>
              Para ejercer estos derechos, contáctenos a través de los canales proporcionados en la plataforma.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">6. Cookies y Tecnologías Similares</h4>
            <p className="mt-2">
              Utilizamos cookies y tecnologías similares para mejorar la funcionalidad y analizar el uso de la plataforma. Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">7. Cambios en esta Política</h4>
            <p className="mt-2">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Las modificaciones se publicarán en la plataforma, y el uso continuado implica la aceptación de los cambios.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">8. Contacto</h4>
            <p className="mt-2">
              Si tiene preguntas sobre esta política o el manejo de sus datos, contáctenos a través de los medios oficiales proporcionados en la plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}