"use client";

export default function TermsAndConditions() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl">
        <h3 className="text-xl font-bold leading-6 text-[#002B5B]">
          Términos y Condiciones
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Por favor lea cuidadosamente nuestros términos y condiciones antes de utilizar la plataforma.
          </p>
        </div>

        <div className="mt-4 space-y-6 text-sm text-gray-600">
          <div>
            <h4 className="font-medium text-[#002B5B]">1. Introducción</h4>
            <p className="mt-2">
              Estos Términos y Condiciones rigen el uso de nuestra plataforma, incluidos el sitio web,
              aplicaciones móviles y otros servicios relacionados (en adelante, la "Plataforma"). Al
              acceder o utilizar la Plataforma, usted acepta cumplir con estos términos. Si no está de
              acuerdo, por favor no utilice la Plataforma.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">2. Uso de la Plataforma</h4>
            <p className="mt-2">
              Usted se compromete a utilizar la Plataforma únicamente para fines legales y de acuerdo con
              estos términos. Está prohibido:
              <ul className="list-disc pl-5 mt-1">
                <li>Publicar contenido falso, engañoso o ilegal.</li>
                <li>
                  Interferir con el funcionamiento de la Plataforma, incluidos ataques cibernéticos o
                  intentos de acceso no autorizado.
                </li>
                <li>
                  Utilizar la Plataforma para fines distintos a los establecidos, como actividades
                  comerciales no autorizadas.
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">3. Registro y Cuentas</h4>
            <p className="mt-2">
              Para acceder a ciertas funcionalidades, puede ser necesario crear una cuenta. Usted es
              responsable de:
              <ul className="list-disc pl-5 mt-1">
                <li>Proporcionar información precisa y actualizada durante el registro.</li>
                <li>
                  Mantener la confidencialidad de su contraseña y cualquier actividad en su cuenta.
                </li>
                <li>
                  Notificarnos inmediatamente sobre cualquier uso no autorizado de su cuenta.
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">4. Contenido del Usuario</h4>
            <p className="mt-2">
              Cualquier contenido que publique en la Plataforma (como descripciones, imágenes o
              comentarios) debe ser preciso y cumplir con las leyes aplicables. Nos reservamos el derecho
              de eliminar contenido que consideremos inapropiado, ofensivo o que infrinja estos términos.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">5. Limitación de Responsabilidad</h4>
            <p className="mt-2">
              La Plataforma se proporciona "tal cual", sin garantías de ningún tipo. No nos hacemos
              responsables por:
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Daños derivados del uso o la imposibilidad de usar la Plataforma.
                </li>
                <li>
                  La exactitud, calidad o legalidad del contenido proporcionado por los usuarios.
                </li>
                <li>
                  Cualquier transacción o interacción entre usuarios, ya que actuamos solo como
                  intermediarios.
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">6. Modificaciones</h4>
            <p className="mt-2">
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento.
              Las actualizaciones se publicarán en la Plataforma, y su uso continuado implica la aceptación
              de los términos modificados.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">7. Terminación</h4>
            <p className="mt-2">
              Podemos suspender o cancelar su acceso a la Plataforma si incumple estos términos o por
              cualquier otra razón justificada, sin previo aviso.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-[#002B5B]">8. Ley Aplicable</h4>
            <p className="mt-2">
              Estos términos se rigen por las leyes del país donde opera la Plataforma. Cualquier disputa
              será resuelta en los tribunales competentes de dicha jurisdicción.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}