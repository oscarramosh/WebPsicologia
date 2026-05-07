export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* 💬 BURBUJA */}
      <a
        href="https://wa.me/56981513100?text=Hola,%20tengo%20dudas%20sobre%20las%20sesiones"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-[#2F3A3F] text-sm px-4 py-2 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition"
      >
        ¿Tienes dudas? Hablemos
      </a>

      {/* 🔘 BOTÓN (NO SE TOCA) */}
      <button className="w-14 h-14 rounded-full bg-[#3E5C50] text-white shadow-lg">
        💬
      </button>

    </div>
  );
}