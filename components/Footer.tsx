export default function Footer() {
  return (
    <footer className="bg-[#f4f2ec] border-t border-[#e0ddd6] mt-20">
      
      <div className="max-w-6xl mx-auto px-10 py-14 grid md:grid-cols-3 gap-10">

        {/* MARCA */}
        <div>
          <h3 className="font-serif text-xl text-[#4a6741] mb-3">
            Psicóloga Paulina Hernández
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Espacio terapéutico orientado al bienestar emocional,
            autoconocimiento y desarrollo personal.
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Navegación
          </h4>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#servicios" className="hover:text-[#6b8f62] transition">
                Servicios
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-[#6b8f62] transition">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-[#6b8f62] transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#reserva" className="hover:text-[#6b8f62] transition">
                Agenda
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Contacto
          </h4>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>+56 9 81513100</li>
            <li>psicologa.paulinahernandez@gmail.com</li>
            <li>@psico.paulinahernandez</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-[#e0ddd6] py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Psicóloga Paulina Hernández — Todos los derechos reservados
      </div>
    </footer>
  );
}