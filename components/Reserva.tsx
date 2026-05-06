"use client";

export default function Reserva() {
  return (
    <section className="bg-[#f7f5f0] py-24 px-10" id="reserva">
      
      {/* HEADER */}
      <div className="mb-14">
        <p className="uppercase text-xs tracking-[0.2em] text-[#6b8f62] mb-3">
          Agenda tu hora
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Da el primer <span className="italic text-[#6b8f62]">paso</span>
        </h2>

        <p className="text-gray-500 max-w-xl leading-relaxed">
          Puedes seleccionar un horario disponible directamente en el calendario.
          Un espacio confidencial y sin compromiso.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-16">

        {/* 🟢 CALENDARIO INTEGRADO */}
       <div className="space-y-6">

  <p className="text-gray-600 leading-relaxed">
    Puedes revisar los horarios disponibles y agendar tu sesión de forma simple y confidencial.
  </p>

  <a
    href="/agenda"
    className="inline-block bg-[#4a6741] text-white px-8 py-4 rounded-lg uppercase text-sm tracking-widest hover:bg-[#6b8f62] transition"
  >
    Reserva aquí tu sesión
  </a>

</div>
        {/* 🔵 INFO (NO MODIFICADA) */}
        <div className="space-y-6">

         

          {/* TARJETA CONTACTO */}
          <div className="bg-white border border-[#e5e3dc] rounded-xl p-6 shadow-sm">
            <h3 className="font-serif text-xl mb-5">
              Contacto directo
            </h3>

            <div className="space-y-2 text-sm">
              <p>WhatsApp: +56 9 81513100</p>
              <p>Email: psicologa.paulinahernandez@gmail.com</p>
              <p>Instagram: @psico.paulinahernandez</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}