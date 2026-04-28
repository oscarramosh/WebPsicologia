"use client";

export default function Reserva() {
  return (
    <section className="bg-[#f7f5f0] py-24 px-10" id="reserva">
      
      {/* HEADER */}
      <div className="mb-12">
        <p className="uppercase text-xs tracking-[0.2em] text-green-700 mb-3">
          Agenda tu hora
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Da el primer <span className="italic text-green-700">paso</span>
        </h2>

        <p className="text-gray-500 max-w-xl leading-relaxed">
          Completa el formulario y me pondré en contacto contigo en menos de 24 horas
          para confirmar tu sesión.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-16">

        {/* FORMULARIO */}
        <form className="space-y-4">

          <div className="grid grid-cols-2 gap-4">
            <input className="p-3 border rounded-lg" placeholder="Nombre" />
            <input className="p-3 border rounded-lg" placeholder="Apellido" />
          </div>

          <input className="w-full p-3 border rounded-lg" placeholder="Correo electrónico" />

          <input className="w-full p-3 border rounded-lg" placeholder="Teléfono (opcional)" />

          <select className="w-full p-3 border rounded-lg">
            <option>Modalidad de sesión</option>
            <option>Presencial</option>
            <option>Online</option>
          </select>

          <select className="w-full p-3 border rounded-lg">
            <option>Motivo de consulta</option>
            <option>Ansiedad</option>
            <option>Depresión</option>
            <option>Duelo</option>
          </select>

          <textarea
            className="w-full p-3 border rounded-lg"
            placeholder="Cuéntame un poco de tu situación..."
          />

          <button className="w-full bg-[#4a6741] text-white py-4 rounded-lg uppercase text-sm tracking-widest hover:bg-[#6b8f62] transition">
            Solicitar hora →
          </button>
        </form>

        {/* INFO */}
        <div className="space-y-6">

          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-serif text-xl mb-4">
              Información de sesiones
            </h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Duración</span>
                <span>50 minutos</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Modalidad</span>
                <span>Online · Presencial</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Ubicación</span>
                <span>Santiago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Respuesta</span>
                <span>24 horas</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Toda la información es confidencial.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-serif text-xl mb-4">
              Contacto directo
            </h3>

            <div className="space-y-2 text-sm">
              <p>WhatsApp: +56 9 XXXX XXXX</p>
              <p>Email: contacto@psicologia.cl</p>
              <p>Instagram: @psicologa</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}