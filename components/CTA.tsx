export default function CTA() {
  return (
    <section className="bg-[#f7f5f0] py-20 text-center">
      <h2 className="text-3xl font-serif mb-4">
        Da el primer paso hoy
      </h2>

      <p className="text-gray-600 mb-6">
        Agenda tu sesión y comienza tu proceso terapéutico
      </p>

      <a
        href="/contacto"
        className="bg-green-700 text-white px-8 py-4 rounded-lg"
      >
        Reservar hora
      </a>
    </section>
  );
}