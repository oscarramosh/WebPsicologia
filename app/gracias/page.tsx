export default function Gracias() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fdfcf8] px-6">

      <div className="max-w-xl text-center">

        <p className="uppercase text-xs tracking-[0.2em] text-[#6b8f62] mb-3">
          Confirmación
        </p>

        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Tu sesión ha sido agendada
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Recibirás un correo con los detalles de la sesión.
          Este es el primer paso de un proceso importante.
        </p>

        <a
          href="/"
          className="inline-block bg-[#4a6741] text-white px-6 py-3 rounded-md hover:bg-[#6b8f62] transition"
        >
          Volver al inicio
        </a>

      </div>

    </section>
  );
}