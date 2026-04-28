export default function Footer() {
  return (
    <footer className="bg-[#f4f2ec] border-t border-[#e0ddd6] mt-20">
      
      <div className="max-w-5xl mx-auto px-10 py-12 text-center">

        {/* NAVEGACIÓN */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 mb-8">

          <a
            href="#servicios"
            className="hover:text-[#6b8f62] transition"
          >
            Servicios
          </a>

          <a
            href="#sobre"
            className="hover:text-[#6b8f62] transition"
          >
            Sobre mí
          </a>

          <a
            href="/blog"
            className="hover:text-[#6b8f62] transition"
          >
            Blog
          </a>

          <a
            href="#reserva"
            className="hover:text-[#6b8f62] transition"
          >
            Agenda
          </a>

        </nav>

        {/* LÍNEA DECORATIVA */}
        <div className="w-16 h-[1px] bg-[#6b8f62] mx-auto mb-6 opacity-40" />

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-400 tracking-wide">
          © {new Date().getFullYear()} Psicóloga Paulina Hernández
        </p>

      </div>
    </footer>
  );
}