export default function Mentesys() {
  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase text-xs tracking-[0.2em] text-[#6b8f62] mb-3">
            Cómo trabajo
          </p>

          <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">
            Uso <span className="italic text-[#6b8f62]">Mentesys</span> para el
            seguimiento de mis pacientes
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Es la plataforma que utilizo para organizar mi agenda, hacer
            seguimiento del proceso terapéutico y mantener la comunicación con
            cada paciente en un solo lugar, de forma ordenada y confidencial.
          </p>

          <a
            href="https://mentesys.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3E5C50] text-white px-6 py-3 rounded-md text-sm tracking-wide hover:bg-[#2F3A3F] transition"
          >
            Conocer Mentesys →
          </a>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl border border-[#e5e3dc]">
          <img
            src="/mentesys-app.png"
            alt="Panel de la aplicación Mentesys que uso para el seguimiento de mis pacientes"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
